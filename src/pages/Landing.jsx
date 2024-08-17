import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {


  return (
    <div className='bg-primary-50 px-6'>
      <nav className="navbar fixed px-8 p-5 bg-btnbg-primary text-colortext-third top-0 left-0 w-screen flex items-center justify-between duration-300">
        <div className="logo text-xl font-extrabold">Cupidy</div>
        <ul className='md:flex gap-4 hidden'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Features</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Privay & Policy</li>
        </ul>
        <div className="login flex gap-6 items-center justify-center">
          <Link to={'/login'}><button className='border-colorbg-secondary border p-1 px-3 rounded-sm flex items-center justify-center hover:bg-colorbg-primary hover:text-colortext-primary duration-200'>Login</button></Link>
          <Link to={'/signup'}><button className='border-colorbg-secondary border p-1 px-3 rounded-sm flex items-center justify-center hover:bg-colorbg-primary hover:text-colortext-primary duration-200'>Sign up</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Landing