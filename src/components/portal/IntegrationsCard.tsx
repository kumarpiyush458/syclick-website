import {
  Calendar,
  Database,
  Mic,
  Phone,
  CheckCircle2,
} from "lucide-react";

const integrations = [
  {
    name: "Vapi",
    icon: Phone,
    status: "Connected",
  },
  {
    name: "ElevenLabs",
    icon: Mic,
    status: "Connected",
  },
  {
    name: "Google Calendar",
    icon: Calendar,
    status: "Connected",
  },
  {
    name: "Supabase",
    icon: Database,
    status: "Connected",
  },
];

export default function IntegrationsCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        🔗 Integrations
      </h2>

      <div className="space-y-4">

        {integrations.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
          >
            <div className="flex items-center gap-3">

              <item.icon className="h-5 w-5 text-cyan-400" />

              <span className="text-white">
                {item.name}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <CheckCircle2 className="h-5 w-5 text-green-400" />

              <span className="text-green-400 text-sm">
                {item.status}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}