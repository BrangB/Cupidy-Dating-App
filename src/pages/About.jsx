import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("detailInfo")) ||{})

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("detailInfo")))
    console.log(userData)
  }, [])
  return (
    <div className='p-6'>
      {
        userData && (
          <div>
              <img src={userData.profilePhoto[0].url} alt="profile" />
              <motion.div
                initial={{ x: '-200px', opacity: 0 }}
                animate={{ x: 0 , opacity: 1}}
                transition={{duration: .7}}
              >
                <h1>{userData.fullName}</h1>

              </motion.div>
              <motion.div
                initial={{ x: '-200px', opacity: 0 }}
                animate={{ x: 0 , opacity: 1}}
                transition={{duration: .9}}
              >
              <p>{userData.location.city} - {userData.location.countryName}</p>

              </motion.div>
              <motion.div
                initial={{ x: '-200px', opacity: 0 }}
                animate={{ x: 0 , opacity: 1}}
                transition={{duration: 1.1}}
              >
              <p>MBTI - {userData.mbti}</p>

              </motion.div>


          </div>
        )
      }
    </div>
  )
}

export default About