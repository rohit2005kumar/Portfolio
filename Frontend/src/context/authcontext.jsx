import { createContext, useEffect, useState } from "react";
import { getme } from "../services/auth";
import { allProjectsFunction } from "../services/allprojects";

export const authcontext= createContext()

export const AuthProvider=({children})=>{
    const [User,setUser]=useState({})
    const[allProjects,setAllProjects]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      const checkUser=async ()=>{
      try {
          const user=await getme()
        setUser(user)
      } catch (error) {
        setUser(null)
        
      }finally{
        setLoading(false)
      }
      }
       const fetchAllProjects=async () => {
       const data= await allProjectsFunction()
       console.log(data)
        setAllProjects(data)
      }
      fetchAllProjects()
      checkUser()

    },[])

    return <authcontext.Provider value={{User,setUser,loading,setLoading,allProjects,setAllProjects}}>
        {children}
    </authcontext.Provider>
    
}