import { ShieldIcon } from "lucide-react";

const PrivacyPolicy = () => {

  return (
    <div className="flex align-top gap-3 max-w-xs bg-white/10 p-3 rounded-md">
      <ShieldIcon className="w-15 text-orange-300" />
      <p className="text-xs font-semibold text-white/40">
        <strong className="text-sm text-white">
          Microphone access required.
        </strong>{" "}
        Briefly only records when you press start. Audio is sent securely for
        transcription and is never stored raw.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
