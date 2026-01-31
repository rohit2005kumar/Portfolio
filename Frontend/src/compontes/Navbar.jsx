import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { whatsapp } from './ccontactbtncliks';

const Navbar = () => {
    const [toggle,setToggle]=useState(true)
    const btnclick=()=>{
        setToggle((prev)=>!prev)
    }
    return (
        <>
            <nav className='bg-black border border-gray-800 flex gap-4  justify-between items-center h-14 p-2 w-full sticky top-0 sm:w-full'>
                
                <div className='p-2 w-auto '>
                    <h2 className='font-extrabold text-2xl'>Apna Developer</h2>
                </div>
                <div className='h-13 w-[60%] hidden sm:flex  justify-center items-center gap-24 bg-[#0a0a0a]  rounded-2xl text-gray-500'>

                    <div className='flex  justify-center items-center gap-24'>
                    <NavLink to={'/'}className={({ isActive }) => isActive ? "bg-[#19d5fb] p-2 rounded-2xl text-black": "" }>Home</NavLink>
                    <NavLink to={'/about'}className={({ isActive }) => isActive ? "bg-[#19d5fb] p-2 rounded-2xl text-black": "" }>About</NavLink>
                    <NavLink to={'/skills'}className={({ isActive }) => isActive ? "bg-[#19d5fb] p-2 rounded-2xl text-black": "" }>Skills</NavLink>
                    <NavLink to={'/projects'} className={({ isActive }) => isActive ? "bg-[#19d5fb] p-2 rounded-2xl text-black": "" }>Projects</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? "bg-[#19d5fb] p-2 rounded-2xl text-black": "" }>contact</NavLink>
                    </div>
                    {/* <NavLink to={"/whatsapp" } target=''>whatsapp me</NavLink> */}


                </div>
                <div className='p-2 text-black bg-[#19d5fb] w-auto hidden sm:block  rounded-2xl cursor-pointer' onClick={whatsapp}>
                    lets Talk
                </div>
               
                <RxHamburgerMenu 
                className='sm:hidden block font-bold text-3xl active:rotate-180 transition-transform duration-700'
               onClick={btnclick}
               />
                
            </nav>
            <div className={`${toggle ? "hidden" : "block" } flex justify-between bg-[rgba(121,121,121,0.15)] w-full  `}>

                    <div className='flex flex-col gap-2'>
                    <NavLink to={'/'} onClick={btnclick}>Home</NavLink>
                    <NavLink to={'/about'} onClick={btnclick}>About</NavLink>
                    <NavLink to={'/skills'} onClick={btnclick}>Skills</NavLink>
                    <NavLink to={'/projects'} onClick={btnclick}>Projects</NavLink>
                    <NavLink to={'/contact'} onClick={btnclick}>Contact</NavLink>
                    </div>
                    <div>
                        <RxCross2 className='text-3xl ' onClick={btnclick}/>
                    </div>

                    {/* <NavLink to={"/whatsapp" } target=''>whatsapp me</NavLink> */}


                </div>
             
        </>
    )
}

export default Navbar