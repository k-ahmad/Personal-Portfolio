function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-800">

          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold text-blue-400"
            >
              MyPortfolio
            </a>

            <p className="mt-3 max-w-sm">
              Building modern, responsive and user-friendly web
              experiences with creativity and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-5">
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex justify-center gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-center text-sm">
          <p>
            © {currentYear} MyPortfolio. All rights reserved.
          </p>

          <p className="mt-2">
            Designed and built with React &amp; Tailwind CSS.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer