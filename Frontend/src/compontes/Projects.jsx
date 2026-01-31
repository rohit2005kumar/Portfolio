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
     </div>
    </div>
    </>
  )
}

export default Projects