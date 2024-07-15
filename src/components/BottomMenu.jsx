import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const BottomMenu = () => {
  const { languageData } = useLanguage();

  return (
    <div className="w-full h-[80px] bg-white fixed bottom-0 flex items-center justify-between gap-3 rounded-t-3xl p-6">
      <Link to="/setting" className="capitalize w-24 text-[#3f3f3f] h-16 rounded-full flex flex-col items-center justify-center" >
        <IoSettingsSharp className=" text-xl"/>
        <p>{languageData.navbar.setting}</p>
      </Link>
      <Link to="/dashboard" className="capitalize animate-bounce w-16 h-16 rounded-full bg-btnbg-primary absolute -top-6 left-[43%] flex items-center justify-center">
        <IoHome className="text-white text-2xl"/>
      </Link>
      <Link to="/userProfile" className="capitalize w-24 text-[#3f3f3f] h-16 rounded-full flex flex-col items-center justify-center">
        <FaUserAlt className=" text-xl"/>
        {languageData.navbar.userProfile}
      </Link>
    </div>
  );
};

export default BottomMenu;
