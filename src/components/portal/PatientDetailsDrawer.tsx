interface Patient {
  name: string;
  phone: string;
  doctor: string;
  lastVisit: string;
  nextAppointment: string;
  status: string;
}

interface PatientDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  patient: Patient | null;
}

export default function PatientDetailsDrawer({
  open,
  onClose,
  patient,
}: PatientDetailsDrawerProps) {
  if (!open || !patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-xl overflow-y-auto border-l border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-zinc-800 p-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {patient.name}
            </h2>

            <p className="mt-1 text-cyan-400">
              {patient.status}
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

          {/* Patient Information */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              👤 Patient Information
            </h3>

            <div className="grid grid-cols-2 gap-5">

              <div>

                <p className="text-sm text-zinc-500">
                  Phone
                </p>

                <p className="mt-1 text-white">
                  {patient.phone}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Primary Doctor
                </p>

                <p className="mt-1 text-white">
                  {patient.doctor}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Last Visit
                </p>

                <p className="mt-1 text-white">
                  {patient.lastVisit}
                </p>

              </div>

              <div>

                <p className="text-sm text-zinc-500">
                  Next Appointment
                </p>

                <p className="mt-1 text-white">
                  {patient.nextAppointment}
                </p>

              </div>

            </div>

          </section>

          {/* AI Patient Summary */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              🤖 AI Patient Summary
            </h3>

            <p className="leading-7 text-zinc-300">
              Frequent dermatology patient. Previously contacted the AI
              receptionist to book appointments and ask about consultation
              availability. No missed appointments in the last six months.
            </p>

          </section>

          {/* Upcoming Visit */}

          <section className="rounded-2xl border border-zinc-800 bg-zinc-800/40 p-5">

            <h3 className="mb-4 text-lg font-semibold text-white">
              📅 Upcoming Visit
            </h3>

            <p className="text-zinc-300">
              Scheduled with <strong>{patient.doctor}</strong> on{" "}
              <strong>{patient.nextAppointment}</strong>.
            </p>

          </section>

        </div>

      </div>

    </div>
  );
}