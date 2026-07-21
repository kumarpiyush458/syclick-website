interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
        {highlight && (
          <span className="text-cyan-400">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}