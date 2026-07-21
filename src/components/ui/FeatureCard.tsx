import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]">

      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon size={30} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}