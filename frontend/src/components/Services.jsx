
import {
  MonitorSmartphone,
  Code2,
  Atom,
  LayoutTemplate,
  PanelsTopLeft,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Responsive Website Development",
    description:
      "Building responsive websites that work smoothly on desktops, tablets, and mobile devices.",
    icon: MonitorSmartphone,
    tags: ["Responsive Design", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating modern, interactive, and user-friendly interfaces using HTML, CSS, and JavaScript.",
    icon: Code2,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "React Website Development",
    description:
      "Developing reusable React components and dynamic websites with clean and organized code.",
    icon: Atom,
    tags: ["React", "JavaScript"],
  },
  {
    number: "04",
    title: "Landing Page Design",
    description:
      "Creating attractive landing pages with clear layouts, engaging sections, and modern styling.",
    icon: LayoutTemplate,
    tags: ["UI Design", "Landing Pages"],
  },
  {
    number: "05",
    title: "UI Implementation",
    description:
      "Turning website designs and ideas into clean, functional, and responsive frontend interfaces.",
    icon: PanelsTopLeft,
    tags: ["Frontend UI", "CSS"],
  },
  {
    number: "06",
    title: "Website Customization",
    description:
      "Improving existing websites by updating layouts, styling, components, and responsive behavior.",
    icon: Wrench,
    tags: ["Customization", "UI Improvements"],
  },
];

function Services() {
  return (
    <section
      id="services"
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
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            What I Offer
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            I create modern, responsive, and user-friendly web
            experiences using modern frontend technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition duration-300 group-hover:bg-cyan-400/10" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300 transition duration-300 group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <span className="text-2xl font-bold text-white/20">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:gap-3">
                    Service Details
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
