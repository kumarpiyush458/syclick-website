"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ===================== NAVBAR ===================== */}

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="#home"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo1.png"
              alt="Syclick Logo"
              width={56}
              height={56}
              priority
              className="w-12 lg:w-14"
            />

            <span className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Syclick
            </span>

          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 lg:flex">

            <a
              href="#solutions"
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
            >
              Solutions
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
            >
              Pricing
            </a>

            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
            >
              FAQ
            </a>

          </div>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <a href="#contact">
              <Button>
                Schedule Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 lg:hidden"
          >
            <Menu size={24} />
          </button>

        </div>

      </nav>

      {/* ===================== BACKDROP ===================== */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* ===================== MOBILE DRAWER ===================== */}

      <aside
        className={`fixed top-0 right-0 z-[100] h-screen w-[78%] max-w-sm border-l border-white/10 bg-[#050816] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

          <div className="flex items-center gap-3">

            <Image
              src="/logo1.png"
              alt="Syclick"
              width={36}
              height={36}
            />

            <span className="text-xl font-bold text-white">
              Syclick
            </span>

          </div>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-white transition hover:text-cyan-400"
          >
            <X size={30} />
          </button>

        </div>

        {/* Drawer Content */}

        <div className="flex h-[calc(100%-88px)] flex-col px-6 py-8">

          <a
            href="#solutions"
            onClick={closeMenu}
            className="border-b border-white/10 py-5 text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
          >
            Solutions
          </a>

          <a
            href="#how-it-works"
            onClick={closeMenu}
            className="border-b border-white/10 py-5 text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
          >
            How It Works
          </a>

          <a
            href="#features"
            onClick={closeMenu}
            className="border-b border-white/10 py-5 text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#pricing"
            onClick={closeMenu}
            className="border-b border-white/10 py-5 text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
          >
            Pricing
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
            className="border-b border-white/10 py-5 text-lg font-medium text-white transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
          >
            FAQ
          </a>

          {/* Bottom CTA */}

          <div className="mt-auto pt-10">

            <a
              href="#contact"
              onClick={closeMenu}
            >
              <Button>
                Schedule Demo
              </Button>
            </a>

          </div>

        </div>

      </aside>
    </>
  );
}