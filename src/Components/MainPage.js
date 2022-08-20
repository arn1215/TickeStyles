import SideBar from "../Sidebar"
import Card from "./Card"
import Carousel from "./Carousel"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <>
      <div className="w-full bg-slate-200 h-screen flex-col space">
        <Carousel />
      </div>
    </>
  )
}

export default MainPage