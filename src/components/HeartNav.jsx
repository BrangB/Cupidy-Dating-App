import React from 'react'
import { useLocation } from 'react-router-dom'
import heart from '../assets/heart.png'

const HeartNav = ({ name }) => {
  const location = useLocation();
  const isActive = location.pathname === name;

  return (
    <div className={`w-4 h-4 absolute right-6 duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <img src={heart} alt="heart" className='w-full h-full object-cover' />
    </div>
  )
}

export default HeartNav
