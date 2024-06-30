import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import { CiViewTable } from "react-icons/ci";

const Landing = () => {
  return (
    <div className='bg-primary-50'>
      <Link to='/dashboard'><div className="box w-[200px] h-[200px] bg-primary-400">Get Started</div></Link>
      <ThemeToggle />
      <nav className='bg-colorbg-third p-3 w-screen h-12 duration-300'>Hi <CiViewTable/></nav>
    </div>
  )
}

export default Landing