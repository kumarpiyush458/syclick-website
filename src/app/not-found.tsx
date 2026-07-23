import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white px-6">

      <h1 className="text-8xl font-bold text-cyan-400">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-center text-gray-400">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
      >
        Back to Home
      </Link>

    </main>
  );
}