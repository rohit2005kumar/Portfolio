import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import { useAuthcontext } from '../hooks/authhook'
const Projects = () => {
  const{allProjects}=useAuthcontext()
  // const [loading,setLoading]=useState(false)
  // console.log(allProjects)
  
if(allProjects.length==0)return <div className='flex justify-center items-center'><span className='text-blue-600 text-center font-bold '>Fetching Projects ......</span></div>
  return (
    <>
    <div className='flex justify-center gap-4 sm:gap-5 flex-col items-center'>
      <span className='font-bold text-sky-300 text-4xl'>Featured Projects</span>
     <div className='flex sm:grid sm:gap-2 sm:grid-cols-12 flex-col gap-4 justify-center items-center'>
    {allProjects.map((ele)=> <ProjectCard  key={ele._id} heading={ele.title} desc={ele.description} image={ele.image} height={50}  projectlink={ele.projectlink}/>) }
    
     </div>
    </div>
    </>
  )
}

export default Projects