interface Appointment {
  patient: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  status: string;
}

interface AppointmentDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  appointment: Appointment | null;
}

export default function AppointmentDetailsDrawer({
  open,
  onClose,
  appointment,
}: AppointmentDetailsDrawerProps) {
  if (!open || !appointment) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-zinc-800 p-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {appointment.patient}
            </h2>

            <p className="mt-1 text-cyan-400">
              {appointment.status}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="space-y-6 p-6">

          {/* Appointment Information */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              📅 Appointment Information
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <p className="text-sm text-zinc-500">Doctor</p>
                <p className="mt-1 text-white">{appointment.doctor}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Department</p>
                <p className="mt-1 text-white">{appointment.department}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Date</p>
                <p className="mt-1 text-white">{appointment.date}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Time</p>
                <p className="mt-1 text-white">{appointment.time}</p>
              </div>

            </div>

          </section>

          {/* AI Booking Summary */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              🤖 AI Booking Summary
            </h3>

            <p className="leading-7 text-zinc-300">
              The AI receptionist verified doctor availability,
              confirmed the preferred appointment slot with the
              patient, booked the appointment successfully and
              sent a confirmation message automatically.
            </p>

          </section>

          {/* Status */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              ✅ Current Status
            </h3>

            <span className="inline-flex rounded-full bg-green-500/10 px-4 py-2 text-green-400">
              {appointment.status}
            </span>

          </section>

        </div>

      </div>

    </div>
  );
}