import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../providers/LanguageProvider';
import { IoMdSettings } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { BsSearchHeart } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { TbBorderCornerPill } from "react-icons/tb";

const Navbar = () => {
  const {languageData} = useLanguage();
  const [showMatch, setShowMatch] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className='min-w-[200px] bg-colorbg-third text-colortext-third h-full hidden md:flex flex-col gap-3 items-center justify-between bg-primary-300 duration-300'>
      <div className="mainLink w-full flex flex-col items-center justify-center py-6">
        <Link className='w-full flex flex-col items-center justify-start text-white text-xl font-bold italic'>
          <p><span className='text-3xl'>C</span>upidy</p>
          <hr className='w-24 h-1 m-4'/>
        </Link>
        <Link to="/dashboard" className='capitalize w-full flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <MdOutlineSpaceDashboard className='text-lg'/>
          {languageData.navbar.dashboard}
        </Link>
        <Link to="/chat" className='capitalize w-full flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <BsChatHeart className='text-lg'/>
          {languageData.navbar.chat}
        </Link>
        <div className="match w-full duration-300">
          <div className='flex w-full gap-2 items-center justify-start'>
            <div onClick={() => setShowMatch(!showMatch)} className='w-full px-8 py-3 cursor-pointer flex gap-2 items-center justify-start hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
              <BsSearchHeart className='text-lg'/>
              Match
              <IoIosArrowUp className={`font-bold text-lg ${showMatch ? 'rotate-180' : 'rotate-0'} duration-300`}/>
            </div>
          </div>
          <div className={`subfolder overflow-hidden mb-2 translate-x-10 ${showMatch ? 'h-[55px]' : 'h-0'} duration-300 flex flex-col items-start justify-center gap-2`}>
            <Link to={'/match'} className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showMatch ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Auto
            </Link>
            <Link to={'/match'} className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showMatch ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Customize
            </Link>
          </div>
        </div>
        <div className="about w-full duration-300">
          <Link to={'/about'} className='flex w-full gap-2 items-center justify-start'>
            <div onClick={() => setShowAbout(!showAbout)} className='capitalize w-full px-8 py-3 cursor-pointer flex gap-2 items-center justify-start hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
              <RiTeamFill className='text-lg'/>
              {languageData.navbar.about}
              <IoIosArrowUp className={`font-bold text-lg ${showAbout ? 'rotate-180' : 'rotate-0'} duration-300`}/>
            </div>
          </Link>
          <div className={`subfolder overflow-hidden mb-2 translate-x-10 ${showAbout ? 'h-[180px]' : 'h-0'} duration-300 flex flex-col items-start justify-center gap-2`}>
            <a href='#purpose' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              App Purpose
            </a>
            <a href='#planning' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Planning
            </a>
            <a href='#safety' className='flex cursor-pointer gap-2 dotted'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Safety and Privacy
            </a>
            <a href='#team' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Team
            </a>
            <a href='#faq' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              FAQ
            </a>
            <a href='#contact' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              Contact
            </a>
          </div>
        </div>
        <Link to="/userProfile" className='capitalize w-full flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <CgProfile className='text-lg'/>
          {languageData.navbar.userProfile}
        </Link>
      </div>
      <div className='fixed bottom-0 p-4 bg-btnbg-primary border-t border-t-btnbg-hover'>
        <Link to="/setting" className='capitalize flex p-2 px-4 bg-white text-colortext-primary justify-center items-center gap-3 rounded-sm'>
            <IoMdSettings className='flex items-center justify-center'/>
            {languageData.navbar.setting}
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
