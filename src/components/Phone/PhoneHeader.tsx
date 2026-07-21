type PhoneHeaderProps = {
  seconds: number;
  title: string;
};

export default function PhoneHeader({
  seconds,
  title,
}: PhoneHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <span className="text-green-400 text-sm font-medium">
            LIVE CALL
          </span>

        </div>

        <span className="text-slate-500 text-sm">
          {String(Math.floor(seconds / 60)).padStart(2, "0")}:
          {String(seconds % 60).padStart(2, "0")}
        </span>

      </div>

      <div className="text-cyan-400 text-sm">
        AI Receptionist
      </div>

      <h3 className="text-3xl font-bold mt-2">
        {title}
      </h3>
    </>
  );
}