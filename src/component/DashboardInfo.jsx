import { NavLink } from "react-router-dom";
import { Circle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

const DashboardInfo = () => {
  const [meetingData, setMeetingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchMeetings = async () => {
      try {
        setLoading(true);

        const meetingsQuery = query(
          collection(db, "meetings"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(meetingsQuery);

        const meetings = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMeetingData(meetings);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, [user]);

  if (loading) {
    return <p className="p-5 text-white/40">Loading your meetings...</p>;
  }

  return (
    <section>
      <div className="p-5">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-semibold text-lg">Your meeting</h1>
          <NavLink
            to="/recording"
            className="flex items-center border-white/50 border px-3 py-2 gap-1 text-xs rounded-sm hover:bg-white/20"
          >
            <Circle className="size-3" />
            <p className="font-semibold">New recording</p>
          </NavLink>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-white/10 p-3 rounded-sm">
            <p className="text-xs text-white/40 font-semibold mb-4">Total meetings</p>
            <h3 className="text-2xl font-semibold">{meetingData.length}</h3>
          </div>
          <div className="bg-white/10 p-3 rounded-sm">
            <p className="text-xs text-white/40 font-semibold mb-4">Hours recorded</p>
            <h3 className="text-2xl font-semibold">
              {(meetingData.reduce((sum, m) => sum + (m.durationSeconds || 0), 0) / 3600).toFixed(1)}
            </h3>
          </div>
          <div className="bg-white/10 p-3 rounded-sm">
            <p className="text-xs text-white/40 font-semibold mb-4">Action items</p>
            <h3 className="text-2xl font-semibold">
              {meetingData.reduce((sum, m) => sum + (m.actionItems?.length || 0), 0)}
            </h3>
          </div>
        </div>

        {meetingData.length === 0 ? (
          <p className="text-white/30 text-sm">No meetings yet — start your first recording.</p>
        ) : (
          <div className="flex flex-col gap-5">
            {meetingData.map((r) => (
              <div
                key={r.id}
                className="bg-white/10 p-3 rounded-lg hover:scale-[1.01] hover:border-teal-400/40 border border-white/0 transition-all duration-300"
              >
                <div className="flex justify-between mb-1 items-center">
                  <h2 className="font-semibold text-md">{r.title}</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-5 items-center">
                    <div className="p-1 bg-teal-400/10 text-teal-400 text-xs rounded">
                      {r.actionItems?.length || 0} action items
                    </div>
                  </div>
                  <NavLink
                    to={`/meeting/${r.id}`}
                    className="w-10 h-10 items-center flex justify-center"
                  >
                    <ChevronRight className="text-white/20" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardInfo;