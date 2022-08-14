import { FaBaby, FaFire, FaHome, FaQuestion } from 'react-icons/fa'

const SideBarIcon = ({ icon }) => {
  <div className="sidebar-icon">
    {icon}
  </div>
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-400 shadow-lg text-cyan-500 ">

      <div className="sidebar-icon cursor-pointer mt-6">
        <FaHome size={28}  />
      </div>

      <div className="sidebar-icon cursor-pointer">
        <FaQuestion  size={28} />
      </div>

    </div>
  )
}




export default SideBar;