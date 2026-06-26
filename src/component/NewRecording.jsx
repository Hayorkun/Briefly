import BackButton from "./BackButton";
import { useState, useEffect } from "react";
import { Mic, Circle, Square } from "lucide-react";
import PrivacyPolicy from "./PrivacyPolicy";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NewRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [seconds, setSeconds] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (m) => {
    setMeetingName(m.target.value);
  };

  const handleClick = () => {
    setIsRecording((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remaining = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(remaining).padStart(2, "0")}`;
  };

  const handleStop = async () => {
    const duration = seconds;
    setIsRecording(false);

    try {
      await addDoc(collection(db, "meetings"), {
        userId: user.uid,
        title: meetingName || "Untitled meeting",
        createdAt: serverTimestamp(),
        durationSeconds: duration,
        transcript: "Placeholder transcript — Deepgram integration pending.",
        summary: "Placeholder summary — AI integration pending.",
        actionItems: [],
      });

      setSeconds(0);
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to save meeting:", error);
    }
  };

  if (!user) return null;

  return (
    <section>
      <div className="p-5">
        <BackButton />

        <div className="flex flex-col gap-15 items-center justify-center min-h-[calc(100vh-100px)] max-w-md mx-auto">
          <div className=" w-full">
            <p className="font-semibold text-md text-white/40">
              Meeting name (optional)
            </p>
            <input
              type="text"
              name="meetingTitle"
              value={meetingName}
              onChange={handleChange}
              className="bg-white/10 py-2 px-2 font-semibold w-full text-sm rounded-sm "
              placeholder="e.g Q3 planning sync"
            />
          </div>
          {isRecording ? (
            <div className="flex items-center justify-center flex-col">
              <div className="w-30 h-30 mb-7 relative flex items-center justify-center">
                <div className="absolute inset-5 bg-red-500/30 rounded-full animate-ping" />
                <div className="relative w-25 h-25 rounded-full flex items-center justify-center bg-red-400/10 shadow-sm">
                  <Mic className="text-red-500/80" />
                </div>
              </div>
              <h2 className="font-bold text-2xl mb-3">{formatTime(seconds)}</h2>
              <p className="mb-5 text-red-500/80 font-semibold">
                Recording in progress
              </p>
              <button
                onClick={handleStop}
                className="mb-5 rounded-md border-white/20 hover:opacity-70 font-semibold flex text-xs items-center gap-1.5 border py-2 px-4"
              >
                <Square className="size-3" /> Stop & process
              </button>
              <p className="max-w-xs text-sm text-white/40 font-semibold text-center">
                Stay on this tab while recording. Switching tabs may interrupt
                audio capture.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col">
              <div className="w-25 h-25 rounded-full flex items-center justify-center bg-white/10 mb-7">
                <Mic className="text-white/30" />
              </div>
              <p className="mb-5 font-semibold text-white/40">
                Ready to record
              </p>
              <button
                onClick={handleClick}
                className="mb-5 border-white/20 hover:opacity-70  rounded-md font-semibold flex text-xs items-center gap-1.5 border py-2 px-4"
              >
                <Circle className="size-3" /> Start recording
              </button>
              <p className="max-w-xs text-sm text-white/40 font-semibold text-center">
                Make sure your microphone is picking up the meeting audio before
                you start.
              </p>
            </div>
          )}
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  );
};

export default NewRecording;
