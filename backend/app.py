from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
from pathlib import Path
import sqlite3
import os

app = Flask(__name__)

# .env file load karna
BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

DATABASE = BASE_DIR / "contacts.db"

# React frontend connection
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173"]
    }
})

# Gmail configuration
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")

mail = Mail(app)


# Database initialize karna
def init_db():
    conn = sqlite3.connect(DATABASE)

    try:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT NOT NULL,
                message TEXT NOT NULL
            )
        """)
        conn.commit()
    finally:
        conn.close()


# Home route
@app.route("/")
def home():
    return "Portfolio Backend is Running!"


# Test API
@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({
        "message": "Hello from Flask!",
        "status": "success"
    })


# Contact form API
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "error": "Invalid or missing JSON data"
        }), 400

    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    subject = data.get("subject", "").strip()
    message = data.get("message", "").strip()

    if not all([name, email, subject, message]):
        return jsonify({
            "error": "Please fill in all fields"
        }), 400

    # Pehle database mein save karna
    try:
        with sqlite3.connect(DATABASE) as conn:
            cursor = conn.execute("""
                INSERT INTO contacts
                (name, email, subject, message)
                VALUES (?, ?, ?, ?)
            """, (name, email, subject, message))

            contact_id = cursor.lastrowid

    except sqlite3.Error:
        app.logger.exception("Database save failed")

        return jsonify({
            "error": "Message save nahi ho saka."
        }), 500

    # Email notification bhejna
    receiver = os.getenv("CONTACT_RECEIVER")

    if not receiver:
        app.logger.error("CONTACT_RECEIVER is missing")

        return jsonify({
            "message": "Message database mein save ho gaya, lekin email receiver configure nahi hai.",
            "status": "saved_email_not_configured",
            "contact_id": contact_id
        }), 200

    try:
        email_message = Message(
            subject=f"Portfolio Contact: {subject}",
            recipients=[receiver],
            body=f"""
You have received a new message from your portfolio.

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""
        )

        mail.send(email_message)

        print("Contact saved and email sent!")

        return jsonify({
            "message": f"Thank you, {name}! Your message was received successfully.",
            "status": "success",
            "contact_id": contact_id
        }), 200

    except Exception:
        app.logger.exception("Email notification failed")

        # Message database mein already save hai
        return jsonify({
            "message": f"Thank you, {name}! Your message was saved, but email notification could not be sent.",
            "status": "saved_email_failed",
            "contact_id": contact_id
        }), 200


# Saved contacts API
@app.route("/api/contacts", methods=["GET"])
def get_contacts():
    try:
        with sqlite3.connect(DATABASE) as conn:
            conn.row_factory = sqlite3.Row

            rows = conn.execute("""
                SELECT id, name, email, subject, message
                FROM contacts
                ORDER BY id DESC
            """).fetchall()

            contacts = [dict(row) for row in rows]

        return jsonify({
            "status": "success",
            "contacts": contacts
        })

    except sqlite3.Error:
        app.logger.exception("Could not retrieve contacts")

        return jsonify({
            "error": "Could not retrieve contacts"
        }), 500


# Database create karna agar pehle se nahi hai
init_db()


if __name__ == "__main__":
    app.run(debug=True, port=5000)