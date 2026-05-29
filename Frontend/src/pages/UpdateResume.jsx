import React, { useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { updateResume } from '../services/fileUpload';
import { toast } from 'react-toastify';

const UpdateResume = () => {
  const [fileName,setFileName]=useState("Please Select File....");
  const[resumeFile,setResumeFile]=useState(null)
  const [loading,setLoading]=useState(false)
  const handleInput=(e)=>{
  
    setResumeFile(e.target.files[0])
    setFileName(e.target.files[0].name)

  }
  if(loading) return <span>Resume Updating..........</span>

  const formSubmit=async(e)=>{
    e.preventDefault()
    if(!resumeFile)return toast.error("Please select file")
    setLoading(true)
    
    
    const data=new FormData();
    data.append('resume',resumeFile);
    try {
      const res=await updateResume(data)
      console.log(res)
      toast.success(res.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }finally{
      setLoading(false)
      // setFileName("Please Select File")
    }


  }
  return (<>
  
    {/* className='h-full w-full flex justify-center items-center' */}
      <div >
        {/* className='flex flex-col gap-2 h-full w-full ' */}
        <form   onSubmit={formSubmit}>
          {/* <div className='bg-gray-700 p-4 rounded w-80 h-50  '> */}
          
        <label htmlFor="resume" 
        //  className=' bg-gray-700 p-4 rounded sm:w-90 sm:h-50 m-4 h-50 w-full  flex flex-col justify-center items-center'
       >
           <div>
            Update Resume
              <IoCloudUploadOutline className='h-20 w-20 text-center'/>
              {fileName && <span >{fileName}</span>}
           </div>
        </label>
        <input required  name='resume' type="file" id='resume' className='hidden' onChange={handleInput} />
          {/* </div> */}
          <button type="submit" className='p-4 bg-blue-600 rounded w-40'>update resume</button>
        </form>
    </div>
    
 </> )
}

export default UpdateResume