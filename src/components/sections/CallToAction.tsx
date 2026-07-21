import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#050816] py-32"
      >
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">

          <div className="rounded-[36px] border border-cyan-500/20 bg-white/[0.03] p-16 text-center backdrop-blur-xl">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Ready to Transform Your Front Desk?
            </span>

            <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white lg:text-6xl">
              Never Miss
              <span className="text-cyan-400">
                {" "}Another Patient Call.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Discover how Syclick answers every patient call, books
              appointments automatically, and gives your staff more time to
              focus on delivering exceptional care.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Button>
                Schedule Your Demo
              </Button>

              <button className="group flex items-center gap-2 text-lg font-medium text-slate-300 transition hover:text-cyan-400">

                Watch AI in Action

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </button>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">

              <span>✓ Personalized onboarding</span>

              <span>✓ Built for healthcare</span>

              <span>✓ No long-term contracts</span>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}