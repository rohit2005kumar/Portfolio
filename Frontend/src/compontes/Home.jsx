import React from 'react'
import TextType from './TextType';
import img1 from '../assets/img1.jpeg'
import SocialIcons from './SocialIcons.jsx';
import download from './download.js';
import { sendemail } from './ccontactbtncliks.js';
// import download from './download.js';

const Home = () => {
  return (
    <>
    <div className='flex sm:flex-col flex-col justify-center gap-4 ml-4'>
       <span className='text-[#19d5fb] '>😊Hello there!</span> 
       <span className='text-5xl font-bold'>I'm</span>
       <span className='text-[#19d5fb] text-3xl sm:text-5xl font-bold mb-2'>Web_developer</span>
       <span className='text-[#19d5fb] text-2xl '>I'm  Full-Stack  Developer</span> 
    </div>
    <div className='sm:flex-row flex-col-reverse flex justify-between sm:m-4  items-center m-4'>
      <div className='sm:w-[40%] w-full leading-7 font-light  text-xl text-gray-400 p-2'>
  
    I'm web developer, a passionate Software Developer who enjoys 
    understanding how system works- fro low-level logic circuits to high-level circuits
    to high level applications.With solid experinece in java,python and morder web technologies
    i aim to create efficent, reliable,and scalable software that combines logic and creativity
  
      </div>
    <div className='sm:w-[25%] w-full border rounded-3xl h-100 border-gray-400   '>
      <img src={img1} alt="img" className=' h-100 border border-gray-500 rounded-2xl w-full'/>
    </div>
    </div>
    <div className='flex gap-4 m-8 sm:flex-row flex-col'>
      <div className='bg-[rgba(125,131,139,0.15)]  p-8 border border-gray-500  rounded-2xl hover:shadow-2s shadow-amber-50'><div className='flex flex-col justify-center items-center font-semibold gap-2'><span className='text-3xl  text-[#19d5fb]!'>10+</span><p className='text-center' >Projects Completed</p></div></div>
      <div className='bg-[rgba(125,131,139,0.15)]  p-8 border border-gray-500  rounded-2xl'><div className='flex flex-col justify-center items-center font-semibold gap-2'><span className='text-3xl  text-[#19d5fb]!'>2+</span><p className='text-center' >Years Experience</p></div></div>
      <div className='bg-[rgba(125,131,139,0.15)]  p-8 border border-gray-500  rounded-2xl'><div className='flex flex-col justify-center items-center font-semibold gap-2'><span className='text-3xl  text-[#19d5fb]!'>15+</span><p className='text-center' >Happy clients</p></div></div>
    </div>

    <div className='flex gap-4 m-8'>

      <div className='sm:px-6 sm:py-2 px-4 py-1 bg-[#19d5fb] text-black inline rounded-3xl hover:shadow-2xs shadow-blue-200 cursor-pointer' onClick={sendemail}>Hire me</div>
      <div onClick={download} className='sm:px-6 sm:py-2 px-4 py-1 bg-black inline rounded-3xl border border-gray-400 hover:shadow-2xs shadow-blue-200' >Download cv </div>
    </div>
    <SocialIcons/>
    </>


  )
}

export default Home