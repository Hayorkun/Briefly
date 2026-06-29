import { useParams, NavLink, Outlet } from "react-router-dom";
import BackButton from "./BackButton";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const MeetingDetails = () => {
  const { meetingId } = useParams();

  const [meeting, setMeeting] = useState(null);

  const tabStyle = ({ isActive }) => ({
    color: isActive ? "#5DCAA5" : undefined,
    borderColor: isActive ? "#5DCAA5" : "transparent",
  });

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const meetingRef = doc(db, "meetings", meetingId);

        const meetingSnap = await getDoc(meetingRef);

        if (meetingSnap.exists()) {
          setMeeting(meetingSnap.data());
        } else {
          console.log("No such meeting found");
        }
      } catch (error) {
        console.error("Error fetching meeting:", error);
      }
    };
    if (meetingId) {
      fetchMeeting();
    }
  }, [meetingId]);

  return (
    <section className="p-9">
      <BackButton />

      <h1 className="text-xl font-semibold mt-15 mb-1">
        {meeting?.title}
      </h1>
      <div className="flex gap-4 text-xs text-white/30 mb-6">
        <span>{meeting?.createdAt ? new Date(meeting.createdAt.seconds * 1000).toLocaleDateString() : "Loading date..."}</span>
        <span>{meeting?.durationSeconds ? `${Math.floor(meeting.durationSeconds / 60)} min` : "0 min"}</span>
      </div>

      <div className="flex gap-1 border-b border-white/10 mb-5">
        <NavLink
          to="summary"
          style={tabStyle}
          className="px-4 py-2 text-sm border-b-2"
        >
          Summary
        </NavLink>
        <NavLink
          to="action"
          style={tabStyle}
          className="px-4 py-2 text-sm border-b-2"
        >
          Action items
        </NavLink>
        <NavLink
          to="transcript"
          style={tabStyle}
          className="px-4 py-2 text-sm border-b-2"
        >
          Transcript
        </NavLink>
      </div>

      <Outlet context={meeting} />
    </section>
  );
};

export default MeetingDetails;
