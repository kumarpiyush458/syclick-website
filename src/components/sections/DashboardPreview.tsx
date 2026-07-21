import Reveal from "@/components/ui/Reveal";
import StatCard from "../ui/StatCard";
import {
  PhoneCall,
  CalendarCheck,
  Bot,
  Timer,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#050816] py-32 text-white">

        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              AI Reception Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Everything Your Front Desk
              <span className="text-cyan-400">
                {" "}Needs.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Monitor every patient interaction, appointment, and AI conversation
              from one intuitive dashboard.
            </p>

          </div>

          {/* Dashboard */}

          <div className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.06)]">

            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-2xl font-semibold">
                  AI Reception Dashboard
                </h3>

                <p className="mt-2 text-slate-400">
                  Live overview of your AI receptionist.
                </p>

              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

                </span>

                <span className="font-medium text-emerald-400">
                  AI Online
                </span>

              </div>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">

              <StatCard
                icon={PhoneCall}
                title="Calls Today"
                value="126"
              />

              <StatCard
                icon={Bot}
                title="AI Resolution"
                value="98%"
              />

              <StatCard
                icon={CalendarCheck}
                title="Appointments"
                value="42"
              />

              <StatCard
                icon={Timer}
                title="Avg Response"
                value="1.2 sec"
              />

            </div>

            {/* Bottom Grid */}

            <div className="mt-8 grid gap-6 lg:grid-cols-5">

              {/* Live Activity */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-3">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    Live AI Conversation
                  </h3>

                  <span className="text-sm text-emerald-400">
                    ● Live
                  </span>

                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">

                  <div className="flex items-start justify-between">

                    <div>

                      <div className="flex items-center gap-3">

                        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                        <h4 className="font-semibold">
                          Rahul Sharma
                        </h4>

                      </div>

                      <p className="mt-5 leading-7 text-slate-300">
                        "I'd like to schedule an appointment with a dermatologist
                        for tomorrow morning."
                      </p>

                      <div className="mt-5 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                        AI is checking doctor availability...
                      </div>

                    </div>

                    <span className="text-xs text-slate-500">
                      Just now
                    </span>

                  </div>

                </div>

              </div>

              {/* Upcoming */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    Upcoming Appointment
                  </h3>

                  <span className="text-sm text-cyan-400">
                    Today
                  </span>

                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">

                  <div className="flex items-center justify-between">

                    <span className="font-semibold text-cyan-400">
                      10:30 AM
                    </span>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      Confirmed
                    </span>

                  </div>

                  <h4 className="mt-5 text-lg font-semibold">
                    Dr. Priya Mehta
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Rahul Sharma
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">

                    <div className="flex justify-between text-sm">

                      <span className="text-slate-500">
                        Reason
                      </span>

                      <span>
                        Skin Consultation
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}