import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='bg-primary-50'>
      <Link to='/dashboard'><div className="box w-[200px] h-[200px] bg-primary-400">Get Started</div></Link>
    </div>
  )
}

export default Landing