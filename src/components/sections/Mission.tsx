import Reveal from "@/components/ui/Reveal";
import { Target, Eye } from "lucide-react";

export default function Mission() {
  return (
    <Reveal>
      <section className="bg-[#050816] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Header */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
              Our Purpose
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Building the Future of
              <span className="text-cyan-400"> AI Employees</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              We believe every business should have access to intelligent AI
              employees that work 24/7, improve customer experience, and help
              teams focus on what matters most.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Target className="h-7 w-7 text-cyan-400" />

              </div>

              <h3 className="text-3xl font-bold">
                Mission
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                We build AI-powered employees that help businesses deliver
                faster, more reliable customer experiences by automating
                customer interactions, reducing operational workload, and
                enabling teams to focus on growth instead of repetitive tasks.
              </p>

            </div>

            {/* Vision */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Eye className="h-7 w-7 text-cyan-400" />

              </div>

              <h3 className="text-3xl font-bold">
                Vision
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                To become the world's most trusted AI workforce platform,
                empowering organizations with intelligent AI employees that
                transform how businesses communicate, operate, and grow.
              </p>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}