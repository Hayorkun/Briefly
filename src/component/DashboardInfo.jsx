import { NavLink } from "react-router-dom";
import { Circle } from "lucide-react";

const DashboardInfo = () => {
  

  
  const STATS = [
    {
      id: 1,
      title: "Total meetings",
      amount: "20",
    },
    {
      id: 2,
      title: "Hours recorded",
      amount: "8.4",
    },
    {
      id: 3,
      title: "Action items",
      amount: "34",
    },
  ];

  const RECENTS = [
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
    {
      title: "Q3 product planning sync",
      duration: "40min",
      date: "today",
      time: "10:30 AM",
      transcript: "Transcript",
      Action: "6 action item",
    },
  ];


  return (
    <section className="">
      <div className="p-5">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-semibold text-lg">Your meeting</h1>

          <NavLink className="flex items-center border-white/50 border px-3 py-2 gap-1 text-xs rounded-sm hover:bg-white/20">
            <Circle className="size-3" />{" "}
            <p className="font-semibold"> New recording</p>
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-5 h-25 mb-10">
          {STATS.map((s) => (
            <div key={s.id} className="bg-gray-400/20 p-3 rounded-sm">
              <p className="text-xs text-gray-400 mb-4">{s.title}</p>
              <h3 className="text-2xl font-semibold">{s.amount}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {RECENTS.map((r) => (
            <div className="bg-gray-400/30 p-3 rounded-sm">
              <div className="flex justify-between mb-1 items-center">
                <h2 className="font-semibold text-md">{r.title}</h2>
                <p className="text-gray-400 text-xs ">{r.duration}</p>
              </div>
              <p className="uppercase text-xs text-shadow-gray-400 mb-5">
                {r.date} <span>{r.time}</span>
              </p>

              <div className="flex gap-5 items-center">
                <div className="p-1 bg-teal-400/10 text-teal-400">{r.transcript}</div>
                <div className="p-1 bg-teal-400/10 text-teal-400">{r.Action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;
