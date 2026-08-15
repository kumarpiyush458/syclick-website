interface Call {
  patient: string;
  phone: string;
  time: string;
  duration: string;
  outcome: string;
}

interface CallDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  call: Call | null;
}

export default function CallDetailsDrawer({
  open,
  onClose,
  call,
}: CallDetailsDrawerProps) {
  if (!open || !call) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-zinc-800 p-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {call.patient}
            </h2>

            <p className="mt-1 text-cyan-400">
              {call.outcome}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="space-y-6 p-6">

          {/* ================================================= */}
          {/* Call Information */}
          {/* ================================================= */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-5 text-lg font-semibold text-white">
              📞 Call Information
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <div>

                <p className="text-sm text-zinc-500">
                  Phone
                </p>

                <p className="mt-1 font-medium text-white">
                  {call.phone}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Time
                </p>

                <p className="mt-1 font-medium text-white">
                  {call.time}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Duration
                </p>

                <p className="mt-1 font-medium text-white">
                  {call.duration}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Outcome
                </p>

                <span className="mt-2 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                  {call.outcome}
                </span>

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* AI Summary */}
          {/* ================================================= */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              🤖 AI Summary
            </h3>

            <p className="leading-7 text-zinc-300">
              Patient requested a dermatology consultation with
              Dr. Sharma. The AI checked doctor availability,
              booked an appointment for tomorrow at 10:30 AM,
              confirmed the booking with the patient and
              automatically sent a confirmation SMS.
            </p>

          </section>

          {/* ================================================= */}
          {/* Transcript */}
          {/* ================================================= */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              📝 Transcript
            </h3>

            <div className="space-y-3">

              <div className="rounded-xl bg-cyan-500/10 p-4">

                <p className="mb-1 text-sm font-semibold text-cyan-400">
                  AI
                </p>

                <p className="text-zinc-200">
                  Good morning! Thank you for calling City Care Hospital.
                  How may I help you today?
                </p>

              </div>

              <div className="rounded-xl bg-zinc-800 p-4">

                <p className="mb-1 text-sm font-semibold text-white">
                  Patient
                </p>

                <p className="text-zinc-300">
                  I'd like to book an appointment with a dermatologist
                  tomorrow morning.
                </p>

              </div>

            </div>

          </section>

          {/* ================================================= */}
          {/* Recording */}
          {/* ================================================= */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              🎙 Recording
            </h3>

            <div className="space-y-4">

              <div className="h-2 w-full rounded-full bg-zinc-700">

                <div className="h-2 w-1/3 rounded-full bg-cyan-400" />

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm text-zinc-400">
                  00:42
                </span>

                <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-black transition hover:bg-cyan-400">

                  ▶ Play Recording

                </button>

                <span className="text-sm text-zinc-400">
                  {call.duration}
                </span>

              </div>

            </div>

          </section>
          {/* ================================================= */}
{/* Appointment Details */}
{/* ================================================= */}

        <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

        <h3 className="mb-5 text-lg font-semibold text-white">
            📅 Appointment Details
        </h3>

        <div className="grid grid-cols-2 gap-5">

            <div>

            <p className="text-sm text-zinc-500">
                Doctor
            </p>

            <p className="mt-1 font-medium text-white">
                Dr. Amit Sharma
            </p>

            </div>

            <div>

            <p className="text-sm text-zinc-500">
                Department
            </p>

            <p className="mt-1 font-medium text-white">
                Dermatology
            </p>

            </div>

            <div>

            <p className="text-sm text-zinc-500">
                Date
            </p>

            <p className="mt-1 font-medium text-white">
                12 Aug 2026
            </p>

            </div>

            <div>

            <p className="text-sm text-zinc-500">
                Time
            </p>

            <p className="mt-1 font-medium text-white">
                10:30 AM
            </p>

            </div>

        </div>

        <div className="mt-5">

            <span className="inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">

            ✓ Appointment Confirmed

            </span>

        </div>

        </section>

        </div>

      </div>

    </div>
  );
}