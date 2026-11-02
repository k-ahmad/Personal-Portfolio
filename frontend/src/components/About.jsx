function About() {
  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5">
              Hello! I'm Kashif Ahmad, a passionate developer
              interested in creating modern and user-friendly
              web applications.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              I enjoy learning new technologies and improving
              my programming skills by building practical projects.
              Currently, I am exploring React, Tailwind CSS,
              Python and Flask.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My goal is to become a skilled full-stack developer
              and build useful digital solutions.
            </p>
          </div>

          {/* Right Side - Personal Information */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">

            <h3 className="text-xl font-semibold mb-6">
              Personal Information
            </h3>

            <div className="space-y-4">

              <p>
                <span className="text-blue-400 font-semibold">
                  Name:
                </span>
                {' '}Kashif Ahmad
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Profession:
                </span>
                {' '}Web Developer
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Interests:
                </span>
                {' '}Web Development, AI, Programming
              </p>

              <p>
                <span className="text-blue-400 font-semibold">
                  Technologies:
                </span>
                {' '}React, Tailwind, Python, Flask
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About