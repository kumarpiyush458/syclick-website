export default function CallsTrendCard() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">
            📈 Calls Trend
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Calls answered over the last 30 days.
          </p>

        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
          +18%
        </span>

      </div>

      <div className="mt-8 flex h-72 items-end justify-between gap-2">

        {[35,52,41,68,55,74,63,80,72,91,87,95].map((value,index)=>(
          <div
            key={index}
            className="flex-1 rounded-t-lg bg-cyan-500 transition hover:bg-cyan-400"
            style={{
              height:`${value}%`
            }}
          />
        ))}

      </div>

    </div>
  );
}