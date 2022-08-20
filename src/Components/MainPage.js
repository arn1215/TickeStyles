import SideBar from "../Sidebar"
import Card from "./Card"
import Carousel from "./Carousel"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <>
      <div className="w-full bg-slate-200 h-screen">
        <Navbar />
        <div className="multiple-carousel-container mt-20">
          <Carousel />
          <Carousel />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainPage