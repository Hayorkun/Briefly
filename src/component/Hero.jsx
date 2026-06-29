import { Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");

    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <section className="px-5">
      <div className="hero-glow" />
      <div className="hero-grain" />
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
        <div className="flex gap-2 py-3 px-5 bg-white/10 border-white/10 rounded-full mb-5">
          <Sparkles className="size-4 text-teal-400" />
          <p className="text-sm text-teal-400">Ai-powered meeting notes</p>
        </div>
        <h1 className="text-6xl font-bold text-center max-w-xl mb-5">
          Every meeting,{" "}
          <span className="text-teal-400">captured clearly.</span>
        </h1>
        <p className="text-center max-w-lg font-normal text-sm mb-6">
          Record your Google Meet sessions and get a full transcript plus an AI
          summary with action items — automatically.
        </p>
        <button
        onClick={handleSignIn}
          className="border border-white/5 hover:border-white/20 py-2 px-4 flex items-center gap-2 text-sm bg-white/5 rounded-xl hover:bg-white/20 active:scale-[0.97] active:bg-white/10
  transition-all duration-150"
        >
          <FcGoogle />
          Sign in with google
        </button>
      </div>
    </section>
  );
};

export default Hero;
