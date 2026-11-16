
import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "UI Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b1120] text-white flex items-center px-6 py-28"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .hero-float {
          animation: float 5s ease-in-out infinite;
        }

        .hero-ring {
          animation: rotateRing 14s linear infinite;
        }

        .hero-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .hero-enter {
          animation: slideUp 0.9s ease-out both;
        }

        .hero-scroll {
          animation: scrollDown 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[-100px] w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] hero-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] hero-glow" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* Left Side */}
        <div className="hero-enter text-center lg:text-left">

          <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-500/10 rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-200">
              Available for new opportunities
            </span>
          </div>

          <p className="text-blue-400 text-lg font-semibold mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5">
            Kashif
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Ahmad.
            </span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="w-10 h-[2px] bg-blue-500" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
              {roles[roleIndex]}
            </h2>
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">
            I build modern, responsive and user-friendly digital
            experiences using React, JavaScript and Tailwind CSS.
            Turning creative ideas into beautiful websites is what I love.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">

            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-xl font-semibold bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Explore My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold border border-gray-600 bg-white/5 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              Let's Talk
            </a>

          </div>

          {/* Social / Tech labels */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10">
            {["React", "JavaScript", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm text-gray-400 border border-gray-700/80 rounded-full px-4 py-2 bg-white/[0.03]"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        {/* Right Side - Profile */}
        <div className="relative flex justify-center items-center hero-enter">

          {/* Background Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[85px]" />

          {/* Rotating Ring */}
          <div className="absolute w-[290px] h-[290px] sm:w-[410px] sm:h-[410px] rounded-full border border-dashed border-blue-400/40 hero-ring" />

          {/* Image Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full p-[5px] bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-900 shadow-[0_0_60px_rgba(37,99,235,0.3)]">

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0b1120]">
              <img
                src="/hero_section/hero_img.jpeg"
                alt="Kashif Ahmad - Frontend Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* Floating React Card */}
          <div className="absolute top-5 right-0 sm:right-5 hero-float bg-[#172238]/90 backdrop-blur-md border border-blue-400/30 rounded-2xl px-4 py-3 shadow-xl">
            <p className="text-xs text-gray-400">Building with</p>
            <p className="font-bold text-blue-300">React.js</p>
          </div>

          {/* Floating Code Card */}
          <div
            className="absolute bottom-5 left-0 sm:left-3 hero-float bg-[#172238]/90 backdrop-blur-md border border-cyan-400/30 rounded-2xl px-4 py-3 shadow-xl"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="text-xs text-gray-400">My passion</p>
            <p className="font-bold text-cyan-300">Clean Code & UI</p>
          </div>

          {/* Small Floating Dot */}
          <div className="absolute top-1/2 -right-3 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee] hero-float" />

        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition"
      >
        <span className="text-xs tracking-[0.25em] uppercase">
          Scroll to explore
        </span>
        <span className="w-5 h-9 border border-gray-600 rounded-full flex justify-center pt-1">
          <span className="w-1 h-2 bg-blue-400 rounded-full hero-scroll" />
        </span>
      </a>

    </section>
  );
}

export default Hero;
