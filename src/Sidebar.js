import { FaBaby, FaFire, FaHome, FaQuestion, FaSearch } from 'react-icons/fa'

const SideBarIcon = ({ icon }) => {
  <div className="sidebar-icon">
    {icon}
  </div>
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-20 w-screen m-0 flex flex-row justify-center bg-gray-400  text-cyan-500 shadow-xl">
      <div className='flex flex-row space-x-4'>
        <input className='h-10 w-auto mt-4'  />
        <div className="sidebar-icon cursor-pointer mt-3">
          <FaSearch size={28} />
        </div>
      </div>

    </div>
  )
}




export default SideBar;