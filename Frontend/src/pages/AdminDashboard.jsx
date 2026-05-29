import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross2  } from "react-icons/rx";
import { useAuthcontext } from '../hooks/authhook'
import { logout } from '../services/auth'
import { toast } from 'react-toastify'
import { useNavigate, Link, Outlet,NavLink,useOutlet } from 'react-router-dom'
const AdminDashboard = () => {
  const { User } = useAuthcontext()
  const navi = useNavigate()
  const childOutlet=useOutlet()
  const handleLogout = async () => {
    try {
      const res = await logout()
      console.log(res)
      toast.success(res.message)
      navi('/login')
    } catch (error) {
      toast.error(error.response.data.message)

    }

  }
  const [isToggle,setIsToggle]=useState(true)
  return (
    <>
    {/* laptop screen */}
      <div className=' sm:grid grid-cols-12 h-screen grid-rows-[56px_1fr] gap-4 hidden '>
        {/* header */}
        <div className=' bg-black col-span-12 border-2 border-gray-900 gap-2 shadow-gray-800 shadow-2xs flex justify-between top-0 sticky '>
          <span className=' font-bold text-2xl '>Welcome , <span className='text-yellow-400'>{User.username}</span></span>
          <button onClick={handleLogout} className='px-4 py-2 rounded bg-amber-600 cursor-pointer'>Logout</button>
        </div>
        {/*side bar */}
        <aside className=' ml-2 mb-2 col-span-3 border-2 border-gray-900 rounded p-2 shadow-gray-800 shadow-2xs '>
          <div className='flex sm:flex-col justify-evenly gap-2 h-full '>
            <NavLink to={'totalpeople'}  
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'} >
              Total Visitors
              </NavLink>
            <NavLink to={'addproject'} 
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              Add Projects
              </NavLink>
            <NavLink to={'updateresume'}
             className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              Update Resume
              </NavLink>
            <NavLink to={'changephoto'} 
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              change photo
              </NavLink>
            <NavLink to={'allproject'} 
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              All Projects 
              </NavLink>
               <NavLink to={'uploadassets'} 
            onClick={()=>{setIsToggle(!isToggle)}}
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
            Upload Assets 
              </NavLink>

          </div>

        </aside>
        {/* main content */}
        <main className='col-span-9  border-2 border-gray-900 rounded p-2 mr-2 mb-2  '>
         {
          childOutlet ?
          <Outlet />
          :
          <div className='flex justify-center items-center'>
              <span className='text-3xl text-gray-600 font-bold'>Select Options to go ahead</span>
          </div>
         }
        </main>

      </div>

      {/* Mobile view */}
      <div className='sm:hidden'>
         {/* header */}
        <div className=' bg-black border-2 border-gray-900 gap-2 shadow-gray-800 shadow-2xs flex justify-between sticky top-0 '>
         <div className='flex flex-col'>
           <span className=' font-bold text-xl '>Welcome ,</span>
           <span className='text-yellow-400 text-xl'>{User.username}</span>
         </div>
         <RxHamburgerMenu className={`h-10 w-10 mt-2 ${isToggle ? 'block' :' hidden'}`} onClick={()=>{setIsToggle(!isToggle)}}/>
         <RxCross2 className={`h-10 w-10 mt-2${isToggle ? ' hidden' : 'block'}`}  onClick={()=>{setIsToggle(!isToggle)}}/>
          {/* <button onClick={handleLogout} className='px-4 py-2 rounded bg-amber-600 cursor-pointer'>Logout</button> */}
        </div>
         {/* menu bar  */}
          <div className={`h-full w-full flex justify-between    bg-gray-700 p-4 ${isToggle?'hidden':'block'}`}>
           <div  className='flex flex-col gap-2 h-full w-full '>
             <NavLink to={'totalpeople'}
             onClick={()=>{setIsToggle(!isToggle)}}  
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'} >
              Total Visitors
              </NavLink>
            <NavLink to={'addproject'}
            onClick={()=>{setIsToggle(!isToggle)}} 
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              Add Projects
              </NavLink>
            <NavLink to={'updateresume'}
            onClick={()=>{setIsToggle(!isToggle)}}
             className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              Update Resume
              </NavLink>
            <NavLink to={'changephoto'}
            onClick={()=>{setIsToggle(!isToggle)}} 
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              change photo
              </NavLink>
            <NavLink to={'allproject'} 
            onClick={()=>{setIsToggle(!isToggle)}}
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
              All Projects 
              </NavLink>
               <NavLink to={'uploadassets'} 
            onClick={()=>{setIsToggle(!isToggle)}}
            className={({isActive})=>isActive ? 'bg-gray-600 p-4 rounded text-center text-xl': 'p-4 bg-gray-900 rounded text-center text-xl text-white'}>
            Upload Assets 
              </NavLink>
              <button onClick={handleLogout} className='px-4 py-2 rounded bg-amber-600 cursor-pointer'>Logout</button>
           </div>
           
          </div>
          
{/* main content */}
        <main >
          <Outlet />
        </main>

      </div>

    </>
  )
}

export default AdminDashboard
