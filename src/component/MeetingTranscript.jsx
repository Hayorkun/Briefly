import { useOutletContext } from "react-router-dom";

const MeetingTranscript = () => {
  const meeting = useOutletContext();

  return (
    <div className="p-5">
      <div className="p-3 bg-white/10 ">
        <h3 className="uppercase mb-5 text-xs font-semibold text-white/30">
          full transcription
        </h3>
        <p className="text-xs text-white/50">{meeting?.transcript}</p>
      </div>
    </div>
  );
};

export default MeetingTranscript;
