import Reveal from "@/components/ui/Reveal";
import {
  Building2,
  Stethoscope,
  SmilePlus,
  Eye,
  Microscope,
  Building,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "Hospitals",
    description:
      "Handle high call volumes and appointment requests effortlessly.",
  },
  {
    icon: Stethoscope,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Clinics",
    description:
      "Never miss patient inquiries during busy consultation hours.",
  },
  {
    icon: SmilePlus,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Dental Practices",
    description:
      "Book appointments and answer common patient questions 24/7.",
  },
  {
    icon: Eye,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Eye Care",
    description:
      "Support patients with scheduling, follow-ups, and inquiries.",
  },
  {
    icon: Microscope,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    title: "Diagnostic Labs",
    description:
      "Respond instantly to appointment and report-related calls.",
  },
  {
    icon: Building,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "Healthcare Networks",
    description:
      "Provide a consistent patient experience across locations.",
  },
];

export default function BuiltFor() {
  return (
    <Reveal>
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#050816] py-32 text-white"
      >
        {/* Premium Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

          <div className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

          <div className="absolute -right-32 top-32 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              Who We Build For
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Built for Modern
              <span className="text-cyan-400"> Healthcare Teams</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Syclick is designed for healthcare providers that want to
              improve patient communication, reduce missed calls, and free
              their staff to focus on delivering exceptional care.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-cyan-400/40
                    hover:bg-white/[0.05]
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.10)]
                  "
                >
                  {/* Card Glow */}

                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                    <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                  </div>

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${item.bg} ${item.border} transition-all duration-500 group-hover:scale-110`}
                  >
                    <Icon className={`h-8 w-8 ${item.color}`} />
                  </div>

                  <h3 className="relative mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </Reveal>
  );
}