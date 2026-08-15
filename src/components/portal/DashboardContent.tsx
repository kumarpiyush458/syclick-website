import AIStatusCard from "./AIStatusCard";
import ActivityFeed from "./ActivityFeed";

export default function DashboardContent() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">

      {/* Activity */}

      <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <ActivityFeed />

      </div>

      {/* AI Card */}

      <AIStatusCard />

    </section>
  );
}