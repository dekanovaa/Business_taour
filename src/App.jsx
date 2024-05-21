
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Tours from './Components/Tours/Tours'
import Support from './Components/Support/Support'
import About from './Components/About/About'
import Main from './Components/Main/Main'
import Location from './Components/Location/Location'
import Contact from './Components/Contact/Contact'
import Map from './Components/Map/Map'
import Message from './Components/Message/Message'
import Footer from './Components/Footer/Footer'
import Modal from './Components/Modal/Modal'






function App() {
  

  return (
    <>
  

  <div className="top">
  <Navbar/>
    <Modal/>
  </div>
    <Header/>
    <Tours/>
    <Support/>
    <About/>
    <Main/>
    <Location/>
    <Contact/>
    <Map/>
    <Message/>
    <Footer/>
    
    
  


  
    </>
  )
}

export default App
