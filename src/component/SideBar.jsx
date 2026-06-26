import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdDashboard, MdMic, MdSettings } from "react-icons/md";

const SideBar = () => {
  const { user } = useAuth();

  const navStyle = ({ isActive }) => ({
    color: isActive ? "white" : "gray",
  });

  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="sticky top-0 h-screen col-span-3 lg:col-span-2">
          <div className="py-5 px-3 lg:px-7 h-screen bg-black flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="mb-10">
                <NavLink to="/dashboard">
                  <h1 className="font-bold text-2xl">
                    Briefly
                    <span className="text-teal-400">.</span>
                  </h1>
                </NavLink>
              </div>
              <div className="flex flex-col text-md gap-7 font-semibold">
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2"
                  style={navStyle}
                >
                  <MdDashboard /> Dashboard
                </NavLink>
                <NavLink
                  to="/recording"
                  className="flex items-center gap-2"
                  style={navStyle}
                >
                  <MdMic /> New Recording
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex items-center gap-2"
                  style={navStyle}
                >
                  <MdSettings /> Settings
                </NavLink>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t h-15 border-white/15">
              <img className="w-7 h-7 rounded-full object-contain" src={user?.photoURL}/>
              <p className="font-semibold text-sm">{user?.displayName}</p>
            </div>
          </div>
        </div>
        <div className="col-span-9 lg:col-span-10 p-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
