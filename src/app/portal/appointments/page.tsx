"use client";
import { useState } from "react";
import AppointmentDetailsDrawer from "@/components/portal/AppointmentDetailsDrawer";
import StatCard from "@/components/portal/StatCard";
import AppointmentFilters from "@/components/portal/AppointmentFilters";
import AppointmentsTable from "@/components/portal/AppointmentsTable";

export default function AppointmentsPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Appointments
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage appointments booked by your AI receptionist.
        </p>

      </div>

      {/* KPI */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Today's Appointments"
          value="39"
          subtitle="6 more than yesterday"
        />

        <StatCard
          title="Confirmed"
          value="34"
          subtitle="87% confirmation rate"
        />

        <StatCard
          title="Completed"
          value="18"
          subtitle="Today's visits"
        />

        <StatCard
          title="Cancelled"
          value="3"
          subtitle="Need rescheduling"
        />

      </div>
      <AppointmentFilters />
      <AppointmentsTable
        onView={(appointment) => {
            setSelectedAppointment(appointment);
            setDrawerOpen(true);
        }}
      />
      <AppointmentDetailsDrawer
        open={drawerOpen}
        appointment={selectedAppointment}
        onClose={() => {
            setDrawerOpen(false);
            setSelectedAppointment(null);
        }}
      />

    </div>
  );
}