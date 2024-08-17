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
import HeartNav from './HeartNav';

const Navbar = () => {
  const {languageData} = useLanguage();
  const [showMatch, setShowMatch] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className='min-w-[210px] bg-colorbg-third text-colortext-third h-full hidden md:flex flex-col gap-3 items-center justify-between bg-primary-300 duration-300'>
      <div className="mainLink w-full flex flex-col items-center justify-center py-6">
        <Link className='w-full flex flex-col items-center justify-start text-white text-xl font-bold italic'>
          <p><span className='text-3xl'>C</span>upidy</p>
          <hr className='w-24 h-1 m-4'/>
        </Link>
        <Link to="/dashboard" className='capitalize relative w-full flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <MdOutlineSpaceDashboard className='text-lg'/>
          {languageData.navbar.dashboard}
          <HeartNav name={"/dashboard"}/>
        </Link>
        <Link to="/chat" className='capitalize w-full relative flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <BsChatHeart className='text-lg'/>
          {languageData.navbar.chat}
          <HeartNav name={"/chat"}/>
        </Link>
        <div className="match w-full duration-300">
          <div className='flex w-full gap-2 items-center justify-start'>
            <div onClick={() => setShowMatch(!showMatch)} className='w-full relative px-8 py-3 cursor-pointer flex gap-2 items-center justify-start hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
              <BsSearchHeart className='text-lg'/>
              {languageData.navbar.match}
              <IoIosArrowUp className={`font-bold text-lg ${showMatch ? 'rotate-0' : 'rotate-180'} duration-300`}/>
              <HeartNav name={"/match"}/>
            </div>
          </div>
          <div className={`subfolder overflow-hidden mb-2 translate-x-10 ${showMatch ? 'h-[55px]' : 'h-0'} duration-300 flex flex-col items-start justify-center gap-2`}>
            <Link to={'/match'} className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showMatch ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.match.auto}
            </Link>
            <Link to={'/match/customize'} className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showMatch ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.match.customize}
            </Link>
          </div>
        </div>
        <div className="about w-full duration-300">
          <Link to={'/about'} className='flex w-full gap-2 items-center justify-start'>
              <div onClick={() => setShowAbout(!showAbout)} className='capitalize relative w-full px-8 py-3 cursor-pointer flex gap-2 items-center justify-start hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
                <RiTeamFill className='text-lg'/>
                {languageData.navbar.about}
                <IoIosArrowUp className={`font-bold text-lg ${showAbout ? 'rotate-0' : 'rotate-180'} duration-300`}/>
                <HeartNav name={"/about"}/>
              </div>
          </Link>
          <div className={`subfolder overflow-hidden w-[80%] translate-x-10 ${showAbout ? 'h-[190px]' : 'h-0'} duration-300 flex flex-col items-start justify-start gap-2`}>
            <a href='#purpose' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.purpose}
            </a>
            <a href='#planning' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.planning}
            </a>
            <a href='#safety' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.safety}
            </a>
            <a href='#team' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.team}
            </a>
            <a href='#faq' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.faqs}
            </a>
            <a href='#contact' className='flex cursor-pointer gap-2'>
              <TbBorderCornerPill className={`${showAbout ? '-rotate-90' : 'rotate-0'} duration-300`}/>
              {languageData.navbar.subNav.about.contact}
            </a>
          </div>
        </div>
        <Link to="/userProfile" className='capitalize relative w-full flex gap-2 items-center justify-start px-8 py-3 hover:bg-[#ffffffc9] hover:text-colortext-primary duration-300 overflow-hidden text-ellipsis whitespace-nowrap'>
          <CgProfile className='text-lg'/>
          {languageData.navbar.userProfile}
          <HeartNav name={"/userProfile"}/>
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