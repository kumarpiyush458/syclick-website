type CallerCardProps = {
  children: React.ReactNode;
};

export default function CallerCard({
  children,
}: CallerCardProps) {
  return (
    <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-5">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl">
          👨
        </div>

        <div>
          <div className="text-slate-400 text-sm">
            Incoming Caller
          </div>

          <div className="text-2xl font-semibold">
            Rahul Sharma
          </div>
        </div>

      </div>

      {children}

    </div>
  );
}