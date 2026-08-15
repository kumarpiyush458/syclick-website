"use client";
import { useState } from "react";
import PatientDetailsDrawer from "@/components/portal/PatientDetailsDrawer";
import StatCard from "@/components/portal/StatCard";
import PatientFilters from "@/components/portal/PatientFilters";
import PatientsTable from "@/components/portal/PatientsTable";

export default function PatientsPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Patients
        </h1>

        <p className="mt-2 text-zinc-400">
          View and manage patient records created by your AI receptionist.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Patients"
          value="1,248"
          subtitle="Active Records"
        />

        <StatCard
          title="New Patients"
          value="46"
          subtitle="This Month"
        />

        <StatCard
          title="Returning"
          value="83%"
          subtitle="Patient Retention"
        />

        <StatCard
          title="Upcoming Visits"
          value="27"
          subtitle="Today"
        />

      </div>
      <PatientFilters />
      <PatientsTable
        onView={(patient) => {
            setSelectedPatient(patient);
            setDrawerOpen(true);
        }}
      />
      <PatientDetailsDrawer
        open={drawerOpen}
        patient={selectedPatient}
        onClose={() => {
            setDrawerOpen(false);
            setSelectedPatient(null);
        }}
      />

    </div>
  );
}