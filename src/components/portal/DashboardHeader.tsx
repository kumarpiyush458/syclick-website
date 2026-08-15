export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <p className="font-medium text-cyan-400">
          Good Morning 👋
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Welcome back, City Care Hospital
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Your AI Receptionist is online and answering patient calls in
          real time.
        </p>

      </div>

      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4">

        <p className="text-sm text-zinc-400">
          AI Receptionist
        </p>

        <div className="mt-2 flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="font-semibold text-green-400">
            Online
          </span>

        </div>

      </div>

    </div>
  );
}