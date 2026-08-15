import { PhoneCall, Clock, User, Calendar } from "lucide-react";

export default function CurrentCallCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          📞 Current Live Call
        </h2>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
          LIVE
        </span>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">

          <User className="h-5 w-5 text-cyan-400" />

          <div>

            <p className="text-sm text-zinc-500">
              Patient
            </p>

            <p className="font-medium text-white">
              Sarah Johnson
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <PhoneCall className="h-5 w-5 text-cyan-400" />

          <div>

            <p className="text-sm text-zinc-500">
              Intent
            </p>

            <p className="font-medium text-white">
              Book Appointment
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Clock className="h-5 w-5 text-cyan-400" />

          <div>

            <p className="text-sm text-zinc-500">
              Call Duration
            </p>

            <p className="font-medium text-white">
              01:42
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <Calendar className="h-5 w-5 text-cyan-400" />

          <div>

            <p className="text-sm text-zinc-500">
              Current Action
            </p>

            <p className="font-medium text-green-400">
              Booking Appointment...
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}