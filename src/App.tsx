import './App.css'
import Navbar from './assets/components/Navbar'
import Footer from './Footer'

function App() {
  
  return (
    <div>
    <div className='lg:h-screen'>
      <Navbar />    
      </div>
      <div className='lg:hidden absolute bottom-0 w-full justify-center bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r justify-between p-1 lg:w-1/3 lg:h-screen lg:place-content-around'>
      <Footer color={"white"} size={30}/>
      </div>   
     
      </div>
    
  )
}

export default App
