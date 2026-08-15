"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Phone,
  Calendar,
  Users,
  UserRound,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/portal",
    icon: LayoutDashboard,
  },
  {
    name: "Calls",
    href: "/portal/calls",
    icon: Phone,
  },
  {
    name: "Appointments",
    href: "/portal/appointments",
    icon: Calendar,
  },
  {
    name: "Patients",
    href: "/portal/patients",
    icon: Users,
  },
  {
    name: "Doctors",
    href: "/portal/doctors",
    icon: UserRound,
  },
  {
    name: "AI Receptionist",
    href: "/portal/ai",
    icon: Bot,
  },
  {
    name: "Analytics",
    href: "/portal/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/portal/settings",
    icon: Settings,
  },
];

export default function PortalSidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold text-white">
          Syclick
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Hospital Portal
        </p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}