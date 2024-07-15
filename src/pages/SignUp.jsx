import React, { useRef, useState } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import SlideLeftMotion from '../animations/loginAndSignup/SlideLeftMotion';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import BtnLogin from '../animations/animateIcons/BtnLogin';
import axios from 'axios';

const SignUp = () => {
  const { user, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    allowPrivacyPolicy: false
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const navigate = useNavigate();

  const handleSignup = () => {
    if (inputData.email === '') {
      toast.error('Please enter your email!');
      emailRef.current && emailRef.current.focus();
    } else if (inputData.password === '') {
      toast.error('Please enter the password!');
      passwordRef.current && passwordRef.current.focus();
    } else if (inputData.confirmPassword === '') {
      toast.error('Please confirm your password');
      confirmPasswordRef.current && confirmPasswordRef.current.focus();
    } else if (inputData.password.length < 8) {
      toast.error("Your password should have at least 8 characters");
    } else if (inputData.password !== inputData.confirmPassword) {
      toast.error('Passwords do not match!');
      confirmPasswordRef.current && confirmPasswordRef.current.focus();
    } else if (!inputData.allowPrivacyPolicy) {
      toast.error('You do not accept the privacy policy');
    } else {
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
              localStorage.setItem("user", JSON.stringify({ user: "Brang" }))
              setUser(JSON.parse(localStorage.getItem("user")))
              navigate('/collect-data/welcome')
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

  if (user) return <Navigate to="/dashboard" />

  return (
      <SlideLeftMotion>
        <div className='card w-full md:w-[700px] h-full md:h-[560px] bg-colorbg-secondary flex flex-col md:flex-row items-center justify-center rounded-none md:rounded-[50px] overflow-hidden'>
          <div className="header  uppercase flex md:hidden text-colortext-secondary font-bold text-[30px] flex-col items-center justify-center gap-6">
            <div className="logo bg-colorbg-third text-colortext-third flex rounded-full w-[80px] h-[80px] items-center justify-center font-bold italic text-[60px]">C</div>
            <h1 >Sign Up</h1>
          </div>
          <div className="left w-full md:w-7/12 h-auto md:h-full flex items-center justify-center p-4">
            <div className="form flex flex-col w-full h-full p-8  items-center justify-center gap-6">
              <h1 className='uppercase hidden md:flex text-colortext-primary text-xl font-semibold'>Sign Up</h1>
              <div className="inputs flex flex-col gap-6 md:gap-4 w-full text-colortext-secondary">
                <div className="email flex flex-col gap-2 md:gap-4 w-full ">
                  <label htmlFor="email" className='flex gap-2 items-center text-lg '><MdOutlineEmail /> Email</label>
                  <input type="email" id='email' placeholder='Enter your email' className='border-l-4 bg-gray-100 border-btnbg-primary w-full h-14 md:h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                </div>
                <div className="password flex flex-col gap-2 w-full ">
                  <label htmlFor="password" className='flex gap-2 items-center text-lg'><MdLockOutline /> Password</label>
                  <div className="input relative">
                    <input type={showPassword ? 'text' : "password"} id='password' placeholder='Enter your password' className='border-l-4 bg-gray-100 border-btnbg-primary w-full h-14 md:h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
                    {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                  </div>
                </div>
                <div className="confirmPassword flex flex-col gap-2 w-full">
                  <label htmlFor="confirmPassword" className='flex gap-2 items-center text-lg'><MdLockOutline /> Confirm Password</label>
                  <div className="input relative">
                    <input type={showPassword ? 'text' : "password"} id='confirmPassword' placeholder='Confirm your password' className='border-l-4 bg-gray-100 border-btnbg-primary w-full h-14 md:h-12 p-3 rounded-sm outline-none' onChange={(e) => setInputData({ ...inputData, confirmPassword: e.target.value })} />
                    {showPassword ? <FaEye className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <FaEyeSlash className='absolute top-4 right-3 text-lg cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                  </div>
                </div>
                <div className="privacy flex gap-4 text-sm items-center">
                  <input type="checkbox" className='accent-btnbg-primary' onChange={e => setInputData({ ...inputData, allowPrivacyPolicy: e.target.checked })} />
                  <p className='text-colortext-secondary'>I accept All <Link to='/policy' className='text-colortext-primary hover:underline font-semibold cursor-pointer'>Term of Service</Link> & <Link to='/policy' className='text-colortext-primary hover:underline font-semibold cursor-pointer'>Privacy Policy</Link></p>
                </div>
              </div>
              <button className='uppercase bg-btnbg-primary font-semibold hover:bg-btnbg-hover duration-200 flex items-center justify-center w-full h-12 text-secondary' onClick={handleSignup}>{loading ? <BtnLogin /> : "Register"}</button>
              <p className='block md:hidden'>Already have an account? <Link to={'/login'} className='font-semibold text-colortext-primary'>Log In</Link></p>
            </div>
          </div>
          <div className="right w-6/12 bg-colorbg-third duration-300 h-full rounded-tl-[150px] rounded-bl-[100px] hidden md:flex flex-col items-center justify-center p-6 gap-3">
            <h1 className='font-bold text-2xl text-colortext-third'>Welcome to Cupidy</h1>
            <p className='text-colortext-third flex items-center justify-center text-center text-md'>Love begins with a single step – take yours today.</p>
            <Link to='/login'><button className='uppercase w-28 h-10 border rounded-md border-colorbg-primary text-colorbg-primary mt-6 hover:bg-colorbg-primary hover:text-colortext-primary duration-200 font-medium'>Sign In</button></Link>
          </div>
        </div>
      </SlideLeftMotion>
  );
}

export default SignUp;
