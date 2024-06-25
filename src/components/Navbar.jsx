import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../providers/LanguageProvider'

const Navbar = () => {

  const {languageData} = useLanguage();

  return (
    <div className='w-[200px] h-full p-6 flex flex-col gap-3 items-center bg-primary-300 duration-300'>
        <Link to="/dashboard" className='capitalize'>{languageData.navbar.dashboard}</Link>
        <Link to="/about" className='capitalize'>{languageData.navbar.about}</Link>
        <Link to="/setting" className='capitalize'>{languageData.navbar.setting}</Link>
        <Link to="/" className='capitalize'>{languageData.navbar.landing}</Link>
    </div>
  )
}

export default Navbar