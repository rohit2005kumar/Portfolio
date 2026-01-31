import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'

const ContactForm = () => {
  const [input, setInput] = useState({ inp1: '', inp2: '', inp3: '' })
  const [Message,setMessage]=useState('')
  const submitform=async()=>{
    {
      if(input.inp1.length==0){
        toast("Name should not be empty")
        return;
      }
      if(input.inp2.length==0){
        toast("email should not be empty")
        return;
      }
      if(input.inp3.length==0){
        toast("Subject should not be empty")
        return;
      }
      if(Message.length==0){
        toast("Message should not be empty")
        return;
      }
    }
    let userinfo={
      name:input.inp1,
      email:input.inp2,
      subject:input.inp3,
      message:Message
    }
   const data= await axios.post('http://localhost:8080/connect',{userinfo})

    toast(data.data)
    setInput(()=>{return{inp1:'',inp3:'',inp2:''}})
    setMessage('')
    console.log(data)
  }
  return (<>
    <div className='w-full sm:w-[35%]'>
      <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col justify-center items-center gap-4  p-2 rounded-2xl  bg-[rgba(128,128,128,0.20)]'>
        <input type="text"  required value={input.inp1} onChange={(e) => {
          // console.log(input.inp1)
          setInput((prev) => ({ ...prev, inp1: e.target.value }))
        }} className='border border-gray-500 h-16 w-full  p-2 outline-none rounded-2xl mb-4' placeholder='Your Name' />
        <input type="email" required value={input.inp2} onChange={(e) => {
          // console.log(input.inp2)
          setInput((prev) => ({ ...prev, inp2: e.target.value }))
        }} className='border border-gray-500  h-16 w-full  p-2 outline-none rounded-2xl mb-4' placeholder='Your Email' />
        <input type="text" required value={input.inp3} onChange={(e) => {
          // console.log(input.inp3)
          setInput((prev) => ({ ...prev, inp3: e.target.value }))
        }} className='border border-gray-500  h-16  w-full outline-none p-2 rounded-2xl mb-4' placeholder='Your Subject' />
        <textarea name="Message" id="" required placeholder='Your Message' 
        value={Message} onChange={(e)=>{setMessage(e.target.value)}} className='p-2 border rounded-2xl w-full  outline-none border-gray-500   h-40'></textarea>
        <button  onClick={submitform} className='border h-16 w-full  rounded-2xl mb-4 bg-[#19d5fb] text-black'>Send Message</button>
      </form>
      <ToastContainer className='w-[20%]'/>
    </div>
  </>
  )
}

export default ContactForm

