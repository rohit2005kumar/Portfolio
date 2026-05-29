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
<<<<<<< HEAD
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import { ToastContainer } from "react-toastify"
import { useAuthcontext } from "./hooks/authhook"
import AddProject from "./pages/AddProject"
import ChangePhoto from "./pages/ChangePhoto"
import Protected from "./pages/Protected"
import AllpProjects from "./pages/AllProjects"
import TotalPeople from "./pages/TotalPeople"
import UpdateResume from "./pages/UpdateResume"
import UploadAssets from "./pages/UploadAssets"

function App() {
  const{User}=useAuthcontext()
  
=======

function App() {
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
 
// console.log(window)
  return (
   <>
  {/* <Router> */}
<<<<<<< HEAD
   { User ? "" :  <Navbar/> }
  
   
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/admindashboard" element={ <Protected><AdminDashboard/></Protected>}>
    <Route path="totalpeople" element={<TotalPeople/>}/>
    <Route path="addproject" element={<AddProject/>}/>
    <Route path="allproject" element={<AllpProjects/>}/>
    <Route path="changephoto" element={<ChangePhoto/>}/>
    <Route path="updateresume" element={<UpdateResume/>}/>
     <Route path="uploadassets" element={<UploadAssets/>}/>

    </Route>

    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/services" element={<Services/>}/>
=======
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
     <Route path="/services" element={<Services/>}/>
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/whatsapp" element={<WhatsAppRedirect/>}/>
    <Route path='/map' element={<Map/>}/>
     <Route path="/*" element={<PageNotFound/>} />
    </Routes>
<<<<<<< HEAD
   <ToastContainer position="bottom-right" toastClassName={'sm:w-10'}  />
=======
   
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
  {/* </Router> */}
  
  
   </>
  )
}

export default App
