
import { GitBranch, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
const projects = [
  {
    number: "01",
    title: "AI Summarizer",
    category: "AI / Web Application",
    image: "/projects/ai_sumrizer.png",
    description:
      "An AI-powered application that transforms lengthy text into concise, meaningful summaries using intelligent text processing.",
    technologies: ["React", "Gemini API", "Python", "Flask"],
    status: "In Progress",
    github:
      "https://github.com/k-ahmad/Text-Analyzer-and-sumerizer.git",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Personal Website",
    image: "/projects/personal_portfolio.png",
    description:
      "A modern and responsive portfolio website designed to showcase my development skills, projects, and professional journey.",
    technologies: ["React", "Tailwind CSS", "Flask"],
    status: "In Progress",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    category: "E-Commerce / Web Development",
    image: "/projects/ecomerce.png",
    description:
      "A responsive online shopping experience where users can explore products, view details, and add items to their cart.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "In Progress",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#0b1120] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background grid */}
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
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={16} />
              My Recent Work
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Projects.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            A selection of projects I've been building to explore ideas,
            improve my skills, and create useful digital experiences.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] lg:grid-cols-[1.05fr_0.95fr]"
            >
              {/* Project image */}
              <div className="relative min-h-[240px] overflow-hidden bg-[#111c30] sm:min-h-[320px]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/70 via-transparent to-transparent" />

                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#0b1120]/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute bottom-5 left-6 font-mono text-5xl font-bold text-white/80">
                  {project.number}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Project {project.number}
                  </span>

                  <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1.5 text-xs text-amber-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold tracking-tight transition group-hover:text-cyan-300 sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-7 text-sm leading-7 text-gray-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                    >
                      <GitBranch size={17} />
                      View Code
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {!project.github && (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-500">
                      <ExternalLink size={16} />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            More ideas, more experiments, and more projects are on the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
