
function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b1120] text-gray-400 px-6 pt-16 pb-8">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #64748b 1px, transparent 1px),
              linear-gradient(to bottom, #64748b 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute -top-32 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-gray-800/80">

          {/* Logo & Description */}
          <div>
            <a
              href="#home"
              className="inline-block text-3xl font-bold tracking-wide text-white"
            >
              K<span className="text-blue-500">.</span>A
              <span className="text-cyan-400">hmad</span>
            </a>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Building modern, responsive and user-friendly web
              experiences with creativity, passion and clean code.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-gray-400">
                Always learning and building something new.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-gray-400 hover:text-cyan-400 hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Connect With Me
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Have a project idea or want to work together? Feel free
              to connect with me.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/k-ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-gray-700 bg-gray-900/70 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-gray-700 bg-gray-900/70 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7 text-sm">

          <p className="text-center">
            © {currentYear}{" "}
            <span className="text-white font-medium">K-Ahmad</span>.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-center">
            Designed & built with{" "}
            <span className="text-blue-400">React</span> and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>.
          </p>

          <a
            href="#home"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
