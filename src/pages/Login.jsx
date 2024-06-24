import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const Login = () => {

  const {user, setUser} = useAuth();

  const login = () => {
    localStorage.setItem("user" ,JSON.stringify({user: "Brang"}))
    setUser(JSON.parse(localStorage.getItem("user")))
    return <Navigate to="/dashboard" />
  }

  if(user) return <Navigate to="/dashboard" />
  return (
    <div onClick={login} className='cursor-pointer'>Login</div>
  )
}

export default Login