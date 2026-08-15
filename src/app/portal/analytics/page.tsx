
import ExecutiveInsightsCard from "@/components/portal/ExecutiveInsightsCard";
import CallsTrendCard from "@/components/portal/CallsTrendCard";
import StatCard from "@/components/portal/StatCard";
import CallOutcomesCard from "@/components/portal/CallOutcomesCard";
import TopDoctorsCard from "@/components/portal/TopDoctorsCard";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="mt-2 text-zinc-400">
          Measure your AI receptionist's performance and patient engagement.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Calls This Month"
          value="3,482"
          subtitle="+18% vs last month"
        />

        <StatCard
          title="Appointments"
          value="842"
          subtitle="Booked by AI"
        />

        <StatCard
          title="Missed Calls"
          value="17"
          subtitle="99.5% answered"
        />

        <StatCard
          title="Revenue Protected"
          value="$42K"
          subtitle="Estimated"
        />

      </div>
      <CallsTrendCard />
      <ExecutiveInsightsCard />
      <div className="grid gap-6 lg:grid-cols-2">

        <CallOutcomesCard />

        <TopDoctorsCard />

      </div>

    </div>
  );
}