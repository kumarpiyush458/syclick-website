const appointments = [
  {
    patient: "Sarah Johnson",
    doctor: "Dr. Amit Sharma",
    department: "Dermatology",
    date: "12 Aug 2026",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    patient: "Michael Brown",
    doctor: "Dr. Priya Singh",
    department: "Cardiology",
    date: "12 Aug 2026",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    patient: "Emma Wilson",
    doctor: "Dr. Rahul Mehta",
    department: "Orthopedics",
    date: "12 Aug 2026",
    time: "1:30 PM",
    status: "Cancelled",
  },
  {
    patient: "David Lee",
    doctor: "Dr. Amit Sharma",
    department: "Dermatology",
    date: "12 Aug 2026",
    time: "3:15 PM",
    status: "Confirmed",
  },
];

interface Appointment {
  patient: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  status: string;
}

interface AppointmentsTableProps {
    onView: (appointment: Appointment) => void;
    }

    export default function AppointmentsTable({
    onView,
    }: AppointmentsTableProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">

      <div className="border-b border-zinc-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Today's Appointments
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          All appointments booked by your AI receptionist.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-800">

            <tr className="text-left text-sm text-zinc-400">

              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            {appointments.map((appointment) => (

              <tr
                key={appointment.patient}
                className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-semibold text-cyan-400">

                      {appointment.patient
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}

                    </div>

                    <div>

                      <p className="font-medium text-white">
                        {appointment.patient}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Patient
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4">
                  {appointment.doctor}
                </td>

                <td className="px-6 py-4">
                  {appointment.department}
                </td>

                <td className="px-6 py-4">
                  {appointment.date}
                </td>

                <td className="px-6 py-4">
                  {appointment.time}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        appointment.status === "Confirmed"
                          ? "bg-green-500/10 text-green-400"
                          : appointment.status === "Completed"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                  >
                    {appointment.status}
                  </span>

                </td>

                <td className="px-6 py-4 text-right">

                  <button
                    onClick={() => onView(appointment)}
                    className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}