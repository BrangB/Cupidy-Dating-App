import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../providers/LanguageProvider'

const About = () => {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("detailInfo")) ||{})

  const {languageData} = useLanguage();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("detailInfo")))
    console.log(userData)
  }, [])
  return (
    <div className='p-6 w-full flex flex-col gap-6'>
      <motion.div
        initial={{opacity: 0 }}
          animate={{opacity: 1}}
          transition={{duration: .9}}
      >
        <h1 className='font-medium text-2xl relative'>
          {languageData.profilePage.header}
          <span className='w-40 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
        </h1>
        <div className="card w-full bg-colorbg-secondary p-6 md:p-12 mt-6 flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-12">
          {
            userData && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  transition={{duration: 1}}
                >
                  <img src={userData.profilePhoto[0].url} alt="profile" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-full' />
                </motion.div>
                  <motion.div
                    initial={{ x: '-100px', opacity: 0 }}
                    animate={{ x: 0 , opacity: 1}}
                    transition={{duration: .7}}
                  >
                    <h1 className='font-medium text-colortext-primary text-lg mt-2'>{userData.fullName}</h1>
                  </motion.div>
                  <motion.div
                    initial={{ x: '-100px', opacity: 0 }}
                    animate={{ x: 0 , opacity: 1}}
                    transition={{duration: .7}}
                  >
                    <h1 className=' text-sm mt-1'>{userData.mbti} | {userData.zodiacSign}</h1>
                  </motion.div>


              </div>
            )
          }
          <hr className='bg-gray-300 w-[150px] h-[1px] md:w-[1px] md:h-[200px]'/>
          <div className="info flex flex-col gap-4">
            <motion.div
                    initial={{ x: '-100px', opacity: 0 }}
                    animate={{ x: 0 , opacity: 1}}
                    transition={{duration: .7}}
            >
              <div className="interest flex flex-col gap-2">
              <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.interests}</h1>
              <ul className='flex flex-wrap gap-4'>
                {userData.interests.map(item => {
                  return <li className='bg-gray-100 p-2 px-3 rounded-md'>{item}</li>
                })}
              </ul>
            </div>
            </motion.div>
            <motion.div
                    initial={{ x: '-100px', opacity: 0 }}
                    animate={{ x: 0 , opacity: 1}}
                    transition={{duration: .9}}
            >
            <div className="location flex flex-col gap-2">
              <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.address}</h1>
              <p>{userData.location.locality}, {userData.location.city}, {userData.location.countryName} ({userData.location.continent})</p>
            </div>
            </motion.div>
            <motion.div
                    initial={{ x: '-100px', opacity: 0 }}
                    animate={{ x: 0 , opacity: 1}}
                    transition={{duration: 1.1}}
            >
              <div className="dateOfBirth flex flex-col gap-2">
              <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.birthDate}</h1>
              <p>{userData.birthdate}</p>
            </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About