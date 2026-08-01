"use client";

import { useEffect, useState } from "react";
import { Users, UserPlus, PhoneCall, Trophy } from "lucide-react";

interface Lead {
  id: string;
  full_name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  plan: string;
  monthly_call_volume: string;
  status: string;
  created_at: string;
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <h2 className="mt-2 text-4xl font-bold text-white">{value}</h2>
        </div>

        <div className="rounded-lg bg-zinc-800 p-3">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      const response = await fetch("/api/leads/all");
      const result = await response.json();

      if (result.success) {
        setLeads(result.leads);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const totalLeads = leads.length;
  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const wonLeads = leads.filter(
    (lead) => lead.status === "Won"
  ).length;


    const filteredLeads = leads.filter((lead) => {
      const matchesSearch =
        lead.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        lead.company?.toLowerCase().includes(search.toLowerCase()) ||
        lead.email?.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        (lead.status ?? "New") === statusFilter;

      return matchesSearch && matchesStatus;
    });

  

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Leads
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage and track all incoming leads.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Leads"
          value={loading ? "..." : totalLeads}
          icon={<Users className="h-6 w-6" />}
        />

        <StatCard
          title="New Leads"
          value={loading ? "..." : newLeads}
          icon={<UserPlus className="h-6 w-6" />}
        />

        <StatCard
          title="Contacted"
          value={loading ? "..." : contactedLeads}
          icon={<PhoneCall className="h-6 w-6" />}
        />

        <StatCard
          title="Won"
          value={loading ? "..." : wonLeads}
          icon={<Trophy className="h-6 w-6" />}
        />
      </div>

      {/* Placeholder */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900">

        {/* Header */}

        <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 md:flex-row md:items-center md:justify-between">

          <h2 className="text-xl font-semibold text-white">
            All Leads
          </h2>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white outline-none"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Demo Scheduled">Demo Scheduled</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="border-b border-zinc-800">

              <tr className="text-left text-sm text-zinc-400">

                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-zinc-400"
                  >
                    Loading...
                  </td>

                </tr>

              ) : filteredLeads.length === 0 ? (

                <tr>

                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-zinc-400"
                  >
                    No leads found.
                  </td>

                </tr>

              ) : (

                filteredLeads.map((lead) => (

                  <tr
                    key={lead.id}
                    className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
                  >

                    <td className="px-6 py-4 text-white">
                      {lead.full_name}
                    </td>

                    <td className="px-6 py-4">
                      {lead.company}
                    </td>

                    <td className="px-6 py-4">
                      {lead.phone}
                    </td>

                    <td className="px-6 py-4">
                      {lead.email}
                    </td>

                    <td className="px-6 py-4">
                      {lead.plan}
                    </td>

                    <td className="px-6 py-4">

                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">

                        {lead.status ?? "New"}

                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}