const patients = [
  {
    name: "Sarah Johnson",
    phone: "+1 (415) 555-0123",
    doctor: "Dr. Amit Sharma",
    lastVisit: "10 Aug 2026",
    nextAppointment: "12 Aug 2026",
    status: "Active",
  },
  {
    name: "Michael Brown",
    phone: "+1 (415) 555-0184",
    doctor: "Dr. Priya Singh",
    lastVisit: "08 Aug 2026",
    nextAppointment: "15 Aug 2026",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    phone: "+1 (415) 555-0199",
    doctor: "Dr. Rahul Mehta",
    lastVisit: "05 Aug 2026",
    nextAppointment: "-",
    status: "Inactive",
  },
  {
    name: "David Lee",
    phone: "+1 (415) 555-0178",
    doctor: "Dr. Amit Sharma",
    lastVisit: "09 Aug 2026",
    nextAppointment: "13 Aug 2026",
    status: "Active",
  },
];

interface Patient {
  name: string;
  phone: string;
  doctor: string;
  lastVisit: string;
  nextAppointment: string;
  status: string;
}

interface PatientsTableProps {
  onView: (patient: Patient) => void;
}

export default function PatientsTable({
  onView,
}: PatientsTableProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">

      <div className="border-b border-zinc-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Patient Records
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          All patients managed through Syclick.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-800">

            <tr className="text-left text-sm text-zinc-400">

              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Last Visit</th>
              <th className="px-6 py-4">Next Appointment</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            {patients.map((patient) => (

              <tr
                key={patient.name}
                className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-semibold text-cyan-400">

                      {patient.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}

                    </div>

                    <div>

                      <p className="font-medium text-white">
                        {patient.name}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Patient
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {patient.phone}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {patient.doctor}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {patient.lastVisit}
                </td>

                <td className="px-6 py-4 text-zinc-300">
                  {patient.nextAppointment}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      patient.status === "Active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {patient.status}
                  </span>

                </td>

                <td className="px-6 py-4 text-right">

                  <button
                    onClick={() => onView(patient)}
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