import React from 'react'

const ProjectCard = ({image,heading,desc}) => {
  return (
    <div className='sm:w-[30%] border rounded-2xl '>
        <img src={image} alt="img" className='h-50 w-full rounded-t-2xl' />
        <div className='flex flex-col gap-4 p-2'>
            <span className='font-black text-2xl'>{heading}</span>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard