<<<<<<< HEAD
import React, { useState ,useRef, useEffect} from 'react'

const ProjectCard = ({ image, heading, desc, height, projectlink }) => {
    const [viewMore, setViewMore] = useState(false)
    const[showbtn,setShowBtn]=useState(false);
    const paraRef=useRef()
    useEffect(() => {
    if (paraRef.current.scrollHeight > paraRef.current.clientHeight) {
      setShowBtn(true);
    }
  }, []);

    return (
        <div className=' border hover:shadow-2xl overflow-hidden p-4 border-gray-700 rounded-2xl col-span-6 sm:w-90 w-full m-9  '>

            <img src={image} alt="img" className={`h-${height}  rounded-t-2xl rounded-b-2xl`} />


            <div className='flex flex-col gap-4 p-2 '>
                <span className='font-black text-2xl'>{heading}</span>
                <p className={`${viewMore ? '':'line-clamp-3'} w-fit`} ref={paraRef}>{desc}</p>
            </div>
            <div className='flex justify-between'>
                <a href={projectlink}
                    target='_blank'
                    rel="noopener,noreferrer"
                    className='p-2 bg-blue-400 rounded'>
                    <button className=''>click Here</button>
                </a>

                {
                    showbtn && (<button className='hover:underline text-blue-300' onClick={()=>{setViewMore(!viewMore)}}>
                        {
                          viewMore ? " view less":"view more"
                    }</button>)
                }
            </div>
        </div>

    )
=======
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
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
}

export default ProjectCard