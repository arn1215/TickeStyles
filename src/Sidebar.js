import { FaBaby, FaFire, FaHome, FaQuestion, FaSearch } from 'react-icons/fa'
import src from "./Stub-logos_white.png"
const SideBarIcon = ({ icon }) => {
  <div className="sidebar-icon">
    {icon}
  </div>
}

const SideBar = () => {

  return (
    <div className="fixed top-0 left-0 h-16 w-screen m-0  flex flex-row justify-center  ">
      
        <button className='btn'>button</button>
    </div>
  )
}




export default SideBar;