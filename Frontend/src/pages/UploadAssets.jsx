import React, { useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { uploadAssets } from '../services/fileUpload'
import { toast } from 'react-toastify'

const UploadAssets = () => {
    const[uploadFiles,setUploadFiles]=useState({
        resume:null,
        homeImage:null,
        aboutImage:null
    })
    const[fileName,setFileName]=useState({
        resume:'',
        homeImage:'',
        aboutImage:''
    })
    const handleInputs=(e)=>{
    
       setFileName((prev)=>({...prev,[e.target.name]:e.target.files[0].name}))
            setUploadFiles((prev)=>({...prev,[e.target.name]:e.target.files[0]}))
        
    }
    const [loading,setLoading]=useState(false)
    const formSubmit=async(e)=>{
        e.preventDefault()
        const keys=Object.keys(uploadFiles)
        // console.log(keys)
        // if(uploadAssets.resume || uploadAssets.homeImage || uploadAssets.aboutImage) return toast.error({uploadAssets.})
        const data=new FormData()
        data.append('resume',uploadFiles.resume);
         data.append('homeImage',uploadFiles.homeImage);
         data.append('aboutImage',uploadFiles.aboutImage)
       try {
        setLoading(true)
        const res= await  uploadAssets(data)
        toast.success(res.message)
       } catch (er) {
         toast.error(er.response.data.message)
        
       }finally{
        setLoading(false)

setUploadFiles({
        resume:null,
        homeImage:null,
        aboutImage:null
    })
    setFileName({
        resume:'',
        homeImage:'',
        aboutImage:''
    })
       }


    }
    if(loading)return <span>Uploading......</span>
  return (
    <form  onSubmit={formSubmit} className='flex gap-2 flex-col justify-center items-center'>
    <div className='flex sm:flex-row flex-col gap-2 justify-evenly' >
          <div >
        <label htmlFor="resume"  > 
                <div className=' bg-gray-400 rounded flex flex-col justify-center items-center'>
                    <span className='text-xl font-black'>Resume</span>
                <IoCloudUploadOutline className='h-20 w-30'/>
                {fileName.resume && <p className='text-sm break-all px-2 text-center overflow-hidden'>{fileName.resume}</p>}
                </div>
            </label>
        <input type="file" name='resume' id="resume" className='hidden' onChange={handleInputs} />
        </div>

         <div >
         <label htmlFor="homeImage" > 
             <div className='h-50 w-60 flex flex-col justify-center items-center bg-gray-400 rounded text-center'>
                   <span className='text-xl font-black'> HomeImage</span>
                <IoCloudUploadOutline className='h-20 w-30'/>

                {fileName.homeImage && <p className='text-sm break-all px-2 text-center overflow-hidden'>{fileName.homeImage}</p>}
                </div>
         </label>
        <input type="file" name='homeImage'  id="homeImage" className='hidden' onChange={handleInputs} />
        
       </div>

        <div >
            <label htmlFor="aboutImage" >
                  <div className='h-50 flex flex-col justify-center items-center w-60 bg-gray-400 rounded text-center'>
                    <span className='text-xl font-black'> About Image</span>
                <IoCloudUploadOutline className='h-20 w-30'/>
                {fileName.aboutImage && <p className='text-sm break-all px-2 text-center overflow-hidden'>{fileName.aboutImage}</p>}
                </div>
            </label>
            <input type="file" name='aboutImage' id="aboutImage" className='hidden' onChange={handleInputs}  />
        
        </div>
      </div>
        <button type='submit' className='bg-blue-500 rounded p-4 w-50 '>Upload files</button>
    </form>
  )
}

export default UploadAssets