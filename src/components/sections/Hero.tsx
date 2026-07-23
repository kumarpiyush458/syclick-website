import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
            <section
              id="home"
              className="relative overflow-hidden bg-[#050816] pt-28 pb-16 text-white lg:min-h-screen lg:flex lg:items-center"
            >

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-20 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[220px]" />

      </div>

      {/* ================= Container ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:min-h-[calc(100vh-90px)] lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="max-w-2xl">

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-400">
              AI Front Desk for Modern Healthcare
            </span>

            {/* Heading */}

            <h1 className="mt-6 font-bold tracking-tight leading-[0.95]">

              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Never Miss
              </span>

              <span className="mt-2 block text-5xl sm:text-6xl lg:text-7xl">
                Another
              </span>

              <span className="mt-2 block text-6xl text-cyan-400 sm:text-7xl lg:text-[88px]">
                Patient Call.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 lg:text-xl lg:leading-9">
              Syclick answers every patient call, books appointments,
              answers patient questions, and works 24/7—so your staff
              can focus on delivering exceptional patient care.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <a href="#book-demo">
                <Button>
                  Book a Live Demo
                </Button>
              </a>

            </div>

            {/* Trust / Benefits */}

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Never Miss Another Patient Call
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Instant Appointment Booking
              </div>

              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Available 24/7
              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div className="relative mt-10 flex justify-center lg:mt-0 lg:justify-end">

            {/* Glow */}

            <div className="absolute h-[900px] w-[900px] rounded-full bg-cyan-400/15 blur-[220px] lg:h-[1200px] lg:w-[1200px] lg:blur-[260px] animate-glow" />

            {/* Hero Image */}

            <Image
              src="/hero.png"
              alt="Syclick AI Receptionist"
              width={900}
              height={1200}
              priority
              className="
                relative
                z-10
                w-[340px]
                sm:w-[430px]
                md:w-[520px]
                lg:w-[900px]
                lg:max-w-none
                lg:translate-x-16
                animate-float
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}