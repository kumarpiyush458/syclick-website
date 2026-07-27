"use client";

import { useEffect, useState } from "react";

interface Remark {
  id: number;
  demo_request_id: number;
  remark: string;
  created_at: string;
}

export default function LeadRemarks({
  leadId,
}: {
  leadId: number;
}) {
  const [remarks, setRemarks] = useState<Remark[]>([]);
  const [newRemark, setNewRemark] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadRemarks() {
    try {
      const response = await fetch(
        `https://vapi-ai-receptionist-production.up.railway.app/demo-requests/${leadId}/remarks`,
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      setRemarks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRemarks();
  }, []);

  async function addRemark() {
    if (!newRemark.trim()) return;

    const response = await fetch(
      `https://vapi-ai-receptionist-production.up.railway.app/demo-requests/${leadId}/remarks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          remark: newRemark,
        }),
      }
    );

    if (response.ok) {
      setNewRemark("");
      loadRemarks();
    }
  }

  async function deleteRemark(id: number) {
    const ok = confirm("Delete this remark?");

    if (!ok) return;

    const response = await fetch(
      `https://vapi-ai-receptionist-production.up.railway.app/remarks/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      loadRemarks();
    }
  }

  return (
    <div className="space-y-5">

      <h2 className="text-2xl font-semibold">
        Remarks
      </h2>

      <div className="flex gap-3">
        <input
          value={newRemark}
          onChange={(e) => setNewRemark(e.target.value)}
          placeholder="Add remark..."
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
        />

        <button
          onClick={addRemark}
          className="rounded-lg bg-blue-600 px-5 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : remarks.length === 0 ? (
        <p className="text-zinc-500">
          No remarks yet.
        </p>
      ) : (
        <div className="space-y-3">
          {remarks.map((remark) => (
            <div
              key={remark.id}
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
            >
              <div className="flex justify-between items-start">

                <div>

                  <p>{remark.remark}</p>

                  <p className="mt-2 text-xs text-zinc-500">
                    {new Date(
                      remark.created_at
                    ).toLocaleString()}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteRemark(remark.id)
                  }
                  className="text-red-500 hover:text-red-400"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}