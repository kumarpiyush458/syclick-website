import Reveal from "@/components/ui/Reveal";
import VoiceWave from "../ui/VoiceWave";
import PhoneMockup from "../Phone/PhoneMockup";

export default function VoiceDemo() {
  return (
    <Reveal>
      <section
        id="voice-demo"
        className="relative overflow-hidden bg-[#050816] py-32 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-[-10%] top-20 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[200px]" />

          <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[220px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              Experience Syclick
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Listen to an AI Receptionist
              <span className="text-cyan-400"> in Action.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Experience how Syclick speaks naturally with patients,
              understands their needs, and books appointments in real time.
            </p>

          </div>

          {/* Demo */}

          <div className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.06)]">

            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-2xl font-semibold">
                  Live Voice Conversation
                </h3>

                <p className="mt-2 text-slate-400">
                  Example interaction between a patient and Syclick.
                </p>

              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

                </span>

                <span className="font-medium text-emerald-400">
                  Live Demo
                </span>

              </div>

            </div>

            {/* Content */}

            <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">

              {/* Conversation */}

              <div>

                {/* Patient */}

                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="h-3 w-3 rounded-full bg-cyan-400" />

                      <p className="font-semibold">
                        Patient
                      </p>

                    </div>

                    <span className="text-sm text-slate-500">
                      Just now
                    </span>

                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-200">
                    "Hello, I'd like to book an appointment with a dermatologist
                    sometime tomorrow morning."
                  </p>

                </div>

                {/* Voice Wave */}

                <div className="my-8 flex flex-col items-center">

                  <VoiceWave />

                  <p className="mt-4 text-sm text-cyan-400">
                    AI is listening...
                  </p>

                </div>

                {/* AI */}

                <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                      <p className="font-semibold">
                        Syclick AI
                      </p>

                    </div>

                    <span className="text-sm text-cyan-400">
                      Speaking...
                    </span>

                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-200">
                    "Absolutely! Dr. Mehta has an opening tomorrow at
                    11:30 AM. Would you like me to reserve that appointment
                    for you?"
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex justify-center lg:justify-end">

                <PhoneMockup />

              </div>

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}