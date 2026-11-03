import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setStatus({
      type: '',
      message: '',
    })

    try {
      const response = await fetch(
        'https://personal-portfolio-woub.vercel.app/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setStatus({
        type: 'success',
        message: data.message,
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message === 'Failed to fetch'
            ? 'Backend se connection nahi ho saka. Flask server check karein.'
            : error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto" />

          <p className="text-gray-400 mt-5">
            Have a project in mind? Let's talk!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 md:p-8 rounded-xl space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-y"
            />
          </div>

          {status.message && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-lg p-3 ${
                status.type === 'success'
                  ? 'bg-green-900/50 text-green-400'
                  : 'bg-red-900/50 text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg px-6 py-3 font-semibold transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact