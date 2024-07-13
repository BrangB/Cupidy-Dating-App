import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import useFetch from '../hooks/useFetch';

const Dashboard = () => {

  const {user, setUser} = useAuth();


  return (
    <div className='duration-300'>
      <h1 className=''>Dashboard</h1>
    </div>
  )
}

export default Dashboard