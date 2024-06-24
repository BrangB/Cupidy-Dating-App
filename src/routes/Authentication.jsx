import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const Authentication = ({children}) => {

    const {user} = useAuth();

    if(!user) return <Navigate to='/login' />
  return (
    <div>
        {children}
    </div>
  )
}

export default Authentication