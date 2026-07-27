"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/admin/StatCard";
import DemoTable from "@/components/admin/DemoTable";
import LogoutButton from "@/components/LogoutButton";

import {
  Users,
  UserPlus,
  Trophy,
  PhoneCall,
} from "lucide-react";

interface DashboardStats {
  total_leads: number;
  new: number;
  contacted: number;
  demo_scheduled: number;
  proposal_sent: number;
  won: number;
  lost: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total_leads: 0,
    new: 0,
    contacted: 0,
    demo_scheduled: 0,
    proposal_sent: 0,
    won: 0,
    lost: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch(
          "https://vapi-ai-receptionist-production.up.railway.app/dashboard/stats",
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-zinc-400">
            Here's what's happening with Syclick today.
          </p>
        </div>

        <LogoutButton />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Leads"
          value={loading ? "..." : stats.total_leads}
          icon={Users}
        />

        <StatCard
          title="New Leads"
          value={loading ? "..." : stats.new}
          icon={UserPlus}
        />

        <StatCard
          title="Contacted"
          value={loading ? "..." : stats.contacted}
          icon={PhoneCall}
        />

        <StatCard
          title="Won"
          value={loading ? "..." : stats.won}
          icon={Trophy}
        />

      </div>

      <DemoTable />

    </div>
  );
}