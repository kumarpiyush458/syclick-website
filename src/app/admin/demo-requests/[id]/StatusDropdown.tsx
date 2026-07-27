"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface StatusDropdownProps {
  leadId: number;
  currentStatus: string;
  showLabel?: boolean;
}

const statuses = [
  "New",
  "Contacted",
  "Demo Scheduled",
  "Proposal Sent",
  "Won",
  "Lost",
];

export default function StatusDropdown({
  leadId,
  currentStatus,
  showLabel = true,
}: StatusDropdownProps) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  const router = useRouter();

  async function updateStatus(newStatus: string) {
    setStatus(newStatus);
    setSaving(true);

    try {
      const response = await fetch(
        `https://vapi-ai-receptionist-production.up.railway.app/demo-requests/${leadId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
      setStatus(currentStatus);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-2">
      {showLabel && (
        <label className="text-sm text-zinc-400">
          Status
        </label>
      )}

      <select
        value={status}
        disabled={saving}
        onChange={(e) => updateStatus(e.target.value)}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white"
      >
        {statuses.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      {saving && (
        <p className="text-xs text-blue-400">
          Saving...
        </p>
      )}
    </div>
  );
}