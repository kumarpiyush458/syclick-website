import { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSection({
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-8 text-gray-300">
        {children}
      </div>
    </section>
  );
}