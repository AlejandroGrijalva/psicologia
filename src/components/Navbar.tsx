import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
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
        <img className="h-auto w-auto" src={logo} alt="Logo" />
      </NavLink>
      <ul className=" lg:flex hidden items-center gap-10">
        <li>
          <NavLink
            to="/gestionar_cita/cancelar"
            end
            className={linkClass}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Cancelar Cita
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gestionar_cita/confirmar"
            end
            className={linkClass}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Confirmar Cita
          </NavLink>
        </li>
      </ul>
      <button
        type="button"
        style={{ backgroundColor: "#52337f" }}
        className="hover:cursor-pointer text-[#f8f6fc] lg:inline hidden text-sm  active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{ color: "white" }}
        >
          Agendar Cita
        </NavLink>
      </button>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden  text-3xl hover:cursor-pointer"
      >
        ☰
      </button>
      {/* Mobile Menu */
      /* Mobile Menu */
      /* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white 
        border-b border-gray-300 p-6 lg:hidden
        overflow-hidden transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "max-h-96 opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none "
        }`}
      >
        <ul className="flex flex-col space-y-4 font-tec text-lg">
          <li>
            <NavLink
              to="/gestionar_cita/cancelar"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Cancelar Cita
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gestionar_cita/confirmar"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Confirmar Cita
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          style={{ backgroundColor: "#52337f" }}
          className=" text-[#f8f6fc] mt-6 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full hover:cursor-pointer"
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{ color: "white" }}
          >
            Agendar Cita
          </NavLink>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
