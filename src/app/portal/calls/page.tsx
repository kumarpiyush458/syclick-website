"use client";
import { useState } from "react";
import CallDetailsDrawer from "@/components/portal/CallDetailsDrawer";
import StatCard from "@/components/portal/StatCard";
import CallFilters from "@/components/portal/CallFilters";
import CallsTable from "@/components/portal/CallsTable";

export default function CallsPage() {
    const [selectedCall, setSelectedCall] = useState<any>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Calls
        </h1>

        <p className="mt-2 text-zinc-400">
          View all calls handled by your AI receptionist.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Calls"
          value="147"
          subtitle="Today"
        />

        <StatCard
          title="Answered"
          value="142"
          subtitle="96.6% Answer Rate"
        />

        <StatCard
          title="Appointments"
          value="39"
          subtitle="Booked by AI"
        />

        <StatCard
          title="Average Duration"
          value="2m 14s"
          subtitle="Per Call"
        />
        
        

      </div>
      <CallFilters />
      <CallsTable
        onView={(call) => {
            setSelectedCall(call);
            setDrawerOpen(true);
        }}
      />
      <CallDetailsDrawer
        open={drawerOpen}
        call={selectedCall}
        onClose={() => {
            setDrawerOpen(false);
            setSelectedCall(null);
        }}
      />

    </div>
  );
}