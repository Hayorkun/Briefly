import { Mic, File, ListCheck } from "lucide-react";

const FeaturesInfo = () => {
  const features = [
    {
      icon: Mic,
      title: "One-click recording",
      desc: "Start capturing your meeting audio in seconds, no setup needed.",
    },
    {
      icon: File,
      title: "Full transcript",
      desc: "Every word captured and searchable after the meeting ends.",
    },
    {
      icon: ListCheck,
      title: "Ai acton items",
      desc: "Key decisions and tasks extracted automatically by AI.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
          {features.map(({icon: Icon, title, desc }, f) => (
            <div key={f} className="p-5 border-t border-gray-400/30 ">
              <div className="w-9 h-9 flex items-center justify-center bg-teal-400/10 rounded-lg mb-4">
                <Icon className="size-4 text-teal-400"/>
              </div>
              <h3 className="font-semibold text-white/50 leading-relaxed text-sm mb-2">{title}</h3>
              <p className="text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesInfo;
