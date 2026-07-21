import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-12">

          {/* ================================================= */}
          {/* Brand */}
          {/* ================================================= */}

          <div className="lg:col-span-5">

            <Link
              href="/"
              className="flex items-center gap-4 transition-opacity hover:opacity-90"
            >

              <Image
                src="/logo1.png"
                alt="Syclick Logo"
                width={60}
                height={60}
                priority
              />

              <div>

                <h2 className="text-3xl font-bold text-white">
                  Syclick
                </h2>

                <p className="text-sm text-cyan-400">
                  AI Front Desk for Healthcare
                </p>

              </div>

            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              AI-powered front desk assistants that answer every patient
              call, automate appointment scheduling, and help healthcare
              teams deliver exceptional patient experiences.
            </p>

            {/* Email */}

            <div className="mt-8 flex items-center gap-3">

              <Mail className="h-5 w-5 text-cyan-400" />

              <a
                href="mailto:hello@getsyclick.com"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                hello@getsyclick.com
              </a>

            </div>

          </div>

          {/* ================================================= */}
          {/* Product */}
          {/* ================================================= */}

          <div className="lg:col-span-3">

            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#solutions"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Book Demo
                </a>
              </li>

            </ul>

          </div>

          {/* ================================================= */}
          {/* Company */}
          {/* ================================================= */}

          <div className="lg:col-span-4">

            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  FAQ
                </a>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Syclick. All rights reserved.
          </p>

          <p className="text-center">
            Built to help healthcare teams never miss another patient call.
          </p>

        </div>

      </div>

    </footer>
  );
}