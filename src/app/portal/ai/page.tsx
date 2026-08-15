
import CurrentCallCard from "@/components/portal/CurrentCallCard";
import AIStatusCard from "@/components/portal/AIStatusCard";
import AIPerformanceCard from "@/components/portal/AIPerformanceCard";
import StatCard from "@/components/portal/StatCard";
import IntegrationsCard from "@/components/portal/IntegrationsCard";
import RecentAIActivityCard from "@/components/portal/RecentAIActivityCard";
import LiveConversationCard from "@/components/portal/LiveConversationCard";
import AIHealthCard from "@/components/portal/AIHealthCard";

export default function AIReceptionistPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          AI Receptionist
        </h1>

        <p className="mt-2 text-zinc-400">
          Monitor and manage your hospital's AI receptionist in real time.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="AI Status"
          value="🟢 Online"
          subtitle="Ready to answer calls"
        />

        <StatCard
          title="Calls Today"
          value="147"
          subtitle="Handled automatically"
        />

        <StatCard
          title="Appointments Booked"
          value="39"
          subtitle="Today's bookings"
        />

        <StatCard
          title="Answer Rate"
          value="98%"
          subtitle="Excellent performance"
        />

      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <AIStatusCard />
        <CurrentCallCard />
    </div>
    <AIPerformanceCard />
    <LiveConversationCard />
    <AIHealthCard />
    <div className="grid gap-6 lg:grid-cols-2">

        <IntegrationsCard />

        <RecentAIActivityCard />

    </div>



    </div>
  );
}