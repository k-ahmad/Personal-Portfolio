
import { useState } from "react";
import {
  Mail,
  Send,
  UserRound,
  MessageSquare,
  FileText,
  Sparkles,
  ArrowUpRight,
  GitBranch,
  ExternalLink,
  Globe,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://personal-portfolio-woub.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: data.message || "Your message was sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message === "Failed to fetch"
            ? "Backend se connection nahi ho saka. Please try again."
            : error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0b1120]/80 py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#0b1120] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.35) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Glow effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Let's Connect
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Touch.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Have an idea, a project, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left information */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9">

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Contact Information
              </p>

              <h3 className="text-3xl font-bold leading-tight">
                Let's build something{" "}
                <span className="text-cyan-300">great together.</span>
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                I'm always interested in discussing new projects,
                creative ideas, and opportunities to learn and collaborate.
              </p>

              {/* Email */}
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-cyan-400/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-300">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Send me a message
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Use the contact form
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/k-ahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <GitBranch size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <ExternalLink size={21} />
                </a>

                <a
                  href="mailto:"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Globe size={21} />
                </a>
              </div>

              <p className="mt-8 text-xs leading-6 text-gray-600">
                Open to learning, collaboration, and exciting opportunities.
              </p>
            </div>
          </div>

          {/* Right contact form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <div className="relative">
                  <UserRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>

                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <div className="relative">
                  <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>

                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-gray-500" />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>
              </div>

              {/* Feedback */}
              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-green-400/20 bg-green-500/10 text-green-300"
                      : "border-red-400/20 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? "Sending Message..." : "Send Message"}

                <Send
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
