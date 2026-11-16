import {
  BriefcaseBusiness,
  Code2,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    type: "Internship Experience",
    role: "Web Development Intern",
    company: "Infusible Coder — Software House",
    duration: "1 Year",
    location: "Software House",
    description:
      "Completed a one-year internship at Infusible Coder Software House, gaining practical exposure to the software development environment and improving my web development skills.",
    points: [
      "Gained practical experience in a professional software house environment.",
      "Improved my understanding of frontend and web development.",
      "Practiced building responsive and user-friendly website interfaces.",
      "Developed problem-solving, teamwork, and professional communication skills.",
    ],
    icon: BriefcaseBusiness,
    placeholder: false,
  },
  {
    type: "Project-Based Experience",
    role: "Frontend Developer",
    company: "Personal Projects",
    duration: "Ongoing",
    location: "Self-Directed",
    description:
      "Built responsive web applications and websites while developing practical frontend and web development skills.",
    points: [
      "Developed user interfaces using React and JavaScript.",
      "Created responsive layouts using Tailwind CSS and Bootstrap.",
      "Used Git and GitHub for version control and project management.",
      "Worked with Python and Flask for backend development practice.",
      "Deployed websites using Vercel.",
    ],
    icon: Code2,
    placeholder: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0b1120] px-6 py-24"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.35) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Glow effects */}
      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            My Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              & Journey
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            My professional journey and hands-on experience through practical
            web development projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={24} />
                  </div>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>

                <p className="mt-1 text-cyan-300">{item.company}</p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {item.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    {item.location}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-gray-400">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-3 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:gap-3">
                  {item.type === "Internship Experience"
                    ? "Professional Internship"
                    : "Practical Experience"}
                  <ArrowUpRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
