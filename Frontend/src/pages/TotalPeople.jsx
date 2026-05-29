import React, { useEffect, useState } from 'react'
import { contactPeopleFunction } from '../services/contactPeople'

const TotalPeople = () => {
    const[totalPeople,setTotalPeople]=useState([])
    useEffect(()=>{
        const fetchAllPeople=async () => {
            const res=await contactPeopleFunction();
            console.log(res)
            setTotalPeople(res.allPeople)
            
        }
        fetchAllPeople()

    },[])
  return (
 <div className='flex gap-4 sm:flex-col flex-col m-4'>
  <span className='text-2xl font-bold underline  text-yellow-500 '>People to be contact</span>
 {
   totalPeople.length>0 ? totalPeople.map((ele)=>{
    return <div key={ele._id} className=' rounded p-6 flex flex-col gap-4 bg-gray-700'>
         <span><span  className='font-bold'>Name</span> :- {ele.name}</span>
         <span><span  className='font-bold'>Email</span> :- {ele.email}</span>
         <span> <span  className='font-bold'>Subject</span> :- {ele.subject}</span>
         <p><span  className='font-bold'>Message</span> :- {ele.message}</p>

    </div>
   }): <p>No People data found...</p>
 }
 </div>
  )
}

export default TotalPeople