const activities = [
  {
    time: "10:42 AM",
    action: "Booked appointment for Sarah Johnson",
  },
  {
    time: "10:28 AM",
    action: "Transferred billing inquiry",
  },
  {
    time: "10:14 AM",
    action: "Answered insurance question",
  },
  {
    time: "09:57 AM",
    action: "Cancelled appointment",
  },
];

export default function RecentAIActivityCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        ⚡ Recent AI Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.time}
            className="rounded-xl bg-zinc-800 p-4"
          >
            <p className="text-sm text-cyan-400">
              {activity.time}
            </p>

            <p className="mt-1 text-zinc-300">
              {activity.action}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}