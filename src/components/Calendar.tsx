import { useState } from "react"
import Calendar from "react-calendar"
import TimeSlots from "./TimeSlots"
import BookingForm from "./BookingForm"
import "../styles/calendar.css"

const CalendarComponent: React.FC = () => {
  const blockedDates = ["2026-02-21", "2026-03-14"]
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]
  }
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const [selectedHour, setSelectedHour] = useState<string | null>(null)

  const today = new Date()
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1)

  // Último día del siguiente mes
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0)

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
        minDate={minDate}
        maxDate={maxDate}
        tileDisabled={({ date, view }) => {
          if (view === "month") {
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            const formatted = formatDate(date)
            return date < today || blockedDates.includes(formatted)
          }
          return false
        }}
        locale="es-MX"
        prev2Label={null}
        next2Label={null}
      />

      {selectedDate && (
        <TimeSlots
          selectedHour={selectedHour}
          onSelectHour={setSelectedHour}
          onClose={() => setSelectedDate(null)}
        />
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
