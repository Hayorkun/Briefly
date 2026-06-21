const TranSummary = () => {
  const transcriptLines = [
    {
      time: "0:00",
      text: "Alright, let's get started. I want to run through the Q3 priorities first.",
    },
    {
      time: "0:42",
      text: "The onboarding flow is the biggest blocker right now.",
    },
    { time: "1:18", text: "I can have the mockups ready by Thursday." },
  ];

  const actionItems = [
    "Send proposal by Friday",
    "Review Q3 budget",
    "Schedule follow-up sync",
  ];

  return (
    <section className="py-20 px-5 bg-[#18181c]">
      <div className="bg-white/5 max-w-6xl mx-auto rounded-xl border border-white/10 overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-4 p-5">
          {/* Transcript */}
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-xs text-white/40 uppercase tracking-wide mb-3">
              Transcript
            </p>
            <div className="flex flex-col gap-3">
              {transcriptLines.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xs text-white/30 shrink-0 w-8">
                    {line.time}
                  </span>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-xs text-white/40 uppercase tracking-wide mb-3">
              Summary
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              The team aligned on Q3 priorities and the onboarding flow
              redesign. Mockups are due Thursday, with budget review to follow.
            </p>
            <p className="text-xs text-white/40 uppercase tracking-wide mb-2">
              Action items
            </p>
            <div className="flex flex-wrap gap-2">
              {actionItems.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-teal-400/10 text-teal-400 px-3 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranSummary;
