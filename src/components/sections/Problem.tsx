import Reveal from "@/components/ui/Reveal";
import {
  PhoneCall,
  CalendarDays,
  Clock3,
  HeartPulse,
} from "lucide-react";

const problems = [
  {
    icon: PhoneCall,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "Missed Patient Calls",
    description:
      "Every unanswered call can mean a patient chooses another provider.",
  },
  {
    icon: CalendarDays,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Lost Appointments",
    description:
      "Manual scheduling increases errors, no-shows, and missed booking opportunities.",
  },
  {
    icon: Clock3,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Long Wait Times",
    description:
      "Busy reception desks leave patients waiting for simple questions to be answered.",
  },
  {
    icon: HeartPulse,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    title: "Overworked Staff",
    description:
      "Receptionists spend valuable time on repetitive calls instead of helping patients in person.",
  },
];

export default function Problem() {
  return (
    <Reveal>
      <section
        id="problem"
        className="relative overflow-hidden bg-[#050816] py-32 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -left-32 top-20 h-[550px] w-[550px] rounded-full bg-violet-500/10 blur-[180px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400">
              The Challenge
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Every Missed Call Is
              <span className="text-cyan-400">
                {" "}A Lost Opportunity.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Healthcare providers work incredibly hard to deliver exceptional
              care, but managing every incoming call is becoming increasingly
              difficult as patient expectations continue to rise.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {problems.map((item) => {
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
                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                    <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                  </div>

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${item.bg} ${item.border}`}
                  >
                    <Icon className={`h-8 w-8 ${item.color}`} />
                  </div>

                  <h3 className="relative mt-6 text-2xl font-semibold">
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