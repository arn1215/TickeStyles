import { FaBaby, FaFire, FaHome, FaQuestion } from 'react-icons/fa'

const SideBarIcon = ({ icon }) => {
  <div className="sidebar-icon">
    {icon}
  </div>
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-green-300 shadow-lg text-white">

      <div className="sidebar-icon ">
        <FaHome size={28} className="cursor-pointer" />
      </div>

      <div className="sidebar-icon">
        <FaQuestion  size={28} className="cursor-pointer"/>
      </div>

    </div>
  )
}




export default SideBar;