interface Doctor {
  name: string;
  department: string;
  appointments: number;
  nextPatient: string;
  nextTime: string;
  status: string;
}

interface DoctorDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}

export default function DoctorDetailsDrawer({
  open,
  onClose,
  doctor,
}: DoctorDetailsDrawerProps) {
  if (!open || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-zinc-800 bg-zinc-900 shadow-2xl">

        <div className="flex items-start justify-between border-b border-zinc-800 p-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {doctor.name}
            </h2>

            <p className="mt-1 text-cyan-400">
              {doctor.department}
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

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              👨‍⚕️ Doctor Information
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <div>
                <p className="text-sm text-zinc-500">Department</p>
                <p className="mt-1 text-white">
                  {doctor.department}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Status</p>
                <p className="mt-1 text-white">
                  {doctor.status}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Today's Appointments
                </p>
                <p className="mt-1 text-white">
                  {doctor.appointments}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Next Patient
                </p>
                <p className="mt-1 text-white">
                  {doctor.nextPatient}
                </p>
              </div>

            </div>

          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              🤖 AI Scheduling Summary
            </h3>

            <p className="leading-7 text-zinc-300">
              The AI receptionist has automatically scheduled
              today's appointments while maintaining available
              time slots and preventing scheduling conflicts.
            </p>

          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              📅 Next Appointment
            </h3>

            <p className="text-zinc-300">
              {doctor.nextPatient} at {doctor.nextTime}
            </p>

          </section>

        </div>

      </div>

    </div>
  );
}