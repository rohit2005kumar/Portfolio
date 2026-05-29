import React from 'react'
import {LiaGithub,FaInstagram,FaLinkedinIn,PiWhatsappLogo} from './icons.js'
import{instagram,whatsapp,github,linkedln} from './ccontactbtncliks.js'
const SocialIcons = () => {
  return (
   <>
   <div className='flex gap-4'>
    {/* <div> */}
       <div className='p-2 flex justify-center items-center rounded-xl bg-[rgba(128,128,128,0.15)] text-center'> <LiaGithub className="w-8 h-8  transition-colors " onClick={github}/></div>
        <div className='p-2 flex justify-center items-center rounded-xl bg-[rgba(128,128,128,0.15)] '><FaInstagram className="w-8 h-8 hover:text-pink-600 transition-colors active:text-pink-600" onClick={instagram}/></div>
        <div className='p-2 flex justify-center items-center rounded-xl bg-[rgba(128,128,128,0.15)]'><FaLinkedinIn className="text-blue-400-500 w-10 h-10 hover:text-blue-600 transition-colors active:text-blue-600" onClick={linkedln}/></div>
        <div className='p-2 flex justify-center items-center rounded-xl bg-[rgba(128,128,128,0.15)]'><PiWhatsappLogo className="w-8 h-8 hover:text-green-600 transition-colors active:text-green-600" onClick={whatsapp}/></div>
    {/* </div> */}      
   </div>
   </>
  )
}

export default SocialIcons