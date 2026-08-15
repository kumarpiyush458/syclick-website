import { Search } from "lucide-react";

export default function CallFilters() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:max-w-md">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            placeholder="Search by patient name or phone..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400"
          />

        </div>

        {/* Filters */}

        <div className="flex gap-3">

          <select className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white">

            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>

          </select>

          <select className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white">

            <option>All Calls</option>
            <option>Appointment Booked</option>
            <option>Transferred</option>
            <option>Missed</option>

          </select>

        </div>

      </div>

    </div>
  );
}