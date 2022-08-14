import { FaBaby, FaFire, FaHome, FaQuestion, FaSearch } from 'react-icons/fa'
import src from "./Stub-logos_white.png"
const SideBarIcon = ({ icon }) => {
  <div className="sidebar-icon">
    {icon}
  </div>
}

const SideBar = () => {
 
  return (
    <div className="fixed top-0 left-0 h-16 w-screen m-0 flex flex-row justify-center bg-gray-400  text-cyan-500 shadow-xl">
        <img src={src} className="h-56 fixed -mt-20 left-10"  />
      <div className='flex flex-row space-x-4 w-4/12'>
        <input className='h-10 w-full mt-3 rounded-md outline-none px-4 text-black'  />
        <div className="sidebar-icon cursor-pointer h-10 w-12 mt-3">
          <FaSearch size={28} />
        </div>
      </div>

    </div>
  )
}




export default SideBar;