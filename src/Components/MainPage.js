import SideBar from "../Sidebar"
import Card from "./Card"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex w-screen flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default MainPage