import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

const ChangePhoto = () => {
  return (
   <>
   <form className='flex gap-4 justify-between ' >
    <div className='h-[50vh] w-full rounded bg-gray-700 p-6 flex justify-center gap-4 items-center'>
      <label htmlFor="homeImage">Home Page Image
        <IoCloudUploadOutline className='sm:h-20 sm:w-20 text-center'/>
      </label>
    <input type="file" name="homeImage" id="homeImage" className='hidden'/>
    </div>
   <div className=' h-[50vh] w-full rounded bg-gray-700 p-6 flex justify-center gap-4 items-center'>
     <label htmlFor="aboutImage">About Page Image
       <IoCloudUploadOutline className='sm:h-20 sm:w-20 text-center'/>
     </label>
     <input type="file" name="aboutImage" id="aboutImage" className='hidden' />
   </div>
   </form>
   </>
  )
}

export default ChangePhoto