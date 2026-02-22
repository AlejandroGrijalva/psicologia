import "../styles/timeslots.css"

interface Props {
  selectedHour: string | null
  onSelectHour: (hour: string) => void
  onClose: () => void
}

const TimeSlots: React.FC<Props> = ({
  selectedHour,
  onSelectHour,
  onClose,
}) => {
  const hours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  const maxPerDay = 5
  const takenHours = ["10:00 AM", "12:00 PM", "1:00 PM", "3:00 PM"]

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative bg-white 
                   w-[95%] 
                   md:w-[700px] 
                   lg:w-[900px] 
                   rounded-3xl 
                   shadow-2xl 
                   p-6 md:p-10"
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl md:text-2xl font-semibold text-[#52337f]">
            Horarios disponibles
          </h4>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="text-sm md:text-base text-gray-500 mb-6">
          {takenHours.length} de {maxPerDay} horarios ocupados
        </p>

        <div
          className="grid 
                        grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        gap-4 md:gap-6"
        >
          {hours.map(hour => {
            const isTaken = takenHours.includes(hour)
            const dayFull = takenHours.length >= maxPerDay

            return (
              <button
                key={hour}
                disabled={isTaken || dayFull}
                onClick={() => !isTaken && !dayFull && onSelectHour(hour)}
                className={`
                  py-4 md:py-5
                  text-base md:text-lg
                  font-medium
                  rounded-2xl
                  border
                  transition-all
                  duration-200
                  ${
                    isTaken
                      ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                      : selectedHour === hour
                        ? "bg-[#52337F] text-white border-[#52337F] scale-105 shadow-lg"
                        : "bg-gray-100 hover:bg-[#7d5ba6] hover:text-white border-gray-300 hover:scale-105 cursor-pointer"
                  }
                `}
              >
                {hour}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TimeSlots
