import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Link, Navigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import SlideLeftMotion from '../animations/SlideLeftMotion';
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import useFetch from '../hooks/useFetch';
import BtnLogin from '../animations/animateIcons/BtnLogin';

const Login = () => {

  const {user, setUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = () => {
    // localStorage.setItem("user" ,JSON.stringify({user: "Brang"}))
    // setUser(JSON.parse(localStorage.getItem("user")))
    // return <Navigate to="/dashboard" />
    setLoading(true)
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      });
  }


  if(user) return <Navigate to="/dashboard" />
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <SlideLeftMotion>
        <div className='card w-[700px] h-[470px] bg-white shadow-lg flex items-center justify-center rounded-2xl overflow-hidden'>
          <div className="left w-7/12 h-full flex items-center justify-center p-6">
            <div className="form flex flex-col w-full p-10 items-center justify-center gap-6">
              <h1 className='uppercase text-primary-800 text-2xl font-semibold'>Sign In</h1>
              <div className="email flex flex-col gap-2 w-full text-primary-800">
                <label htmlFor="email" className='flex gap-2 items-center'><MdOutlineEmail /> Email</label>
                <input type="email" id='email' placeholder='Enter your email' className='border-l-4 bg-gray-100 border-primary-400 w-full h-12 p-3 rounded-sm outline-none'/>
              </div>
              <div className="password flex flex-col gap-2 w-full text-primary-800">
                <label htmlFor="password" className='flex gap-2 items-center'><MdLockOutline /> Password</label>
                <div className="input relative">
                  <input type={showPassword ? 'text' : "password"} id='password' placeholder='Enter your password' className='border-l-4 bg-gray-100 border-primary-400 w-full h-12 p-3 rounded-sm outline-none'/>
                  {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>}
                </div>
                <p className='text-sm text-primary-600 font-medium cursor-pointer'>Forgot password?</p>
              </div>
              <button className='uppercase bg-primary-400 font-semibold hover:bg-primary-500 duration-200 flex items-center justify-center w-full h-12 text-primary-50' onClick={login}>{loading ? <BtnLogin />: 'Sign In'}</button>
            </div>
          </div>
          <div className="right w-6/12 bg-primary-400 h-full rounded-tl-[150px] rounded-bl-[100px] flex flex-col items-center justify-center p-6 gap-3">
            <h1 className=' font-bold text-xl text-primary-50'>Hello, Friends</h1>
            <p className='text-primary-50 flex items-center justify-center text-center text-sm'>Create an account and start your journey
            to find love.</p>
            <Link to='/signup' ><button className='uppercase w-28 h-10 border rounded-md border-primary-50 text-primary-50 mt-6 hover:bg-primary-50 hover:text-primary-900 duration-200 font-medium'>Sign Up</button></Link>
          </div>
        </div>
      </SlideLeftMotion>
    </div>
  )
}

export default Login