import { Search } from "lucide-react";

export default function PatientFilters() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:max-w-md">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            placeholder="Search patient by name or phone..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
          />

        </div>

        <div className="flex gap-3">

          <select className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white">

            <option>All Patients</option>
            <option>New Patients</option>
            <option>Returning Patients</option>

          </select>

          <select className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white">

            <option>All Doctors</option>
            <option>Dr. Amit Sharma</option>
            <option>Dr. Priya Singh</option>

          </select>

        </div>

      </div>

    </div>
  );
}