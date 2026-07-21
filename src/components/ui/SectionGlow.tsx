type GlowColor = "cyan" | "blue" | "purple";

interface SectionGlowProps {
  color?: GlowColor;
}

export default function SectionGlow({
  color = "cyan",
}: SectionGlowProps) {
  const glow = {
    cyan: "bg-cyan-400/10",
    blue: "bg-blue-500/10",
    purple: "bg-violet-500/10",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[180px] ${glow[color]}`}
      />
    </div>
  );
}