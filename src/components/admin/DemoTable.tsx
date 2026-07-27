"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import StatusDropdown from "@/app/admin/demo-requests/[id]/StatusDropdown";

interface DemoRequest {
  id: number;
  full_name: string;
  organization_name: string;
  email: string;
  phone: string;
  message: string | null;
  status: string;
  created_at: string;
}

export default function DemoTable() {
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const router = useRouter();

  useEffect(() => {
    async function fetchDemoRequests() {
      try {
        const response = await fetch(
          "https://vapi-ai-receptionist-production.up.railway.app/demo-requests/",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch demo requests");
        }

        const data: DemoRequest[] = await response.json();
        setDemoRequests(data);
      } catch (error) {
        console.error("Error fetching demo requests:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDemoRequests();
  }, []);

  const filteredLeads = useMemo(() => {
    return demoRequests.filter((lead) => {
      const query = searchTerm.toLowerCase();

      const matchesSearch =
        (lead.full_name || "").toLowerCase().includes(query) ||
        (lead.organization_name || "").toLowerCase().includes(query) ||
        (lead.email || "").toLowerCase().includes(query) ||
        (lead.phone || "").toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [demoRequests, searchTerm, statusFilter]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Recent Demo Requests
        </h2>

        <p className="text-zinc-400">
          Loading demo requests...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Demo Requests
        </h2>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="🔍 Search by name, company, email or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Demo Scheduled">Demo Scheduled</option>
          <option value="Proposal Sent">Proposal Sent</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-700 py-12 text-center">
          <p className="text-zinc-400">
            No matching leads found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-zinc-800 text-left text-sm text-zinc-400">
              <tr>
                <th className="pb-3">ID</th>
                <th className="pb-3">Name</th>
                <th className="pb-3">Company</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() =>
                    router.push(`/admin/demo-requests/${lead.id}`)
                  }
                  className="cursor-pointer border-b border-zinc-800 transition hover:bg-zinc-800/40"
                >
                  <td className="py-4">{lead.id}</td>

                  <td className="font-medium">
                    {lead.full_name}
                  </td>

                  <td>{lead.organization_name}</td>

                  <td>{lead.phone}</td>

                  <td>{lead.email}</td>

                  <td
                    onClick={(e) => e.stopPropagation()}
                    className="min-w-[180px]"
                  >
                    <StatusDropdown
                      leadId={lead.id}
                      currentStatus={lead.status}
                      showLabel={false}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}