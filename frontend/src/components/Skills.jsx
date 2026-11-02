function Skills() {

  const skills = [
    { name: 'HTML', level: '90%', color: 'bg-orange-500' },
    { name: 'CSS', level: '85%', color: 'bg-blue-500' },
    { name: 'JavaScript', level: '75%', color: 'bg-yellow-500' },
    { name: 'React', level: '70%', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: '80%', color: 'bg-teal-500' },
    { name: 'Python', level: '65%', color: 'bg-green-500' },
    { name: 'Flask', level: '40%', color: 'bg-gray-500' },
  ]

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>

          <p className="text-gray-400 mt-5">
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition duration-300"
            >

              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>

                <span className="text-blue-400">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3">

                <div
                  className={`${skill.color} h-3 rounded-full`}
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills