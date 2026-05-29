import React from 'react'
import { useAuthcontext } from '../hooks/authhook'
import AdminDashboard from './AdminDashboard'
import Login from './Login'
import {Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    const {User,loading}=useAuthcontext()
    if(loading)return <p>Loading.....</p>
   
    if(!User){
      return <Navigate to={'/login'} replace/>
    }
  return children
}

export default Protected