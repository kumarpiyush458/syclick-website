import { Bot, User } from "lucide-react";

export default function LiveConversationCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        💬 Live Conversation
      </h2>

      <div className="space-y-4">

        <div className="flex gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
            <Bot className="h-5 w-5 text-cyan-400" />
          </div>

          <div className="max-w-md rounded-2xl bg-cyan-500/10 p-4">

            <p className="text-xs text-cyan-400 font-semibold">
              AI Receptionist
            </p>

            <p className="mt-2 text-zinc-200">
              Good morning! Thank you for calling City Care Hospital.
              How may I assist you today?
            </p>

          </div>

        </div>

        <div className="flex justify-end gap-3">

          <div className="max-w-md rounded-2xl bg-zinc-800 p-4">

            <p className="text-xs text-white font-semibold">
              Patient
            </p>

            <p className="mt-2 text-zinc-300">
              I'd like to book a dermatologist appointment
              tomorrow morning.
            </p>

          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">

            <User className="h-5 w-5 text-white" />

          </div>

        </div>

        <div className="flex gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">

            <Bot className="h-5 w-5 text-cyan-400" />

          </div>

          <div className="max-w-md rounded-2xl bg-cyan-500/10 p-4">

            <p className="text-xs font-semibold text-cyan-400">
              AI Receptionist
            </p>

            <p className="mt-2 text-zinc-200">
              I found an available slot tomorrow at
              10:30 AM with Dr. Amit Sharma.
              Shall I confirm it?
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}