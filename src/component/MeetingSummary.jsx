import { useOutletContext } from "react-router-dom"

const MeetingSummary = () => {
  const meeting = useOutletContext();

  return (
    <div className="p-5">
      <div className="bg-white/10 rounded-sm p-3">
        <p className="text-xs text-white/50 font-semibold">{meeting?.summary}</p>
      </div>
    </div>
  )
}

export default MeetingSummary