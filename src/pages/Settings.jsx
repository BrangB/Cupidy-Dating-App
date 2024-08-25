import React from 'react'
import { motion } from 'framer-motion';
import { useLanguage } from '../providers/LanguageProvider';
import SettingTheme from '../components/SettingTheme';
import { FiLogOut } from "react-icons/fi";
import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider';
import { useDetailInfo } from '../providers/DetailInfoProvider';

const Settings = () => {

    const {changeLanguage, languageData} = useLanguage();
    const { detailInfo, setDetailInfo } = useDetailInfo();
    const {setUser} = useAuth();

    const logout = () => {
      localStorage.removeItem("jwt")
      localStorage.removeItem("detailInfo")
      setDetailInfo({
        user_id: '',
        fullName: '',
        birthdate: '',
        gender: '',
        location: null,
        interestedIn: '',
        interests: [],
        zodiacSign: '',
        mbti: '',
        profilePhoto: [
          {title: 'photo1', url: '', type: "profile"},
          {title: 'photo2', url: '', type: "coverPhoto"},
          {title: 'photo3', url: '', type: "gallery"},
          {title: 'photo4', url: '', type: "gallery"},
          {title: 'photo5', url: '', type: "gallery"},
        ]
      })
      setUser(null)
      return <Navigate to="/login" />
    }

  return (
    <motion.div
      initial={{opacity: 0 }}
        animate={{opacity: 1}}
        transition={{duration: .9}}
        className='p-6 w-full'
    >
      <div className='card bg-colorbg-secondary p-6'>
        <h1 className='font-medium text-2xl relative'>
            {languageData.setting.header}
            <span className='w-32 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
          </h1>
          <div className="mainSetting mt-7 flex flex-col gap-8">
            <div className="language flex flex-col gap-4" id='language'>
              <h1 className='font-semibold text-colortext-secondary'>{languageData.setting.language}</h1>
              <div className="languages flex gap-6">
                <button onClick={() => changeLanguage("en")} className='p-2 px-3 flex items-center justify-center gap-2 bg-gray-100 rounded-lg'><span className='font-extrabold text-xl text-colortext-primary'>ABC</span>(English)</button>
                <button onClick={() => changeLanguage("mm")} className='p-2 px-3 flex items-center justify-center gap-2 bg-gray-100 rounded-lg'><span className='font-extrabold text-xl text-colortext-primary'>ကခဂ</span>(Burmese)</button>
              </div>
            </div>
            <div className="theme flex flex-col gap-4" id='theme'>
              <h1 className='font-semibold text-colortext-secondary'>{languageData.setting.theme}</h1>
              <SettingTheme />
            </div>
          </div>
          <button onClick={logout} id='logout' className='p-2 px-3 flex gap-2 items-center justify-center mt-8 text-colortext-third bg-btnbg-primary rounded-md duration-200'>
            <FiLogOut className='text-lg'/>
            <span>{languageData.setting.logout}</span>
          </button>
      </div>
    </motion.div>
  )
}

export default Settings