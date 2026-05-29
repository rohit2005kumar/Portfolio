import React, { useEffect } from 'react'
import { useAuthcontext } from '../hooks/authhook'
import ProjectCard from '../compontes/ProjectCard'
import { allProjectsFunction } from '../services/allprojects'

const AllProjects = () => {
    const{allProjects,setAllProjects}=useAuthcontext()
    if(allProjects.length<=0){
      return  <span>No projects Found</span>
    }
  
    // return( <p>Heekd</p>)
  return (
  <div className='sm:grid sm:grid-cols-12 sm:gap-4 gap-2 grid m-4 '>
  {allProjects.map((ele)=> <ProjectCard key={ele._id} 
  heading={ele.title} 
  desc={ele.description}
   image={ele.image} height={50} 
   projectlink={ele.projectlink}/>) }
  </div>)
}

export default AllProjects