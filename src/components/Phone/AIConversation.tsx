import VoiceWave from "../ui/VoiceWave";

type AIConversationProps = {
  status: string;
  message: string;
};

export default function AIConversation({
  status,
  message,
}: AIConversationProps) {
  return (
    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">

      <p className="text-sm text-cyan-300">
        {status}
      </p>

      <p className="text-white mt-3 leading-7 whitespace-pre-line">
        {message}
        <span className="animate-pulse text-cyan-400">|</span>
      </p>

      <div className="mt-4">
        <VoiceWave />
      </div>

    </div>
  );
}