import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import ManageAppoinment from "./pages/ManageAppointment"
import "./App.css"

function App() {
  return (
    <>
      <title>Departamento de Psicología | ITSNCG</title>
      <link rel="icon" type="image/svg" href="/tridente.svg" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gestionar_cita"
          element={<Navigate to="/gestionar_cita/confirmar" />}
        />
        <Route path="/gestionar_cita/:accion" element={<ManageAppoinment />} />
      </Routes>
    </>
    /* <div className="app">
        <CalendarComponent />
      </div>
      <div>
        <Navbar />
      </div> */
  )
}
export default App
