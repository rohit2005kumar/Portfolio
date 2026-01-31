import React from 'react'
import ContactCard from './ContactCard'
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from './ContactForm';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { sendemail, viewonmap,callnow } from './ccontactbtncliks';


const Contact = () => {
  const mapfun=useNavigate();
  
  return (
    // </> 
     <>
    <div className='flex flex-col justify-center items-center'>
       <span className='sm:text-5xl text-3xl font-bold hover:underline active:underline  text-[#19d5fb]'>Conatact info</span>
       <div  className=' sm:flex-row flex justify-center items-center gap-4 m-5 flex-col sm:w-full '>
       {/* <div className='flex gap-4'> */}
      <div className='flex flex-col gap-4'>
       <ContactCard Logo={MdEmail} para={"rohitkumarroy234987@gmail.com"} span1={"Email"} span2={"send Email"} clickfunction={sendemail}/>
     <ContactCard Logo={FaPhoneAlt} para={"9541156502"} span1={"Phone"} span2={"Call Now"} clickfunction={callnow}/>
     <ContactCard Logo={FaLocationPin} para={"Barh , Patna Bihar 803214"} span1={"Location"} span2={"View on Map"} clickfunction={viewonmap} />
    </div>
    {/* contact form */}
    
      <ContactForm/>
    
    
    </div>
    </div>
   
    {/* </div> */}
    {/* <ToastContainer position='top-center' autoClose={2000}/> */}
     </>
  )
}

export default Contact