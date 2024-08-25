import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";
import { IoHome } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { BsFillChatHeartFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { TbHeartSearch } from "react-icons/tb";
import GuideImg from '../assets/captainLogo.png'

const BottomMenu = () => {
  const { languageData } = useLanguage();
  const [openMenu, setOpenMenu] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const closeAllMenu = () => {
    setOpenMenu(false)
    setShowMatch(false)
    setShowAbout(false)
  }

  const Guide = () => {
    setOpenMenu(false)
  }

  return (
    <div className="w-full h-[80px] bg-white fixed bottom-0 flex md:hidden items-center justify-end gap-3 rounded-t-3xl p-6 shadow-2xl">
      <div
        className={`overlay w-screen h-screen bg-[#69696921] fixed top-0 left-0 ${
          openMenu ? "opacity-100 z-40 " : "opacity-0 pointer-events-none"
        } duration-500 backdrop-blur-sm`}
        onClick={closeAllMenu}
      ></div>
      <Link
        to="/dashboard"
        className="capitalize w-24 text-[#3f3f3f] h-16 rounded-full flex flex-col items-center justify-center"
      >
        <MdOutlineSpaceDashboard className="text-xl" />
        <p>{languageData.navbar.dashboard}</p>
      </Link>
      <div
        className="capitalize animate-bounce cursor-pointer w-16 h-16 z-50 rounded-full bg-btnbg-primary absolute -top-4 left-12 flex items-center justify-center"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <GoPlus
          className={`text-white text-3xl ${
            openMenu ? "rotate-45" : "rotate-0"
          } duration-200`}
        />
      </div>
      <div
        className={`navbar flex items-center justify-start flex-col ${
          openMenu ? "w-16 opacity-100 -translate-y-20" : "w-16 opacity-0 overflow-hidden -translate-y-14"
        } duration-500 gap-6 absolute left-12 z-40 bottom-12`}
      >
        <Link
          to="/setting"
          className={`capitalize ${openMenu ? 'scale-100' : 'scale-0'} duration-300 w-14 h-14 z-50 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
          onClick={closeAllMenu}
        >
          <IoSettingsSharp
            className={`text-white text-2xl ${
              openMenu ? "rotate-180" : "rotate-0"
            } duration-1000`}
          />
        </Link>
        {/* <div
          className={`capitalize ${openMenu ? 'scale-100' : 'scale-0'} duration-300 w-14 h-14 z-50 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
          onClick={() => setShowMatch(!showMatch)}
        >
          <div className={`subMenu ${showMatch ? ' opacity-100 translate-x-20' : 'overflow-hidden opacity-0 translate-x-12'} h-full rounded-3xl z-10 duration-300 flex gap-3 items-center justify-end absolute top-0 left-0`}>
            <Link
            to="/match"
            className={`capitalize w-12 h-12 z-50 ${showMatch ? 'rotate-0 scale-100' : 'rotate-180 scale-0'} duration-1000 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
            onClick={closeAllMenu}
          >
            <HiOutlineAdjustments
              className={`text-white text-xl ${
                openMenu ? "rotate-0" : "rotate-0"
              } duration-1000`}
            />
            </Link>
            <Link
            to="/match"
            className={`capitalize w-12 h-12 z-50 ${showMatch ? 'rotate-0 scale-100' : 'rotate-180 scale-0'} duration-1000 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
            onClick={closeAllMenu}
          >
            <TbHeartSearch
              className={`text-white text-xl ${
                openMenu ? "rotate-0" : "rotate-0"
              } duration-1000`}
            />
            </Link>
          </div>
          <BsSearchHeart
            className={`text-white text-2xl ${
              openMenu ? "rotate-0" : "rotate-180"
            } duration-1000 ${showMatch ? 'shake' : ''}`}
          />
        </div> */}
        <div className={`capitalize ${openMenu ? 'scale-100' : 'scale-0'} cursor-pointer duration-300 w-14 h-14 z-50 rounded-full relative bg-btnbg-primary flex items-center justify-center`} onClick={Guide}>
          <img src={GuideImg} alt="" className="w-9 h-9 rounded-full object-cover " />
        </div>
        <Link
          to="/chat"
          className={`capitalize ${openMenu ? 'scale-100' : 'scale-0'} duration-300 w-14 h-14 z-50 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
          onClick={closeAllMenu}
        >
          <BsFillChatHeartFill
            className={`text-white text-2xl ${
              openMenu ? "scale-100" : "scale-50"
            } duration-1000`}
          />
        </Link>
        <div className="w-14 h-14 relative">
          <Link
          to={'/about'}
            className={`capitalize ${openMenu ? 'scale-100' : 'scale-0'} duration-300  z-50 rounded-full w-full h-full bg-btnbg-primary flex items-center justify-center`}
            onClick={() => setShowAbout(!showAbout)}
          >
            <RiTeamFill
              className={`text-white text-2xl ${
                openMenu ? "scale-100" : "scale-50"
              } duration-1000`}
            />
          </Link>
          <div className={`subMenu ${showAbout ? ' opacity-100 translate-x-20' : 'overflow-hidden opacity-0 translate-x-12'} h-full rounded-3xl z-10 duration-300 flex gap-3 items-center justify-end absolute top-0 left-0`}>
              <a
              href="#purpose"
              className={`capitalize w-12 h-12 z-50 ${showAbout ? 'rotate-0 scale-100' : 'rotate-180 scale-0'} duration-1000 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
              onClick={closeAllMenu}
            >
              <FaGlobe
                className={`text-white text-xl ${
                  openMenu ? "rotate-0" : "rotate-0"
                } duration-1000`}
              />
              </a>
              <a
              href='#safety'
              className={`capitalize w-12 h-12 z-50 ${showAbout ? 'rotate-0 scale-100' : 'rotate-180 scale-0'} duration-1000 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
              onClick={closeAllMenu}
            >
              <MdOutlineSecurity
                className={`text-white text-xl ${
                  openMenu ? "rotate-0" : "rotate-0"
                } duration-1000`}
              />
              </a>
              <a
              href='#faq'
              className={`capitalize w-12 h-12 z-50 ${showAbout ? 'rotate-0 scale-100' : 'rotate-180 scale-0'} duration-1000 rounded-full relative bg-btnbg-primary flex items-center justify-center`}
              onClick={closeAllMenu}
            >
              <FaQuestionCircle
                className={`text-white text-xl ${
                  openMenu ? "rotate-0" : "rotate-0"
                } duration-1000`}
              />
              </a>
            </div>
        </div>
      </div>
      <Link
        to="/userProfile"
        className="capitalize w-24 text-[#3f3f3f] h-16 rounded-full flex flex-col items-center justify-center"
      >
        <FaUserAlt className="text-xl" />
        {languageData.navbar.userProfile}
      </Link>
    </div>
  );
};

export default BottomMenu;
