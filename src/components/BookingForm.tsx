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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative bg-white 
                 w-[95%] 
                 max-w-md md:max-w-lg 
                 rounded-3xl 
                 shadow-2xl 
                 p-8 md:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl cursor-pointer transition"
        >
          ✕
        </button>

        <h4 className="text-2xl md:text-3xl font-semibold text-[#52337F] mb-4">
          Confirmar cita
        </h4>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          {date.toLocaleDateString("es-MX")} <br />
          <span className="font-medium text-gray-800">{hour}</span>
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                     focus:border-[#52337F] focus:ring-2 focus:ring-[#52337F]/20 
                     outline-none transition"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                     focus:border-[#52337F] focus:ring-2 focus:ring-[#52337F]/20 
                     outline-none transition"
          />
        </div>

        <button
          onClick={handleConfirm}
          className="w-full mt-6 
                   bg-[#52337F] 
                   hover:bg-[#7d5ba6] 
                   text-white 
                   font-medium 
                   py-3 
                   rounded-xl 
                   transition-all 
                   duration-200 
                   hover:scale-[1.02] 
                   shadow-md"
        >
          Confirmar cita
        </button>

        {code && (
          <div
            className="mt-6 p-4 
                     rounded-xl 
                     bg-[#52337F]/10 
                     border border-[#52337F]/30 
                     text-center"
          >
            <p className="text-sm text-gray-600 mb-1">Código de cita</p>
            <strong className="text-xl tracking-widest text-[#52337F]">
              {code}
            </strong>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingForm
