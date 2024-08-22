import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import defaultImage from '../assets/zodiac_pic/aqua1.png'; 
import { useAuth } from "../providers/AuthProvider";
import { useLanguage } from "../providers/LanguageProvider";
import { motion } from "framer-motion";

const SharedProfile = () => {
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({});
  const { languageData } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [userImg, setUserImg] = useState(null);
  const backendhosturl = import.meta.env.VITE_BACKEND_HOST_URL;

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    setUserId(id);

    const fetchPhoto = (userId) => {
      axios.get(`${backendhosturl}/api/v1/user/users/${userId}/photos`)
      .then(res => {
        setUserImg(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    fetchPhoto(id)

    if (id) {
      axios.get(`${backendhosturl}/api/v1/user/detailInfo/${id}`)
        .then(response => {
          setUserData(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-0 md:p-6 w-full flex flex-col items-center gap-6 pb-36 md:pb-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="w-full md:w-[70%]"
      >
        <h1 className='font-bold text-2xl md:text-3xl relative translate-x-4 my-6 md:my-0'>
          {languageData.profilePage.header}
          <span className='w-32 md:w-40 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
        </h1>
        <div className="card w-full bg-colorbg-secondary p-0 md:p-12 mt-6 flex flex-wrap flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-6 md:gap-12">
          <div className="primary w-full flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="profile relative w-full md:w-[250px] h-[200px] md:rounded-3xl">
                <img src={ userImg?.[1].url ||defaultImage} alt="coverphoto" className='md:rounded-3xl w-full h-full object-cover' />
                <div className="overlay w-full h-full absolute bg-black top-0 left-0 opacity-40 md:rounded-3xl"></div>
                <img src={ userImg?.[0].url ||defaultImage} alt="profile" className='w-[120px] h-[120px] outline-black outline-1 shadow-md  md:w-[120px] md:h-[120px] absolute left-7 -bottom-8 object-cover border-4 border-white rounded-full' />
              </div>
            </motion.div>
            <div className='flex flex-col mt-3 md:flex-row gap-6 md:gap-2 w-full p-8 md:p-6 md:w-[70%] items-start md:items-center justify-evenly'>
              <motion.div
                initial={{ x: '-100px', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className='font-bold text-black text-2xl mb-6'>{userData?.full_name}</h1>
                <p className='text-md mt-1'>MBTI (<span className='text-colortext-primary font-bold mx-1'>{userData?.mbti}</span>)</p>
                <p className='text-md mt-1'>Zodiac Sign (<span className='text-colortext-primary font-bold mx-1'>{userData?.zodiac_sign}</span>)</p>
              </motion.div>
              <hr className='bg-gray-300 w-[150px] h-[1px] md:w-[1px] md:h-[200px]' />
              {userId && (
                <div className="w-[100px] md:w-[150px]">
                  <QRCode
                    size={300}
                    style={{ height: "auto", width: "100%" }}
                    value={`https://cupidy-dating.vercel.app/sharedProfile/${userId}`}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="line h-[4px] md:mt-2 bg-[#ebebeb] w-full"></div>
          <div className="info w-full p-4 flex flex-col gap-2 md:gap-6">
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
                <p>{userData?.city}, {userData?.locality}, {userData?.country_name}</p>
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
          <div className="post w-full p-4">
            <h1 className='font-medium text-2xl relative'>
              Posts
              <span className='w-20 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
            </h1>
            <div className="photos w-full flex flex-wrap gap-6 mt-8">
              {
                userImg && (
                  userImg.map(img => {
                    return <img src={img.url} alt={`${img.type}`} className="max-w-[400px] h-[200px] object-cover" />
                  })
                )
              }
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SharedProfile;
