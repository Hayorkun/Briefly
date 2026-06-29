import { useOutletContext } from "react-router-dom";

const MeetingAction = () => {
  const meeting = useOutletContext()
  const actionItems = meeting?.actionItems

  return (
    <div className="p-5">
      <div className="p-3 bg-white/10 ">
        {actionItems.length > 0 ? (
        <ul className="flex flex-col gap-3 list-disc pl-5 text-sm text-white/80">
          {actionItems.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-white/45 italic p-4 bg-white/5 rounded-md border border-white/5">
          No action items captured for this meeting yet.
        </div>
      )}
      </div>
    </div>
  );
}

export default MeetingAction