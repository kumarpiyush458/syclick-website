
import DeleteLeadButton from "./DeleteLeadButton";
import StatusBadge from "@/components/StatusBadge";
import StatusDropdown from "./StatusDropdown";
import LeadRemarks from "./LeadRemarks";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DemoRequestPage({
  params,
}: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://vapi-ai-receptionist-production.up.railway.app/demo-requests/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-3xl font-bold">
          Lead Not Found
        </h1>
      </div>
    );
  }

  const lead = await response.json();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Lead Details
      </h1>

      <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-8 max-w-3xl">

        <div>
          <p className="text-zinc-400 text-sm">Full Name</p>
          <p className="text-xl">{lead.full_name}</p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">Organization</p>
          <p className="text-xl">{lead.organization_name}</p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">Email</p>
          <p className="text-xl">{lead.email}</p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">Phone</p>
          <p className="text-xl">{lead.phone}</p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">Message</p>
          <p className="text-xl">
            {lead.message || "No message provided"}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-zinc-400 text-sm mb-2">
              Current Status
            </p>

            <StatusBadge status={lead.status} />
          </div>

          <StatusDropdown
            leadId={lead.id}
            currentStatus={lead.status}
          />
        </div>


        <div>
          <p className="text-zinc-400 text-sm">Submitted On</p>
          <p className="text-xl">
            {new Date(lead.created_at).toLocaleString()}
          </p>
        </div>

        <hr className="border-zinc-800" />

        <LeadRemarks leadId={lead.id} />

        <hr className="border-zinc-800" />

        <DeleteLeadButton leadId={lead.id} />
      </div>
    </main>
  );
}