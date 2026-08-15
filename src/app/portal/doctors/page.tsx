"use client";
import DoctorFilters from "@/components/portal/DoctorFilters";
import StatCard from "@/components/portal/StatCard";
import DoctorsTable from "@/components/portal/DoctorsTable";
import { useState } from "react";
import DoctorDetailsDrawer from "@/components/portal/DoctorDetailsDrawer";

export default function DoctorsPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Doctors
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage doctors, schedules and appointment availability.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Doctors"
          value="28"
          subtitle="Across all departments"
        />

        <StatCard
          title="Available Today"
          value="22"
          subtitle="Ready for appointments"
        />

        <StatCard
          title="Appointments"
          value="87"
          subtitle="Scheduled today"
        />

        <StatCard
          title="Average Rating"
          value="4.9"
          subtitle="Patient satisfaction"
        />

      </div>
      <DoctorFilters />
      <DoctorsTable
            onView={(doctor) => {
                setSelectedDoctor(doctor);
                setDrawerOpen(true);
            }}
        />

        <DoctorDetailsDrawer
            open={drawerOpen}
            doctor={selectedDoctor}
            onClose={() => {
                setDrawerOpen(false);
                setSelectedDoctor(null);
            }}
        />

    </div>
  );
}