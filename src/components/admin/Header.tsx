export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>

      <div className="rounded-full bg-zinc-800 px-4 py-2">
        Admin
      </div>
    </header>
  );
}