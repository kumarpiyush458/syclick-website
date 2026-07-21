import { LucideIcon } from "lucide-react";

type ProcessCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "cyan" | "purple" | "blue" | "emerald";
};

export default function ProcessCard({
  icon,
  title,
  description,
  color,
}: ProcessCardProps) {
  const Icon = icon;

  const colors = {
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      glow: "shadow-[0_0_40px_rgba(34,211,238,0.20)]",
    },

    purple: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
      glow: "shadow-[0_0_40px_rgba(168,85,247,0.20)]",
    },

    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      glow: "shadow-[0_0_40px_rgba(59,130,246,0.20)]",
    },

    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      glow: "shadow-[0_0_40px_rgba(16,185,129,0.20)]",
    },
  };

  const theme = colors[color];

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        text-center
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-4
        hover:border-cyan-400/40
        hover:bg-white/[0.05]
        hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
      "
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      </div>

      {/* Icon */}

      <div
        className={`
          relative
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          border
          ${theme.bg}
          ${theme.border}
          ${theme.glow}
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
        `}
      >
        <Icon className={`${theme.text} h-9 w-9`} />
      </div>

      {/* Step Number */}

      <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Step
      </div>

      {/* Title */}

      <h3 className="relative mt-2 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="relative mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}