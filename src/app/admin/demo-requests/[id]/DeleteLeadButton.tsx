"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface Props {
  leadId: number;
}

export default function DeleteLeadButton({
  leadId,
}: Props) {
  const router = useRouter();

  async function deleteLead() {
    const confirmed = window.confirm(
      "Delete this lead permanently?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `https://vapi-ai-receptionist-production.up.railway.app/demo-requests/${leadId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      alert("Lead deleted successfully.");

      router.push("/admin");
      router.refresh();
    } catch {
      alert("Unable to delete lead.");
    }
  }

  return (
    <button
      onClick={deleteLead}
      className="mt-6 flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-medium transition hover:bg-red-700"
    >
      <Trash2 size={18} />
      Delete Lead
    </button>
  );
}