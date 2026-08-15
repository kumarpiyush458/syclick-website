import StatCard from "@/components/portal/StatCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-zinc-400">
          Configure your hospital, AI receptionist and integrations.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Hospital"
          value="Configured"
          subtitle="Profile completed"
        />

        <StatCard
          title="AI Status"
          value="Online"
          subtitle="Ready for calls"
        />

        <StatCard
          title="Integrations"
          value="4"
          subtitle="Connected"
        />

        <StatCard
          title="Team Members"
          value="12"
          subtitle="Active users"
        />

      </div>

    </div>
  );
}