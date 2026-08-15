import {
  Phone,
  CalendarCheck,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function AIPerformanceCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        📊 Today's AI Performance
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-zinc-800 p-5">

          <Phone className="mb-3 h-6 w-6 text-cyan-400" />

          <p className="text-sm text-zinc-500">
            Calls Answered
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            147
          </p>

        </div>

        <div className="rounded-xl bg-zinc-800 p-5">

          <CalendarCheck className="mb-3 h-6 w-6 text-green-400" />

          <p className="text-sm text-zinc-500">
            Appointments Booked
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            39
          </p>

        </div>

        <div className="rounded-xl bg-zinc-800 p-5">

          <Clock3 className="mb-3 h-6 w-6 text-yellow-400" />

          <p className="text-sm text-zinc-500">
            Avg Call Duration
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            2m 11s
          </p>

        </div>

        <div className="rounded-xl bg-zinc-800 p-5">

          <TrendingUp className="mb-3 h-6 w-6 text-cyan-400" />

          <p className="text-sm text-zinc-500">
            Success Rate
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            98%
          </p>

        </div>

      </div>

    </div>
  );
}