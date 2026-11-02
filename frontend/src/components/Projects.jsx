function Projects() {
  const projects = [
    {
      title: "AI Summarizer",
      image: "/projects/ai_sumrizer.png",
      description:
        "An AI-powered application that summarizes long text into short and meaningful summaries.",
      technologies: ["React", "Gemini API", "Python", "Flask"],
      status: "In Progress",
      github: "https://github.com/k-ahmad/Text-Analyzer-and-sumerizer.git",
    },
    {
      title: "Personal Portfolio",
      image: "/projects/personal_portfolio.png",
      description:
        "A responsive personal portfolio website to showcase my skills, projects and contact information.",
      technologies: ["React", "Tailwind CSS", "Flask"],
      status: "In Progress",
    },
    {
      title: "E-Commerce Website",
      image: "/projects/ecomerce.png",
      description:
        "A responsive e-commerce website where users can browse products, explore product details, add items to their cart, and enjoy a smooth online shopping experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>

          <p className="text-gray-400 mt-5">Some projects I have worked on.</p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Number */}
              <div className="text-blue-400 text-3xl font-bold mb-5">
                0{index + 1}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status */}
              <span className="text-sm text-green-400">{project.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
