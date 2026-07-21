import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  const Icon = icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <Icon className="h-6 w-6 text-cyan-400" />
        </div>

      </div>

    </div>
  );
}