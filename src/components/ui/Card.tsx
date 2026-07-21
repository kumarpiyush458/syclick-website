type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400/40
      hover:bg-white/[0.05]
      hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
    "
    >
      {children}
    </div>
  );
}