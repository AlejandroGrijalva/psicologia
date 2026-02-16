import { useState } from "react"
import "../styles/booking.css"

interface Props {
  date: Date
  hour: string
  onClose: () => void
}

const generateCode = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""

  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }

  return code
}

const BookingForm: React.FC<Props> = ({ date, hour, onClose }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [code, setCode] = useState<string | null>(null)

  const handleConfirm = () => {
    if (!name || !phone) {
      alert("Completa nombre y teléfono")
      return
    }
    setCode(generateCode())
  }

  return (
    <>
      <div className="overlay" onClick={onClose} />

      <div className="modal">
        <button className="close" onClick={onClose}>
          ✕
        </button>

        <h4>Confirmar cita</h4>

        <p>
          📅 {date.toLocaleDateString("es-MX")} <br />⏰ {hour}
        </p>

        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <button className="confirm" onClick={handleConfirm}>
          Confirmar cita
        </button>

        {code && (
          <div className="code">
            Código de cita: <strong>{code}</strong>
          </div>
        )}
      </div>
    </>
  )
}

export default BookingForm
