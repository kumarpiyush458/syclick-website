import Reveal from "@/components/ui/Reveal";
import ProcessCard from "../ui/ProcessCard";
import {
  PhoneCall,
  Bot,
  BrainCircuit,
  CalendarCheck,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <Reveal>
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[#050816] py-32 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-0 top-20 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[220px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              How Syclick Works
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              From Ringing Phone
              <span className="text-cyan-400">
                {" "}to Confirmed Appointment.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Every patient interaction follows a simple, intelligent workflow
              that ensures no call goes unanswered and every opportunity is captured.
            </p>

          </div>

          {/* Workflow */}

          <div className="relative mt-24">

            {/* Connecting Line (Desktop Only) */}

            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              <ProcessCard
                icon={PhoneCall}
                color="cyan"
                title="Patient Calls"
                description="Every incoming call is answered instantly, day or night."
              />

              <ProcessCard
                icon={Bot}
                color="purple"
                title="AI Answers"
                description="Greets every caller naturally with a professional, human-like voice."
              />

              <ProcessCard
                icon={BrainCircuit}
                color="blue"
                title="Understands Request"
                description="Identifies the patient's needs and determines the right next step."
              />

              <ProcessCard
                icon={CalendarCheck}
                color="emerald"
                title="Appointment Confirmed"
                description="Schedules the appointment and confirms it immediately with the patient."
              />

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}