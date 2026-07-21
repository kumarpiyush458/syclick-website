type AppointmentPopupProps = {
  show: boolean;
};

export default function AppointmentPopup({
  show,
}: AppointmentPopupProps) {
  if (!show) return null;

  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
      <div className="relative w-[300px] rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-emerald-500/20 p-4 shadow-2xl animate-[popup_0.35s_ease-out] overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-emerald-400/15 blur-3xl"></div>
        <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl">
            ✅
        </div>

        <div>
            <p className="text-white font-semibold">
            Appointment Confirmed
            </p>

            <p className="text-sm text-slate-400">
            Successfully Scheduled
            </p>
        </div>

        </div>

        <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">

        <p className="text-white font-medium">
            👩‍⚕️ Dr. Priya Mehta
        </p>

        <p className="mt-1 text-sm text-slate-400">
            🗓 Tomorrow • 10:30 AM
        </p>

        </div>

      </div>
    </div>
  );
}