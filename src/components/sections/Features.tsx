import Reveal from "@/components/ui/Reveal";
import {
  PhoneCall,
  CalendarCheck,
  MessageSquareText,
  Languages,
  Bell,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    description:
      "Answers every patient call naturally with a professional, human-like voice.",
    large: true,
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "Books, reschedules, and cancels appointments automatically.",
  },
  {
    icon: MessageSquareText,
    title: "Natural Conversations",
    description:
      "Understands patient intent and responds conversationally.",
  },
  {
    icon: Languages,
    title: "Multi-language Support",
    description:
      "Communicate with patients in multiple languages.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Alert your staff whenever immediate attention is required.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track calls, appointments, and AI performance in real time.",
  },
];

export default function Features() {
  const heroFeature = features[0];
  const remainingFeatures = features.slice(1);

  const HeroIcon = heroFeature.icon;

  return (
    <Reveal>
      <section
        id="features"
        className="relative overflow-hidden bg-[#050816] py-32 text-white"
      >
        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[200px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              Powerful Features
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Everything Your Front Desk
              <span className="text-cyan-400"> Needs.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Powerful AI capabilities that help your healthcare team answer
              every call, automate routine work, and deliver a better patient
              experience.
            </p>

          </div>

          {/* Layout */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {/* Hero Feature */}

            <div className="group rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-10 lg:row-span-2">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10">

                <HeroIcon className="h-10 w-10 text-cyan-400" />

              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {heroFeature.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {heroFeature.description}
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-6">

                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Example
                </p>

                <p className="mt-4 text-slate-300 leading-8">
                  "Hello! Thank you for calling Sunrise Hospital.
                  How may I assist you today?"
                </p>

              </div>

            </div>

            {/* Remaining Features */}

            <div className="grid gap-8 lg:col-span-2 md:grid-cols-2">

              {remainingFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 transition-all duration-500 group-hover:scale-110">

                      <Icon className="h-8 w-8 text-cyan-400" />

                    </div>

                    <h3 className="mt-6 text-2xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}