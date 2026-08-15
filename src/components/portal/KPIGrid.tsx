import StatCard from "./StatCard";

export default function KPIGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Calls Today"
        value="147"
        subtitle="+12% from yesterday"
      />

      <StatCard
        title="Appointments"
        value="39"
        subtitle="28 confirmed"
      />

      <StatCard
        title="Missed Calls"
        value="5"
        subtitle="3 recovered automatically"
      />

      <StatCard
        title="AI Status"
        value="● Online"
        subtitle="Running normally"
        valueColor="text-green-400"
      />

    </div>
  );
}