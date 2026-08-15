import {
  TrendingUp,
  Phone,
  CalendarCheck,
  Clock,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Call Answer Rate",
    value: "98.7%",
    color: "text-green-400",
  },
  {
    icon: Phone,
    title: "Average Wait Time",
    value: "8 sec",
    color: "text-cyan-400",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Conversion",
    value: "62%",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    title: "Peak Call Time",
    value: "10 AM - 12 PM",
    color: "text-purple-400",
  },
];

export default function ExecutiveInsightsCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        📋 Executive Insights
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        AI-generated operational highlights.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-zinc-800 p-5"
          >
            <item.icon className={`mb-3 h-6 w-6 ${item.color}`} />

            <p className="text-sm text-zinc-500">
              {item.title}
            </p>

            <p className={`mt-2 text-2xl font-bold ${item.color}`}>
              {item.value}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}