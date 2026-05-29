import React, { useState } from 'react'
import { getme, login } from '../services/auth'
import { toast } from 'react-toastify'
import { useAuthcontext } from '../hooks/authhook'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const nav = useNavigate()
    const { setUser, User, setLoading ,loading} = useAuthcontext()
    if(loading)return <p>loading......</p>

    const handleInputs = (e) => {
        // console.log(formData.username)
       
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const formSubmit = async (e) => {
        e.preventDefault()
         setLoading(true)

        try {
            const data = await login(formData)

            toast.success("login Sucessfully")

            const user = await getme()
            setUser(user)

            nav("/admindashboard")



        } catch (error) {
            // console.log()
            toast.error(error.response?.data.message)
        } finally {
            setFormData({
                username: '',
                password: ''
            })
            setLoading(false)

        }

    }
    return (
        <>
            <div className='h-screen w-full flex flex-col  justify-center items-center  '>

                <form onSubmit={formSubmit} className='sm:w-[40%] w-full full flex gap-2 flex-col p-6 '>
                    <span className='font-bold text-2xl mb-4 text-gray-300 hover:text-white'>Login </span>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='username' value={formData.username} onChange={handleInputs}
                            className='bg-gray-600 h-15 text-gray-50 rounded p-2 outline-none' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' value={formData.password} onChange={handleInputs}
                            className='bg-gray-600 h-15 text-gray-50 rounded p-2 outline-none' required />
                    </div>
                    <button type='submit' className='bg-[#19d5fb] mt-2 rounded  p-4 cursor-pointer hover:transform-3d'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login