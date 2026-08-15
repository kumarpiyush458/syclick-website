import {
  Bot,
  Phone,
  Globe,
  Clock,
  Activity,
} from "lucide-react";

export default function AIStatusCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Bot className="h-6 w-6 text-cyan-400" />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            AI Receptionist
          </h2>

          <div className="mt-1 flex items-center gap-2">

            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm text-green-400">
              Online
            </span>

          </div>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Phone className="h-5 w-5 text-zinc-400" />

            <span className="text-zinc-400">
              Phone Number
            </span>

          </div>

          <span className="font-medium text-white">
            +1 (415) 555-0182
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Globe className="h-5 w-5 text-zinc-400" />

            <span className="text-zinc-400">
              Languages
            </span>

          </div>

          <span className="font-medium text-white">
            English • Hindi
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Clock className="h-5 w-5 text-zinc-400" />

            <span className="text-zinc-400">
              Working Hours
            </span>

          </div>

          <span className="font-medium text-white">
            24 × 7
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Activity className="h-5 w-5 text-zinc-400" />

            <span className="text-zinc-400">
              Current Status
            </span>

          </div>

          <span className="font-medium text-green-400">
            Waiting for Calls
          </span>

        </div>

      </div>

    </div>
  );
}