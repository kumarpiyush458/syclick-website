const calls = [
  {
    patient: "Sarah Johnson",
    phone: "+1 (415) 555-0123",
    time: "10:32 AM",
    duration: "2m 14s",
    outcome: "Appointment Booked",
    summary: "Booked dermatology appointment for tomorrow.",
  },
  {
    patient: "Michael Brown",
    phone: "+1 (415) 555-0184",
    time: "10:10 AM",
    duration: "4m 08s",
    outcome: "FAQ Answered",
    summary: "Asked about consultation charges.",
  },
  {
    patient: "Emma Wilson",
    phone: "+1 (415) 555-0199",
    time: "9:41 AM",
    duration: "1m 56s",
    outcome: "Transferred",
    summary: "Requested to speak with billing department.",
  },
  {
    patient: "David Lee",
    phone: "+1 (415) 555-0178",
    time: "9:18 AM",
    duration: "3m 02s",
    outcome: "Appointment Booked",
    summary: "Scheduled orthopedic consultation.",
  },
];

interface Call {
    patient: string;
    phone: string;
    time: string;
    duration: string;
    outcome: string;
    }

    interface CallsTableProps {
    onView: (call: Call) => void;
    }

    export default function CallsTable({
    onView,
    }: CallsTableProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">

      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Calls
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Latest calls handled by your AI receptionist.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-zinc-800 text-left text-sm text-zinc-400">

            <tr>
              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">AI Summary</th>
              <th className="px-6 py-4">Outcome</th>
              <th className="px-6 py-4 text-right"> Actions </th>
              
            </tr>

          </thead>

          <tbody>

            {calls.map((call) => (

              <tr
                key={call.patient}
                className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
              >

                <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 font-semibold text-cyan-400">

                        {call.patient
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}

                        </div>

                        <div>

                        <p className="font-medium text-white">
                            {call.patient}
                        </p>

                        <p className="text-sm text-zinc-500">
                            Patient
                        </p>

                        </div>

                    </div>

                </td>

                <td className="px-6 py-4">
                  {call.phone}
                </td>

                <td className="px-6 py-4">
                  {call.time}
                </td>

                <td className="px-6 py-4">
                  {call.duration}
                </td>
                <td className="px-6 py-4 max-w-xs">

                    <p className="truncate text-sm text-zinc-300">
                        {call.summary}
                    </p>

                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                        call.outcome === "Appointment Booked"
                            ? "bg-green-500/10 text-green-400"

                        : call.outcome === "FAQ Answered"
                            ? "bg-blue-500/10 text-blue-400"

                        : call.outcome === "Transferred"
                            ? "bg-yellow-500/10 text-yellow-400"

                        : "bg-red-500/10 text-red-400"
                        }`}
                    >
                    {call.outcome}
                  </span>

                </td>
                <td className="px-6 py-4 text-right">

                    <button
                        onClick={() => onView(call)}
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