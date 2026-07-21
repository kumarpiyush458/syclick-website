export default function VoiceWave() {
  const bars = [18, 36, 24, 42, 28, 34, 20, 38];

  return (
    <div className="flex items-end gap-1 h-10">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1 rounded-full bg-cyan-400 animate-wave"
          style={{
            height: `${height}px`,
            animationDelay: `${index * 120}ms`,
            animationDuration: `${800 + index * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}