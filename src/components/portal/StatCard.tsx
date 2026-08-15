interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  valueColor?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  valueColor = "text-white",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-500/30">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${valueColor}`}>
        {value}
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        {subtitle}
      </p>

    </div>
  );
}