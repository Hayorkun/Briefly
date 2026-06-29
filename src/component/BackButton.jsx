import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex text-sm text-white/50 items-center mb-5"
      onClick={() => navigate("/dashboard")}
    >
      <ArrowLeft className="size-4" /> Back
    </button>
  );
};

export default BackButton;
