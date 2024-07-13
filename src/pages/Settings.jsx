import React from 'react'
import { motion } from 'framer-motion';
import { useLanguage } from '../providers/LanguageProvider';
import SettingTheme from '../components/SettingTheme';
import { FiLogOut } from "react-icons/fi";

const Settings = () => {

    const {changeLanguage, languageData} = useLanguage();

    const logout = () => {
      localStorage.removeItem("user")
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
            <div className="language flex flex-col gap-4">
              <h1 className='font-semibold text-colortext-secondary'>{languageData.setting.language}</h1>
              <div className="languages flex gap-6">
                <button onClick={() => changeLanguage("en")} className='p-2 px-3 flex items-center justify-center gap-2 bg-gray-100 rounded-lg'><span className='font-extrabold text-xl text-colortext-primary'>ABC</span>(English)</button>
                <button onClick={() => changeLanguage("mm")} className='p-2 px-3 flex items-center justify-center gap-2 bg-gray-100 rounded-lg'><span className='font-extrabold text-xl text-colortext-primary'>ကခဂ</span>(Burmese)</button>
              </div>
            </div>
            <div className="theme flex flex-col gap-4">
              <h1 className='font-semibold text-colortext-secondary'>{languageData.setting.theme}</h1>
              <SettingTheme />
            </div>
          </div>
          <button onClick={logout} className='p-2 px-3 flex gap-2 items-center justify-center mt-8 text-colortext-third bg-btnbg-primary rounded-md duration-200'>
            <FiLogOut className='text-lg'/>
            <span>{languageData.setting.logout}</span>
          </button>
      </div>
    </motion.div>
  )
}

export default Settings