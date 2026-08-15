import DashboardHeader from "./DashboardHeader";
import KPIGrid from "./KPIGrid";

export default function HeroSection() {
  return (
    <section className="space-y-8">

      <DashboardHeader />

      <KPIGrid />

    </section>
  );
}