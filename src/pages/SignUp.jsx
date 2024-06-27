import React, {useRef, useState} from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Link, Navigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import SlideLeftMotion from '../animations/loginAndSignup/SlideLeftMotion';
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import BtnLogin from '../animations/animateIcons/BtnLogin';
import axios from 'axios';


const SignUp = () => {

    const {user, setUser} = useAuth();
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [inputData, setInputData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      allowPrivacyPolicy: false
    })

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSignup = () => {
      // localStorage.setItem("user" ,JSON.stringify({user: "Brang"}))
      // setUser(JSON.parse(localStorage.getItem("user")))
      // return <Navigate to="/dashboard" />
      if (inputData.email === '') {
        toast.error('Please enter your email!');
        emailRef.current && emailRef.current.focus();
      } else if (inputData.password === '') {
        toast.error('Please enter the password!');
        passwordRef.current && passwordRef.current.focus();
      } else if (inputData.confirmPassword === '') {
        toast.error('Please confirm your password');
        confirmPasswordRef.current && confirmPasswordRef.current.focus();
      } else if (inputData.password.length < 8){
        toast.error("Your password should have at least 8 characters")
      } else if (inputData.password !== inputData.confirmPassword) {
        toast.error('Passwords do not match!');
        confirmPasswordRef.current && confirmPasswordRef.current.focus();
      } else if (!inputData.allowPrivacyPolicy){
        toast.error('You do not accept the privacy policy');
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
                console.log({
                  email: inputData.email,
                  password: inputData.password,
                  allowPrivacyPolicy: inputData.allowPrivacyPolicy
                })
                return 'Login successfully! 🎉🎉';
              },
            error: (err) => {
              setLoading(false);
              setError(err.message || 'LogIn Fail! 😑');
              return 'LogIn Fail! 😑';
            }
          }
        );
      }
    }

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
        <div className='card w-[700px] h-[530px] bg-white flex items-center justify-center rounded-2xl overflow-hidden'>
          <div className="left w-7/12 h-full flex items-center justify-center p-4">
            <div className="form flex flex-col w-full p-10 items-center justify-center gap-6">
              <h1 className='uppercase text-primary-800 text-xl font-semibold'>Sign Up</h1>
              <div className="inputs flex flex-col gap-4 w-full">
                <div className="email flex flex-col gap-2 w-full text-primary-800">
                  <label htmlFor="email" className='flex gap-2 items-center'><MdOutlineEmail /> Email</label>
                  <input type="email" id='email' placeholder='Enter your email' className='border-l-4 bg-gray-100 border-primary-400 w-full h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({...inputData, email: e.target.value})}/>
                </div>
                <div className="password flex flex-col gap-2 w-full text-primary-800">
                  <label htmlFor="password" className='flex gap-2 items-center'><MdLockOutline /> Password</label>
                  <div className="input relative">
                    <input type={showPassword ? 'text' : "password"} id='password' placeholder='Enter your password' className='border-l-4 bg-gray-100 border-primary-400 w-full h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({...inputData, password: e.target.value})}/>
                    {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                  </div>
                </div>
                <div className="confirmPassword flex flex-col gap-2 w-full text-primary-800">
                  <label htmlFor="confirmPassword" className='flex gap-2 items-center'><MdLockOutline /> Confirm Password</label>
                  <div className="input relative">
                    <input type={showPassword ? 'text' : "password"} id='confirmPassword' placeholder='Confirm your password' className='border-l-4 bg-gray-100 border-primary-400 w-full h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({...inputData, confirmPassword: e.target.value})}/>
                    {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)}/> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                  </div>
                </div>
                <div className="privacy flex gap-4 text-sm items-center">
                  <input type="checkbox" className='accent-primary-400' onChange={e => setInputData({...inputData, allowPrivacyPolicy: e.target.checked})}/>
                  <p className='text-primary-950'>I accept All <Link to='/policy' className='text-primary-700 font-semibold cursor-pointer'>Term of Service</Link> & <Link to='/policy' className='text-primary-700 font-semibold cursor-pointer'>Privacy Policy</Link></p>
                </div>
              </div>
              <button className='uppercase bg-primary-400 font-semibold hover:bg-primary-500 duration-200 flex items-center justify-center w-full h-12 text-primary-50' onClick={handleSignup}>{loading ? <BtnLogin /> : "Register"}</button>
            </div>
          </div>
          <div className="right w-6/12 bg-primary-400 h-full rounded-tl-[150px] rounded-bl-[100px] flex flex-col items-center justify-center p-6 gap-3">
            <h1 className=' font-bold text-2xl text-primary-50'>Welcome to Cupidy</h1>
            <p className='text-primary-50 flex items-center justify-center text-center text-md'>Love begins with a single step 
            – take yours today.</p>
            <Link to='/login' ><button className='uppercase w-28 h-10 border rounded-md border-primary-50 text-primary-50 mt-6 hover:bg-primary-50 hover:text-primary-900 duration-200 font-medium'>Sign In</button></Link>
          </div>
        </div>
      </SlideLeftMotion>
    </div>
  )
}

export default SignUp
