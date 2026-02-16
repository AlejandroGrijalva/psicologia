import "../styles/timeslots.css"

interface Props {
  selectedHour: string | null
  onSelectHour: (hour: string) => void
}

const TimeSlots: React.FC<Props> = ({ selectedHour, onSelectHour }) => {
  // Horarios permitidos (9–5, sin 2–3 pm)
  const hours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  return (
    <div className="timeslots">
      <h4>Horarios disponibles</h4>

      <div className="slots">
        {hours.map(hour => (
          <button
            key={hour}
            className={selectedHour === hour ? "active" : ""}
            onClick={() => onSelectHour(hour)}
          >
            {hour}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TimeSlots
