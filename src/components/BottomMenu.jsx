import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { BsFillChatHeartFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";

const BottomMenu = () => {
  const { languageData } = useLanguage();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-[80px] bg-white fixed bottom-0 flex md:hidden items-center justify-end gap-3 rounded-t-3xl p-6">
      <div
        className={`overlay w-screen h-screen bg-[#69696921] fixed top-0 left-0 ${
          openMenu ? "opacity-100 z-30 " : "opacity-0 z-0 pointer-events-none"
        } duration-500 backdrop-blur-sm`}
        onClick={() => setOpenMenu(!openMenu)}
      ></div>
      <Link
        to="/match"
        className="capitalize w-24 text-[#3f3f3f] h-16 rounded-full flex flex-col items-center justify-center"
      >
        <BsSearchHeart className="text-xl" />
        <p>{languageData.navbar.match}</p>
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
          openMenu ? "w-16 h-[320px] opacity-100" : "w-16 h-[0px] opacity-0"
        } duration-500 overflow-hidden gap-6 absolute left-12 z-40 bottom-12`}
      >
        <Link
          to="/setting"
          className="capitalize w-14 h-14 z-50 rounded-full bg-btnbg-primary flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <IoSettingsSharp
            className={`text-white text-2xl ${
              openMenu ? "rotate-180" : "rotate-0"
            } duration-1000`}
          />
        </Link>
        <Link
          to="/chat"
          className="capitalize w-14 h-14 z-50 rounded-full bg-btnbg-primary flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <BsFillChatHeartFill
            className={`text-white text-2xl ${
              openMenu ? "scale-100" : "scale-50"
            } duration-1000`}
          />
        </Link>
        <Link
          to="/about"
          className="capitalize w-14 h-14 z-50 rounded-full bg-btnbg-primary flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <RiTeamFill
            className={`text-white text-2xl ${
              openMenu ? "scale-100" : "scale-50"
            } duration-1000`}
          />
        </Link>
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
