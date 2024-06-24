import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import useFetch from '../hooks/useFetch';

const Dashboard = () => {

  const {user, setUser} = useAuth();

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    return <Navigate to="/login" />
  }

  return (
    <div className='duration-300'>
      <h1 className=''>Dashboard</h1>
      <button onClick={logout} className='p-2 flex items-center justify-center .bg-secondary'>LogOut</button>
    </div>
  )
}

export default Dashboard