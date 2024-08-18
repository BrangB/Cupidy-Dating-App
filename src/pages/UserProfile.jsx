import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../providers/LanguageProvider';
import QRCode from "react-qr-code";
import { useLocation, Navigate } from 'react-router-dom';
import defaultImage from '../assets/zodiac_pic/aqua1.png';
import { useAuth } from '../providers/AuthProvider';
import {jwtDecode} from "jwt-decode";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(null);
  const { user } = useAuth();
  const { languageData } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const storedDetailInfo = localStorage.getItem("detailInfo");
    if (storedDetailInfo) {
      setUserData(JSON.parse(storedDetailInfo));
    }

    if (user.access_token) {
      try {
        const decodedToken = jwtDecode(user.access_token);
        console.log(decodedToken)
        setUserId(decodedToken.user_id);
      } catch (error) {
        console.error("Error decoding token:", error);
        // Optionally handle token errors here, like redirecting to login
      }
    } else {
      // Redirect to login if no access token
      <Navigate to="/login" replace />;
    }
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className='p-6 w-full flex flex-col gap-6 pb-36 md:pb-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className='font-medium text-2xl relative'>
          {languageData.profilePage.header}
          <span className='w-40 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
        </h1>
        <div className="card w-full bg-colorbg-secondary p-6 md:p-12 mt-6 flex flex-wrap flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-12">
          <div className="primary w-full flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="profile relative w-[250px] h-[200px] rounded-3xl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97hU43u6vLrdfW4Vlrjd4HLzJvrehmCIa7g&s" alt="coverphoto" className='rounded-3xl w-full h-full object-cover' />
                <div className="overlay w-full h-full absolute bg-black top-0 left-0 opacity-40 rounded-3xl"></div>
                <img src={defaultImage} alt="profile" className='w-[100px] outline-black outline-1 shadow-md h-[100px] md:w-[120px] md:h-[120px] absolute -bottom-8 object-cover border-4 border-white rounded-full' />
              </div>
            </motion.div>
            <div className='flex gap-2 w-[70%] items-center justify-evenly'>
              <motion.div
                initial={{ x: '-100px', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className='font-bold text-black text-2xl mb-6'>{userData?.fullName}</h1>
                <p className='text-md mt-1'>MBTI (<span className='text-colortext-primary font-bold mx-1'>{userData?.mbti}</span>)</p>
                <p className='text-md mt-1'>Zodiac Sign (<span className='text-colortext-primary font-bold mx-1'>{userData?.zodiacSign}</span>)</p>
              </motion.div>
              <hr className='bg-gray-300 w-[150px] h-[1px] md:w-[1px] md:h-[200px]' />
              {userId && (
                <div>
                  <QRCode
                    size={300}
                    style={{ height: "auto", width: "150px" }}
                    value={`https://cupidy-dating.vercel.app/sharedProfile/${userId}`}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="line h-[4px] mt-2 bg-[#ebebeb] w-full"></div>
          <div className="info w-full flex flex-col gap-6">
            <motion.div
              initial={{ x: '-100px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="interest flex flex-col gap-2">
                <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.interests}</h1>
                <ul className='flex flex-wrap gap-4'>
                  {userData?.interests?.map(item => (
                    <li className='bg-gray-100 p-2 px-3 rounded-md' key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '-100px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="location flex flex-col gap-2">
                <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.address}</h1>
                <p>{userData?.location?.locality}, {userData?.location?.city}, {userData?.location?.countryName} ({userData?.location?.continent})</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '-100px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <div className="dateOfBirth flex flex-col gap-2">
                <h1 className='font-semibold text-colortext-primary'>{languageData.profilePage.birthDate}</h1>
                <p>{userData?.birthdate}</p>
              </div>
            </motion.div>
          </div>
          <div className="post w-full">
            <h1 className='font-medium text-2xl relative'>
              Posts
              <span className='w-20 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
            </h1>
            <div className="photos w-full flex flex-wrap gap-6 mt-8">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLScu8m2U_VpfhRObW3K6CFdg-3D-zLKYAvA&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4uvQDT2jAXQmN5PPym5Yk2w3qZcZQepPPA&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMAfAvJ5aF-Y0aeM-i5s4-HV7lHd0hsbNfg&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA68s3Y6sFOIWUFXpi0Pi4V-QEXWNnRQOAYQ&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld_NpFJqZmToc2vWRNvBil5Z9nZs3ExxEHQ&s" alt="" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErGLnMqhL_gHukxDnj8eQ_jlbSUWz3mrXzw&s" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
