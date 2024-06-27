import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Link, Navigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import SlideLeftMotion from '../animations/loginAndSignup/SlideLeftMotion';
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import useFetch from '../hooks/useFetch';
import BtnLogin from '../animations/animateIcons/BtnLogin';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

  const {user, setUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false)
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  })
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleLogin = () => {

    if(inputData.email == ""){
      toast.error("Please enter your email!")
      emailRef.current && emailRef.current.focus()
    }else{
      if(inputData.password == ""){
        toast.error("Please enter the password!")
        passwordRef.current && passwordRef.current.focus()
      }else{
        setLoading(true);
        toast.promise(
          fetchData(),
          {
            loading: 'Loading...',
            success: 
              ({ info }) => {
                setData(info);
                setError(null);
                setLoading(false);
                return 'Login successfully! 🎉🎉';
              },
            error: (err) => {
              setLoading(false);
              setError(err.message || 'LogIn Fail! 😑');
              return 'Could not save.';
            }
          }
        );
      }
    }
  };
  
  const fetchData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      return { info: res.data };
    } catch (err) {
      throw err;
    }
  };
  

  if(user) return <Navigate to="/dashboard" />
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <SlideLeftMotion>
        <div className='card w-[100%] h-[480px] sm:w-[80%] lg:w-[700px] lg:h-[470px] bg-white shadow-lg flex flex-col md:flex-row items-center justify-center rounded-tl-[50px] rounded-tr-[50px] md:rounded-[50px] overflow-hidden'>
          <div className="left w-full md:w-7/12 h-full flex items-center justify-center p-6">
            <div className="form flex flex-col w-full px-10 md:p-10 items-center justify-center gap-8 md:gap-6">
              <h1 className='hidden md:flex uppercase text-primary-800 text-2xl font-semibold'>Sign In</h1>
              <div className="email flex flex-col gap-3 md:gap-2 w-full text-primary-800">
                <label htmlFor="email" className='flex text-lg gap-2 items-center'><MdOutlineEmail /> Email</label>
                <input type="email" id='email' ref={emailRef} placeholder='Enter your email' className='border-l-4 bg-gray-100 border-primary-400 w-full h-14 md:h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({...inputData, email: e.target.value})}/>
              </div>
              <div className="password flex flex-col gap-3 md:gap-2 w-full text-primary-800">
                <label htmlFor="password" className='flex text-lg gap-2 items-center'><MdLockOutline /> Password</label>
                <div className="input relative">
                  <input type={showPassword ? 'text' : "password"} id='password' ref={passwordRef} placeholder='Enter your password' className='border-l-4 bg-gray-100 border-primary-400 w-full h-14 md:h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({...inputData, password: e.target.value})}/>
                  {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>}
                </div>
                <p className='text-sm text-primary-600 font-medium cursor-pointer'>Forgot password?</p>
              </div>
              <button className='uppercase bg-primary-400 font-semibold hover:bg-primary-500 duration-200 flex items-center justify-center w-full h-12 text-primary-50' onClick={handleLogin}>{loading ? <BtnLogin />: 'Sign In'}</button>
              <p className='block md:hidden'>If you don't have an account. <Link to={'/signup'} className='font-semibold text-primary-600'>Sign Up</Link></p>
            </div>
          </div>
          <div className="hidden right w-6/12 bg-primary-400 h-full rounded-tl-[150px] rounded-bl-[100px] md:flex flex-col items-center justify-center p-6 gap-3">
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