import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ManageAppoinment from "./pages/ManageAppointment"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gestionar_cita" element={<ManageAppoinment />} />
    </Routes>

    /* <div className="app">
        <CalendarComponent />
      </div>
      <div>
        <Navbar />
      </div> */
  )
}
export default App
