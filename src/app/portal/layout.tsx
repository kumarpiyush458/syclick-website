import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      <PortalSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}