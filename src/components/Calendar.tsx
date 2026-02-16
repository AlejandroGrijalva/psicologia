import { useState } from "react"
import Calendar from "react-calendar"
import TimeSlots from "./TimeSlots"
import BookingForm from "./BookingForm"
import "../styles/calendar.css"

const CalendarComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const [selectedHour, setSelectedHour] = useState<string | null>(null)

  return (
    <>
      <Calendar
        value={selectedDate}
        onChange={val => {
          setSelectedDate(val as Date)
          setSelectedHour(null)
        }}
        view="month"
        minDetail="month"
        maxDetail="month"
        locale="es-MX"
        prev2Label={null}
        next2Label={null}
      />

      {selectedDate && (
        <TimeSlots selectedHour={selectedHour} onSelectHour={setSelectedHour} />
      )}

      {selectedDate && selectedHour && (
        <BookingForm
          date={selectedDate}
          hour={selectedHour}
          onClose={() => setSelectedHour(null)}
        />
      )}
    </>
  )
}

export default CalendarComponent
