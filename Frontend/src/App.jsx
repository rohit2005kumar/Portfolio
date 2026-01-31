import { Route, Router, Routes } from "react-router-dom"
import Home from "./compontes/Home"
import About from './compontes/About'
import Skills from "./compontes/Skills"
import Services from "./compontes/Services"
import Projects from "./compontes/Projects"
import Contact from "./compontes/Contact"
import Navbar from "./compontes/Navbar"
import WhatsAppRedirect from "./compontes/WhatsAppRedirect"
import Map from "./compontes/Map"
import PageNotFound from "./compontes/PageNotFound"

function App() {
 
// console.log(window)
  return (
   <>
  {/* <Router> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
     <Route path="/services" element={<Services/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/whatsapp" element={<WhatsAppRedirect/>}/>
    <Route path='/map' element={<Map/>}/>
     <Route path="/*" element={<PageNotFound/>} />
    </Routes>
   
  {/* </Router> */}
  
  
   </>
  )
}

export default App
