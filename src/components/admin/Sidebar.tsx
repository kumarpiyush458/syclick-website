import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Leads", href: "/admin/leads" }, // ← Add this line
  { name: "Demo Requests", href: "/admin/demo-requests" },
  { name: "Customers", href: "/admin/customers" },
  { name: "AI Agents", href: "/admin/agents" },
  { name: "Call Logs", href: "/admin/call-logs" },
  { name: "Appointments", href: "/admin/appointments" },
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold">Syclick</h1>
        <p className="text-sm text-zinc-400">Admin Dashboard</p>
      </div>

      <nav className="flex flex-col p-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}