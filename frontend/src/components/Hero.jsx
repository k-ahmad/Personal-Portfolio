function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center px-6 py-20"
    >

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side - Introduction */}
        <div>

          <p className="text-blue-400 text-lg font-semibold mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kashif Ahmad
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I create modern, responsive and user-friendly
            websites using React, JavaScript and Tailwind CSS.
            I love learning new technologies and building
            creative projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">

          <img
            src="https://avatars.githubusercontent.com/u/247913067?v=4"
            alt="Kashif Ahmad"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-xl"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero