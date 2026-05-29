<<<<<<< HEAD
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
    
=======
import React from 'react'
import ProjectCard from './ProjectCard'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
const Projects = () => {
  const para='A Tuition Management System is a software application its my 2nd project hdhsjdswd dsjdj chdljd   '
  const para2="Airbnb is a global online marketplace that connects people looking for accommodations with hosts offering unique places "
  return (
    <>
    <div className='flex justify-center gap-4 sm:gap-20 flex-col items-center'>
      <span className='font-bold text-sky-300 text-4xl'>Featured Projects</span>
     <div className='flex sm:flex-row flex-col gap-4 justify-center items-center'>
       <ProjectCard image={project1} heading={"Tution Management"} desc={para}/>
      <ProjectCard image={project2} heading={"AirBnb Clone"} desc={para2}/>
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
     </div>
    </div>
    </>
  )
}

export default Projects