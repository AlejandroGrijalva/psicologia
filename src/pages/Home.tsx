import CalendarComponent from "../components/Calendar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center mt-5 mb-5">
          <CalendarComponent />
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Home
