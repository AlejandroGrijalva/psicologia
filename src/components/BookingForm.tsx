import { useState } from "react"
import { sileo, Toaster } from "sileo"
import { Copy, Check } from "lucide-react"
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
  const [confirmed, setConfirmed] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClose = () => {
    sileo.clear()
    onClose()
  }

  const handleConfirm = () => {
    if (!name || !phone) {
      sileo.error({
        title: "Campos incompletos",
        description: "Completa nombre y teléfono.",
        fill: "#52337F",
        styles: {
          title: "text-white!",
          description: "text-white/80!",
        },
      })
      return
    } else {
      setCode(generateCode())
      setConfirmed(true)
    }

    setCode(generateCode())

    sileo.success({
      title: "Cita confirmada",
      description:
        "Tu código para cancelar o confirmar cita fue generado correctamente.",
      fill: "#52337F",
      roundness: 18,
      styles: {
        title: "text-white!",
        description: "text-white/80!",
      },
    })
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0" onClick={handleClose} />

        <div
          className="relative bg-white 
                   w-[95%] 
                   max-w-md md:max-w-lg 
                   rounded-3xl 
                   shadow-2xl 
                   p-8 md:p-10"
        >
          <button
            onClick={handleClose}
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
            disabled={confirmed}
            className={`w-full mt-6
    text-white 
    font-medium 
    py-3 
    rounded-xl 
    transition-all 
    duration-200 
    shadow-md
    ${
      confirmed
        ? "bg-gray-200 cursor-not-allowed"
        : "bg-[#52337F] hover:bg-[#7d5ba6] hover:cursor-pointer hover:scale-[1.02]"
    }
  `}
          >
            {confirmed ? "Cita confirmada" : "Confirmar cita"}
          </button>

          {code && (
            <div
              className="mt-6 p-5 
               rounded-2xl 
               bg-[#52337F] 
               text-center 
               shadow-lg 
               relative"
            >
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code)
                  setCopied(true)

                  setTimeout(() => setCopied(false), 2000)

                  sileo.info({
                    title: "Código copiado",
                    fill: "#52337F",
                    styles: {
                      title: "text-white!",
                    },
                  })
                }}
                className="absolute top-3 right-3 
                 text-white/70 
                 hover:text-white 
                 transition 
                 p-1.5 
                 rounded-md 
                 hover:bg-white/20"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>

              <p className="text-sm text-white/80 mb-2">Código de cita</p>

              <strong className="text-2xl tracking-widest text-white">
                {code}
              </strong>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BookingForm
