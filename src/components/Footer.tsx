import logos from "../assets/img/logos.png"
import "../styles/footer.css"
import { Facebook, Instagram, Phone } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 mb-0">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex justify-center">
          <img
            src={logos}
            alt="Logos institucionales"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <li className="flex gap-2">
              <div className="font-bold">
                <p className="text-center text-[#52337f]">
                  AV. TECNOLÓGICO N0. 7100 C.P. 31700. NUEVO CASAS <br />{" "}
                  GRANDES, CHIHUAHUA, MÉXICO
                </p>
                <p className="flex justify-center">
                  <Phone size={15} strokeWidth={3} />
                  <a href="tel:6366929500" className="ml-2">
                    {" "}
                    (636)-692-95-00 EXT. 110
                  </a>
                </p>
              </div>
            </li>
            <li></li>
            <li>
              <a
                href="#"
                className="relative font-bold text-[#52337f]
             after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
             after:h-[2px] after:w-full after:bg-[#52337f]
             after:origin-left after:scale-x-0
             after:transition-transform after:duration-300
             hover:after:scale-x-100"
              >
                <br />
                Aviso de Privacidad
              </a>
            </li>
          </ul>

          <ul className="flex gap-5 text-[#52337f]">
            <li>
              <a href="#" className="hover:opacity-70 transition">
                <Facebook size={20} strokeWidth={2.5} />
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-70 transition">
                <Instagram size={20} strokeWidth={2.5} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
