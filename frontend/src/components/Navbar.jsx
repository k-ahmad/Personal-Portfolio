
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const closeModal = () => {
    setShowLogin(false);
    setIsRegister(false);
    setShowPassword(false);
  };

  const openLogin = () => {
    setIsOpen(false);
    setIsRegister(false);
    setShowPassword(false);
    setShowLogin(true);
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setShowPassword(false);
  };

  const navLink =
    "relative text-gray-300 hover:text-white transition-colors duration-300 group py-2";

  const loginButton =
    "relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300";

  return (
    <>
      <style>{`
        @keyframes navSlide {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes modalShow {
          from { opacity: 0; transform: translateY(25px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes logoGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(59,130,246,.2); }
          50% { text-shadow: 0 0 20px rgba(59,130,246,.7); }
        }

        .nav-animate { animation: navSlide .6s ease-out both; }
        .logo-glow { animation: logoGlow 3s ease-in-out infinite; }
        .modal-animate { animation: modalShow .35s ease-out both; }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 text-white border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1120]/95 backdrop-blur-xl border-blue-500/20 shadow-xl shadow-black/20 py-3"
            : "bg-[#0b1120]/75 backdrop-blur-lg border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between nav-animate">

          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-extrabold text-white shadow-lg shadow-blue-500/30 group-hover:rotate-6 transition-transform duration-300">
              KA
            </span>

            <span className="text-2xl font-extrabold tracking-tight logo-glow">
              K<span className="text-blue-400">-</span>Ahmad
              <span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(([name, href]) => (
              <a key={name} href={href} className={navLink}>
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <button onClick={openLogin} className={loginButton}>
              Login <span className="ml-1">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-11 h-11 rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xl hover:bg-blue-500/20 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mx-4 mt-4 p-5 rounded-2xl bg-[#111c30]/95 backdrop-blur-xl border border-blue-500/20 shadow-2xl nav-animate">
            <div className="flex flex-col gap-2">
              {links.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 transition"
                >
                  {name}
                </a>
              ))}

              <button onClick={openLogin} className={`${loginButton} mt-3`}>
                Login →
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login / Register Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border border-blue-400/25 bg-[#111c30] text-white p-7 sm:p-9 shadow-[0_0_70px_rgba(37,99,235,0.18)] modal-animate"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Glow */}
            <div className="absolute -top-24 -right-20 w-56 h-56 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 text-gray-400 hover:bg-red-500/15 hover:text-red-400 transition text-xl"
            >
              ×
            </button>

            {/* Heading */}
            <div className="relative text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl font-extrabold shadow-lg shadow-blue-500/30">
                KA
              </div>

              <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                K-Ahmad Portfolio
              </p>

              <h2 className="text-3xl font-extrabold">
                {isRegister ? "Create Account" : "Welcome "}
                {!isRegister && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Back!
                  </span>
                )}
              </h2>

              <p className="text-gray-400 text-sm mt-3">
                {isRegister
                  ? "Create your account and get started."
                  : "Sign in to your personal portfolio account."}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="relative">
              {isRegister && (
                <div className="mb-5">
                  <label className="block text-sm text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="w-full bg-[#0b1120] border border-gray-700/80 rounded-xl px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                </div>
              )}

              <div className="mb-5">
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="w-full bg-[#0b1120] border border-gray-700/80 rounded-xl px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    minLength={6}
                    autoComplete={isRegister ? "new-password" : "current-password"}
                    className="w-full bg-[#0b1120] border border-gray-700/80 rounded-xl px-4 py-3 pr-16 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-xs font-semibold text-blue-400 hover:text-cyan-300"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isRegister && (
                <div className="mb-5">
                  <label className="block text-sm text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="w-full bg-[#0b1120] border border-gray-700/80 rounded-xl px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                </div>
              )}

              <button
                type="submit"
                className={`${loginButton} w-full mt-3 py-3.5`}
              >
                {isRegister ? "Create Account →" : "Login to Account →"}
              </button>
            </form>

            <div className="relative text-center mt-7">
              <p className="text-sm text-gray-400">
                {isRegister
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <button
                  onClick={switchMode}
                  className="text-blue-400 hover:text-cyan-300 font-bold hover:underline underline-offset-4"
                >
                  {isRegister ? "Login" : "Register"}
                </button>
              </p>

              <p className="text-xs text-gray-600 mt-7">
                © K-Ahmad | Personal Portfolio
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
