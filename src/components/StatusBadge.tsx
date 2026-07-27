interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles: Record<string, string> = {
    New: "bg-blue-500/20 text-blue-400",
    Contacted: "bg-yellow-500/20 text-yellow-400",
    "Demo Scheduled": "bg-purple-500/20 text-purple-400",
    "Proposal Sent": "bg-orange-500/20 text-orange-400",
    Won: "bg-green-500/20 text-green-400",
    Lost: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
        styles[status] ??
        "bg-zinc-700 text-zinc-200"
      }`}
    >
      {status}
    </span>
  );
}