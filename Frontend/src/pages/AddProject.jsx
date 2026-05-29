import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { uploadFile } from '../services/fileUpload';
import { toast } from 'react-toastify';

const AddProject = () => {
    const [formData, setFormData] = useState({
        description: '',
        title: '',
        projectlink:''
    })
    const [loading,setLoading]=useState(false)
    const [fileName, setfileName] = useState('')
    const handInputs = (e) => {
        if (e.target.name === 'image') {
            setFormData({
                ...formData,
                image: e.target.files[0]
            })
            setfileName(e.target.files[0].name)
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }

    }
    if(loading)return  <p>uploading....</p> 
    const formsubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // here is FormData is build in browser to handle form data
        const data = new FormData()
        data.append('description', formData.description)
        data.append('title', formData.title)
        data.append('image', formData.image)
        data.append('projectlink',formData.projectlink)
        try {
            const res = await uploadFile(data)
            toast.success(res.data.message)
            console.log(res)
        } catch (error) {
            // console.log(error.response.data.message)
            toast.error(error.response.data.message)

        } finally {
            setFormData({
                description: '',
                title: '',

            })
            setfileName('')
            setLoading(false)
        }




    }
    return (
        <>
            <div className='sm:container h-full w-full border border-gray-700 rounded  p-6  '>
                <form className='sm:m-6 ' onSubmit={formsubmit}>
                    <div className='flex gap-2 m-2 flex-col '>
                        <label htmlFor="title">Title</label>
                        <input type="text" className='outline-none h-15  bg-gray-600 text-whiteoutline-none'
                            id='title'
                            name='title'
                            value={formData.title}
                            onChange={handInputs}
                            required

                        />
                    </div>
                    <div className='flex gap-2 m-2 flex-col'>
                        <label htmlFor="description">Description</label>
                        <textarea className='bg-gray-600 h-40 text-white outline-none sm:h-20 resize-none'
                            placeholder='Description' id="description" name='description'
                            value={formData.description}
                            onChange={handInputs}
                            required
                        ></textarea>
                    </div>
                    <div className='flex gap-2 m-2 flex-col'>
                        <label htmlFor="image" className='bg-gray-500 rounded  text-white h-30 sm:w-40 px-4 py-2 cursor-pointer flex justify-center items-center flex-col'>
                            Select Thumbnail
                            <IoCloudUploadOutline className='sm:h-20 sm:w-40 w-30 h-15'
                            />
                            {fileName && <p>{fileName}</p>}
                        </label>
                        <input type="file" className='bg-gray-600 text-white outline-none h-20 w-90 hidden'
                            id='image'
                            name='image'
                            onChange={handInputs}
                            required
                        />
                    </div>
                    <div className='flex gap-2 m-2 flex-col '>
                        <label htmlFor="projectlink">Project Link</label>
                        <input type="text" className='outline-none h-15  bg-gray-600 text-whiteoutline-none'
                            id='projectlink'
                            name='projectlink'
                            value={formData.projectlink}
                            onChange={handInputs}
                            required

                        />
                    </div>
                    
                    <button type='submit' className='bg-blue-500 cursor-pointer hover:bg-blue-600 p-4 rounded m-5'>Add Project</button>

                </form>
            </div>
        </>
    )
}

export default AddProject