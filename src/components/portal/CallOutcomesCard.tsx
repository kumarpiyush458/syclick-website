const outcomes = [
  {
    title: "Appointment Booked",
    value: "62%",
    color: "bg-green-500",
  },
  {
    title: "FAQ Answered",
    value: "18%",
    color: "bg-cyan-500",
  },
  {
    title: "Transferred",
    value: "12%",
    color: "bg-yellow-500",
  },
  {
    title: "Missed",
    value: "8%",
    color: "bg-red-500",
  },
];

export default function CallOutcomesCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        🥧 Call Outcomes
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Distribution of AI handled calls.
      </p>

      <div className="mt-8 space-y-5">

        {outcomes.map((item) => (
          <div key={item.title}>

            <div className="mb-2 flex justify-between">

              <span className="text-zinc-300">
                {item.title}
              </span>

              <span className="font-semibold text-white">
                {item.value}
              </span>

            </div>

            <div className="h-3 rounded-full bg-zinc-800">

              <div
                className={`h-3 rounded-full ${item.color}`}
                style={{ width: item.value }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}