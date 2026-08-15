const doctors = [
  {
    name: "Dr. Amit Sharma",
    department: "Dermatology",
    appointments: 12,
    nextPatient: "Sarah Johnson",
    nextTime: "10:30 AM",
    status: "Available",
  },
  {
    name: "Dr. Priya Singh",
    department: "Cardiology",
    appointments: 9,
    nextPatient: "Michael Brown",
    nextTime: "11:15 AM",
    status: "Busy",
  },
  {
    name: "Dr. Rahul Mehta",
    department: "Orthopedics",
    appointments: 7,
    nextPatient: "Emma Wilson",
    nextTime: "2:00 PM",
    status: "Available",
  },
  {
    name: "Dr. Neha Kapoor",
    department: "Pediatrics",
    appointments: 0,
    nextPatient: "-",
    nextTime: "-",
    status: "On Leave",
  },
];

interface Doctor {
  name: string;
  department: string;
  appointments: number;
  nextPatient: string;
  nextTime: string;
  status: string;
}

interface DoctorsTableProps {
  onView: (doctor: Doctor) => void;
}

export default function DoctorsTable({
  onView,
}: DoctorsTableProps) {

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">

      <div className="border-b border-zinc-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Doctors
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Manage doctors and monitor their availability.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-800">

            <tr className="text-left text-sm text-zinc-400">

              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Appointments</th>
              <th className="px-6 py-4">Next Patient</th>
              <th className="px-6 py-4">Next Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            {doctors.map((doctor) => (

              <tr
                key={doctor.name}
                className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-semibold text-cyan-400">

                      {doctor.name
                        .replace("Dr. ", "")
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}

                    </div>

                    <div>

                      <p className="font-medium text-white">
                        {doctor.name}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Consultant
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {doctor.department}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {doctor.appointments}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {doctor.nextPatient}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {doctor.nextTime}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      doctor.status === "Available"
                        ? "bg-green-500/10 text-green-400"
                        : doctor.status === "Busy"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {doctor.status}
                  </span>

                </td>

                <td className="px-6 py-4 text-right">

                  <button
                    onClick={() => onView(doctor)}
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