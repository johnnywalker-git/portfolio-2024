import './App.css'
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div>
      <div className='lg:h-screen lg:flex'>
      <Navbar />    
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Home />} />
      </Routes>
      </div>
      <footer>
      <div className='lg:hidden w-full justify-center bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r justify-between p-1 lg:w-1/3 lg:h-screen lg:place-content-around'>
      <Footer color={"white"} size={30}/>
      </div>
      </footer>
      </div>
    
  )
}

export default App
