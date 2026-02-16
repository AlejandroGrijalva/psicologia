import { useState } from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovering, setHovering] = useState(false)
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium text-[#52337f]
     after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
     after:h-[2px] after:w-full after:bg-[#52337f]
     after:origin-left after:transition-transform after:duration-300
     ${
       isActive && !hovering
         ? "after:scale-x-100"
         : "after:scale-x-0 hover:after:scale-x-100"
     }`

  return (
    <nav className="h-[70px] sticky top-0 w-full bg-white px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 border-b-1 border-gray-300">
      <NavLink to="/">
        <span className=" font-bold text-xl">LOGO</span>
      </NavLink>
      <ul className=" md:flex hidden items-center gap-10">
        <li>
          <NavLink
            to="/"
            end
            className={linkClass}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/departamento"
            end
            className={linkClass}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Departamento
          </NavLink>
        </li>
      </ul>
      <button
        type="button"
        className="bg-[#52337f] hover:cursor-pointer text-[#f8f6fc] md:inline hidden text-sm  active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Agendar Cita
      </button>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden  text-3xl"
      >
        ☰
      </button>
      {/* Mobile Menu */
      /* Mobile Menu */
      /* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white 
              border-b border-gray-300 p-6 md:hidden
              overflow-hidden transition-all duration-500 ease-in-out
              ${
                menuOpen
                  ? "max-h-96 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
      >
        <ul className="flex flex-col space-y-4 font-tec text-lg">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/departamento"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Departamento
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="bg-[#52337f] text-[#f8f6fc] mt-6 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Agendar Cita
        </button>
      </div>
    </nav>
  )
}

export default Navbar
