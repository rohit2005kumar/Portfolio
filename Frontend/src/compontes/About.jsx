import React from 'react'
import img from '../assets/img2.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaReadme } from "react-icons/fa";
import download from './download.js';

const About = () => {
  return (
    <>
     <div className='flex flex-col justify-center items-center '>
      <span className='sm:text-5xl text-3xl font-bold underline text-[#19d5fb]'>About Me</span>
       <div className='flex gap-4 justify-between m-5 sm:flex-row flex-col  '>
        <div className='sm:w-[35%] h-120 w-full'>
          <div><img src={img} alt="img" className='w-full h-120 rounded-2xl sm:mt-5 ' /></div>

        </div>
        <div className='sm:w-[55%] w-full text-gray-400 flex flex-col gap-10'>
          <p className='text-[20px]'>I'm a passionate web developer based in Indonesia with a strong foundation in both frontend and backend technologies. My journey in web development started 3 years ago, and I've been constantly learning and adapting to new technologies ever since.</p>
          <p className='text-[20px]'> I specialize in creating responsive, user-friendly websites and web applications using modern frameworks and libraries. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally.</p>
          <p className='text-[20px]'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through my blog and social media.</p>
          <div className='w-full  '>
            <div className='p-6 bg-[rgba(128,128,128,0.15)] hover:shadow-2xs shadow-blue-200 mb-6 flex gap-6 items-center border border-[#19d5fb] rounded-2xl '>
              <FaReadme className='text-3xl text-[#19d5fb]' />
              <div>
                <span className='text-white font-semibold'>Education</span>
                <p>Computer Application</p>
              </div>
            </div>
            <div className='p-6 bg-[rgba(128,128,128,0.15)] mb-6 hover:shadow-md shadow-blue-200 flex gap-6 items-center border border-[#19d5fb] rounded-2xl '>
              <FaLocationDot className='text-3xl text-[#19d5fb]' />
              <div>
                <span className='text-white font-semibold'>Location</span>
                <p>Patna ,Bihar</p>
              </div>
            </div>
            <div className='p-6 bg-[rgba(128,128,128,0.15)] mb-6 hover:shadow-md  shadow-blue-200 flex gap-6 items-center border border-[#19d5fb] rounded-2xl '>
              <MdOutlineWork className='text-3xl text-[#19d5fb]' />
              <div>
                <span className='text-white font-semibold'>Experience</span>
                <p>2+ years in web Development</p>
              </div>
            </div>
          </div>
          <div className='px-6 py-2 bg-black w-45 text-center rounded-3xl border border-[#19d5fb] hover:shadow-md  shadow-blue-200' onClick={download}>Download cv </div>

        </div>
      </div>
     </div>

    </>
  )
}

export default About