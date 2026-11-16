
import {
  UserRound,
  BriefcaseBusiness,
  Target,
  Sparkles,
  Code2,
  Rocket,
  GraduationCap,
} from "lucide-react";

const details = [
  {
    icon: UserRound,
    label: "Name",
    value: "Kashif Ahmad",
  },
  {
    icon: BriefcaseBusiness,
    label: "Profession",
    value: "Web Developer",
  },
  {
    icon: Code2,
    label: "Interests",
    value: "Web Development, AI, Programming",
  },
  {
    icon: Target,
    label: "Career Goal",
    value: "Full-Stack Developer",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Python",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0b1120] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background grid and glow effects */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.35) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            Get to know me
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A little introduction about who I am, what I do, and what inspires
            me to create.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Introduction card */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 sm:p-10">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                <Code2 size={25} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Who I Am</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Developer & lifelong learner
                </p>
              </div>
            </div>

            <p className="mb-5 text-base leading-8 text-gray-300">
              Hi, I'm{" "}
              <span className="font-semibold text-blue-400">
                Kashif Ahmad
              </span>
              , a passionate web developer who enjoys building modern,
              responsive, and user-friendly websites.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-400">
              I love exploring new technologies, solving problems, and turning
              creative ideas into real digital experiences. My goal is to keep
              improving my skills and build projects that make a difference.
            </p>

            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-200">
              <Sparkles size={17} className="text-cyan-400" />
              Technologies I work with
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-blue-400/15 bg-blue-500/[0.08] px-4 py-2 text-sm text-blue-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Personal information card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                <UserRound size={25} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Personal Details</h3>
                <p className="mt-1 text-sm text-gray-500">
                  A few things about me
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {details.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>
                      <p className="break-words text-sm font-medium text-gray-200 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Philosophy card */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/10 via-blue-500/[0.06] to-cyan-500/10 p-7 sm:p-9">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
              <Rocket size={28} />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold">
                My Philosophy
              </h3>
              <p className="max-w-4xl leading-8 text-gray-400">
                I believe great development comes from continuous learning,
                creativity, and attention to detail. Every project is an
                opportunity to learn something new and create something better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
