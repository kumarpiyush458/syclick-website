import Link from "next/link";
import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mt-10 mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="mt-4 text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </main>
  );
}