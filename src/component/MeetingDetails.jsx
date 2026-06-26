import { useParams, NavLink, Outlet } from "react-router-dom";
import BackButton from "./BackButton";

const MeetingDetails = () => {
  const { meetingId } = useParams();

  const tabStyle = ({ isActive }) => ({
    color: isActive ? "#5DCAA5" : undefined,
    borderColor: isActive ? "#5DCAA5" : "transparent",
  });

  return (
    <section className="p-9">
      <BackButton />

      <h1 className="text-xl font-semibold mt-6 mb-1">Q3 product planning sync</h1>
      <div className="flex gap-4 text-xs text-white/30 mb-6">
        <span>Today, 10:30 AM</span>
        <span>47 min</span>
      </div>

      <div className="flex gap-1 border-b border-white/10 mb-5">
        <NavLink to="summary" style={tabStyle} className="px-4 py-2 text-sm border-b-2">
          Summary
        </NavLink>
        <NavLink to="action" style={tabStyle} className="px-4 py-2 text-sm border-b-2">
          Action items
        </NavLink>
        <NavLink to="transcript" style={tabStyle} className="px-4 py-2 text-sm border-b-2">
          Transcript
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
};

export default MeetingDetails;