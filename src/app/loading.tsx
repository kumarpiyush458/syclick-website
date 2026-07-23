export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

        <h2 className="mt-8 text-2xl font-semibold text-white">
          Loading Syclick...
        </h2>

        <p className="mt-2 text-gray-400">
          Preparing your AI employee.
        </p>

      </div>
    </main>
  );
}