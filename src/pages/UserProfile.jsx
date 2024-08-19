import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../providers/LanguageProvider';
import QRCode from "react-qr-code";
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import defaultImage from '../assets/zodiac_pic/aqua1.png';
import { useAuth } from '../providers/AuthProvider';
import {jwtDecode} from "jwt-decode";
import toast from 'react-hot-toast';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(null);
  const { user, setUser } = useAuth();
  const { languageData } = useLanguage();
  const [userImg, setUserImg] = useState(null);
  const backendhosturl = import.meta.env.VITE_BACKEND_HOST_URL;
  const navigate = useNavigate();

  const fetchUserData = (userId, token) => {
    fetch(`${backendhosturl}/api/v1/user/detailInfo/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Store data in localStorage and state
        localStorage.setItem("detailInfo", JSON.stringify(data));
        setUserData(data);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        toast.error("Failed to fetch user details.");
      });
  };

  const fetchPhoto = (userId, access_token) => {
    axios.get(`${backendhosturl}/api/v1/user/users/${userId}/photos`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    })
    .then(res => {
      setUserImg(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const refreshToken = async () => {
    try {
      const response = await fetch(`${backendhosturl}/api/v1/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: user.refresh_token })
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // Update user tokens
        setUser(data);
        localStorage.setItem("jwt", JSON.stringify(data));
        return data.access_token;
      } else {
        throw new Error(data.message || "Failed to refresh token.");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      toast.error("Session expired. Please log in again.");
      return null;
    }
  };

  useEffect(() => {
    const checkAndFetchUserData = async () => {
      if (!user) {
        setUser(JSON.parse(localStorage.getItem("jwt")));
      }
      if (user?.access_token) {
        try {
          const decodedToken = jwtDecode(user.access_token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token is expired, attempt to refresh
            const newAccessToken = await refreshToken();
            if (!newAccessToken) {
              return <Navigate to="/login" replace />;
            }
            fetchPhoto(decodedToken.user_id, newAccessToken)
            fetchUserData(decodedToken.user_id, newAccessToken);
          } else {
            setUserId(decodedToken.user_id);
            fetchPhoto(decodedToken.user_id, user.access_token)
            fetchUserData(decodedToken.user_id, user.access_token);
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          toast.error("Invalid token. Please log in again.");
          return <Navigate to="/login" replace />;
        }
      } else {
        return <Navigate to="/login" replace />;
      }
    };

    checkAndFetchUserData();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }


  const sharedProfile = (id) => {
    navigate(`/sharedProfile/${id}`)
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
                <img src={ userImg?.[1].url ||defaultImage} alt="coverphoto" className='rounded-3xl w-full h-full object-cover' />
                <div className="overlay w-full h-full absolute bg-black top-0 left-0 opacity-40 rounded-3xl"></div>
                <img src={ userImg?.[0].url ||defaultImage}  alt="profile" className='w-[100px] outline-black outline-1 shadow-md h-[100px] md:w-[120px] md:h-[120px] absolute -bottom-8 object-cover border-4 border-white rounded-full' />
              </div>
            </motion.div>
            <div className='flex gap-2 w-[70%] items-center justify-evenly'>
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
                <div>
                  <QRCode
                    size={300}
                    style={{ height: "auto", width: "150px" }}
                    value={`https://cupidy-dating.vercel.app/sharedProfile/${userId}`}
                    viewBox={`0 0 256 256`}
                  />
                  <button className='cursor-pointer p-2 px-3 mt-3 text-colortext-third bg-btnbg-primary' onClick={() => sharedProfile(userId)}>Public</button>
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
          <div className="post w-full">
            <h1 className='font-medium text-2xl relative'>
              Posts
              <span className='w-20 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
            </h1>
            <div className="photos w-full flex flex-wrap gap-6 mt-8">
            {
                userImg && (
                  userImg.map(img => {
                    return <img src={img.url} alt={`${img.type}`} key={img.title} className="max-w-[400px] h-[200px] object-cover" />
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

export default UserProfile;
