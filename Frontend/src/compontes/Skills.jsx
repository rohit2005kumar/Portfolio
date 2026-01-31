import React from 'react'
import { RiNodejsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { AiOutlinePython } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaJs } from "react-icons/fa6";

const Skills = () => {
  return (
    <>
      <div className=' sm:h-full sm:w-full flex flex-col gap-5 m-5 justify-center items-center '>
        <div className=' flex flex-col  justify-between gap-10 sm:flex-row'>
          <div className='  flex flex-col gap-4 justify-center rounded-2xl items-center sm:p-4 p-2 border border-gray-400'>
            <span className='font-bold text-2xl text-[#19d5fb]'>Frontend Development</span>
            <div className=' flex flex-col gap-4'>
              <div className='flex gap-4 justify-center flex-1  items-center'><FaHtml5 className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>HTML5</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span>  </div>
              <div className='flex gap-4 justify-center flex-1  items-center'><FaCss3Alt className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>CSS3</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 justify-center flex-1  items-center'><FaReact className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>React</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 justify-center flex-1  items-center'><FaJs className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>JavaScript</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
            </div>
          </div>
          <div className='  flex flex-col gap-4 justify-center rounded-2xl items-center  sm:p-4 p-2 border border-gray-400'>
            <span className='font-bold text-2xl text-[#19d5fb]'>Backend Development</span>
            <div className=' flex flex-col gap-4'>
              <div className='flex gap-4 flex-1  justify-center items-center'><FaNodeJs className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Node.js</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span>  </div>
              <div className='flex gap-4 flex-1  justify-center items-center'><AiOutlinePython className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Python</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 flex-1  justify-center items-center'><SiExpress className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Express.js</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              {/* <div className='flex gap-4 justify-center items-center'><FaJs className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>JavaScript</span><span className=' w-48  h-2 bg-[#19d5fb] rounded-2xl'></span></div> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between gap-10'>
          <div className='  flex flex-col gap-4 justify-center rounded-2xl items-center sm:p-4 p-2 border border-gray-400'>
            <span className='font-bold text-2xl text-[#19d5fb]'>Database Management</span>
            <div className=' flex flex-col gap-4'>
              <div className='flex gap-4 flex-1  justify-center items-center'><FaDatabase className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>MongoDb</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span>  </div>
              <div className='flex gap-4 flex-1  justify-center items-center'><FaDatabase className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>MySQL</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 flex-1  justify-center items-center'><FaDatabase className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Oracle</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              {/* <div className='flex gap-4 justify-center items-center'><FaJs className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>JavaScript</span><span className=' w-48  h-2 bg-[#19d5fb] rounded-2xl'></span></div> */}
            </div>
          </div>
          <div className='  flex flex-col gap-4 justify-center rounded-2xl items-center sm:p-4 p-2 border border-gray-400'>
            <span className='font-bold text-2xl text-[#19d5fb]'>DevOps & Tools</span>
            <div className=' flex flex-col gap-4'>
              <div className='flex gap-4 flex-1 justify-center items-center'><FaGitAlt className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Git</span><span className=' sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span>  </div>
              <div className='flex gap-4 flex-1  justify-center items-center'><VscVscode className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>VsCode</span><span className='sm:w-48 w-35 h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 flex-1 justify-center items-center'><SiPostman className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>Postman</span><span className=' sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
              <div className='flex gap-4 flex-1  justify-center items-center'><FaJs className='text-3xl text-[#19d5fb]' /><span className='font-semibold'>JavaScript</span><span className='sm:w-48 w-35  h-2 bg-[#19d5fb] rounded-2xl'></span></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Skills