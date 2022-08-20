
import './App.css';
import SideBar from './Sidebar';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <MainPage />
      <Footer />
     
    </div>
  )
}

export default App;
