import React from 'react'
import { Link } from 'react-router-dom'
import landing1 from '../assets/landing1.jpg'
import landing2 from '../assets/landing2.jpg'
import landing3 from '../assets/landing3.jpg'

const Landing = () => {


  return (
    <div className='bg-primary-50 px-6 w-full'>
      <nav className="navbar fixed z-30 px-12 p-5 bg-btnbg-primary text-colortext-third top-0 left-0 w-screen flex items-center justify-between duration-300">
        <div className="logo text-2xl font-extrabold">Cupidy</div>
        {/* <ul className='md:flex gap-4 hidden'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Features</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Privay & Policy</li>
        </ul> */}
        <div className="login flex gap-6 items-center justify-center">
          <Link to={'/login'}><button className='border-colorbg-secondary border p-1 px-3 rounded-sm flex items-center justify-center hover:bg-colorbg-primary hover:text-colortext-primary duration-200'>Login</button></Link>
          <Link to={'/signup'}><button className='border-colorbg-secondary border p-1 px-3 rounded-sm flex items-center justify-center hover:bg-colorbg-primary hover:text-colortext-primary duration-200'>Sign up</button></Link>
        </div>
      </nav>
      <section className="hero mt-28 md:mt-4 w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-center text-colortext-primary gap-10 p-4 md:p-12">
        <div className="left w-full  md:w-[40%] flex flex-col items-center md:items-end justify-center gap-2">
          <div className="header relative flex items-center justify-center md:justify-end">
            <h1 className='uppercase font-extrabold text-[70px] md:text-[130px]'>Cupidy</h1>
            <div className="text absolute bottom-0 md:bottom-5 tracking-[10px] md:tracking-[22px] text-md md:text-xl text-black">Meet S🖤meone</div>
          </div>
          <p className='w-full text-center md:text-right text-[#868686]'>Welcome to MatchMingle, where connections are more than just swipes—they're meaningful interactions waiting to happen. At HeartConnect, we believe that love is the most beautiful adventure life has to offer. </p>
          <Link to={'/signup'}><button className='p-3 mt-4 px-4 border-btnbg-primary border-2 font-medium duration-200 hover:bg-btnbg-primary hover:text-white'>Get Started</button></Link>
        </div>
        <div className="right w-fullmd:w-[60%] p-12 flex gap-8">
          <div className='w-[150px] h-[330px] md:w-[180px] md:h-[350px]  translate-y-14 shadow-2xl'>
            <img src={landing1} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-[150px] h-[330px] md:w-[180px] md:h-[350px]  -translate-y-6 shadow-xl'>
            <img src={landing2} className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-[150px] h-[330px] md:w-[180px] md:h-[350px]  translate-y-8 shadow-xl'>
            <img src={landing3} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing