import logos from "../assets/img/logos.png"
import "../styles/footer.css"
import { Facebook } from "lucide-react"

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
          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <li>
              <a href="#" className="hover:text-[#52337f] transition">
                (636)-692-95-00 EXT. 110
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#52337f] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#52337f] transition">
                Cookies
              </a>
            </li>
          </ul>

          <ul className="flex gap-5 text-[#52337f]">
            <li>
              <a href="#" className="hover:opacity-70 transition">
                <Facebook size={20} />
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-70 transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-70 transition">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
