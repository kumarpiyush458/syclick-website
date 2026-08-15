import {
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const systems = [
  { name: "Voice Engine", status: "Healthy" },
  { name: "Knowledge Base", status: "Healthy" },
  { name: "Calendar Sync", status: "Healthy" },
  { name: "Supabase", status: "Healthy" },
  { name: "Railway Backend", status: "Healthy" },
];

export default function AIHealthCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        ❤️ AI Health Monitor
      </h2>

      <div className="space-y-4">

        {systems.map((system) => (
          <div
            key={system.name}
            className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
          >
            <span className="text-white">
              {system.name}
            </span>

            <div className="flex items-center gap-2">

              {system.status === "Healthy" ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">
                    Healthy
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400">
                    Offline
                  </span>
                </>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}