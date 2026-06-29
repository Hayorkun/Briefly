import { NavLink, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";

const Navbar = () => {
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
    <section className="border-b border-gray-500/20 px-5 sticky top-0 bg-blur backdrop-blur-lg z-500">
      <div className="flex justify-between h-15 items-center">
        <NavLink to="/">
          <h1 className="font-bold text-3xl">
            Briefly
            <span className="text-teal-400">.</span>
          </h1>
        </NavLink>
        <button
          onClick={handleSignIn}
          className="text-sm font-semibold bg-white/5 hover:bg-teal-300/50 px-4 active:scale-[0.97] active:bg-teal-500 py-2 cursor-pointer rounded-md transition-all duration-150"
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Navbar;
