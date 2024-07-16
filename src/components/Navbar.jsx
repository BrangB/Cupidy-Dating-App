import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../providers/LanguageProvider'
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {

  const {languageData} = useLanguage();

  return (
    <div className='w-[200px] bg-colorbg-third text-colortext-third h-full p-6 hidden md:flex flex-col gap-3 items-center justify-between bg-primary-300 duration-300'>
        <div className="mainLink flex flex-col gap-4 items-center justify-center">
          <Link to="/dashboard" className='capitalize'>{languageData.navbar.dashboard}</Link>
          <Link to="/chat" className='capitalize'>{languageData.navbar.chat}</Link>
          <Link to="/match" className='capitalize'>{languageData.navbar.match}</Link>
          <Link to="/about" className='capitalize'>{languageData.navbar.about}</Link>
          <Link to="/userProfile" className='capitalize'>{languageData.navbar.userProfile}</Link>
        </div>
        <Link to="/setting" className='capitalize w-full flex p-2 bg-white text-colortext-primary justify-center items-center gap-3 rounded-sm'>
          <IoMdSettings  className='flex items-center justify-center'/>
          {languageData.navbar.setting}
        </Link>
    </div>
  )
}

export default Navbar