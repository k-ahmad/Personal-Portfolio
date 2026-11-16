
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Terminal,
  FlaskConical,
  Layers3,
  Sparkles,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2, category: "Markup" },
  { name: "CSS", icon: Palette, category: "Styling" },
  { name: "JavaScript", icon: Braces, category: "Language" },
  { name: "React", icon: Atom, category: "Frontend" },
  { name: "Tailwind CSS", icon: Wind, category: "Styling" },
  { name: "Python", icon: Terminal, category: "Language" },
  { name: "Flask", icon: FlaskConical, category: "Backend" },
  { name: "Responsive UI", icon: Layers3, category: "Design" },
];

function Skills() {
  return (
    <section
      id="skills"
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

      {/* Blue and cyan glow */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Sparkles size={16} />
              What I Work With
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Toolbox.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            A collection of technologies and tools I use to create
            responsive websites and explore new possibilities in web
            development.
          </p>
        </div>

        {/* Technology logo grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group relative flex min-h-[175px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-blue-500/[0.07] hover:shadow-xl hover:shadow-blue-950/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 opacity-0 transition duration-500 group-hover:from-blue-500/[0.08] group-hover:to-cyan-400/[0.08] group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#111c30] text-blue-400 shadow-lg shadow-black/20 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                  <Icon size={34} strokeWidth={1.6} />
                </div>

                {/* Name */}
                <h3 className="relative text-base font-semibold text-gray-100 transition group-hover:text-cyan-300 sm:text-lg">
                  {skill.name}
                </h3>

                {/* Category */}
                <p className="relative mt-2 text-xs uppercase tracking-widest text-gray-500">
                  {skill.category}
                </p>

                {/* Corner decoration */}
                <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-blue-400/40 transition group-hover:bg-cyan-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <div>
            <p className="text-lg font-semibold text-gray-200">
              Learning. Building. Improving.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Always exploring better ways to build for the web.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Currently Growing
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
