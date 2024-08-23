import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import PapperArrow from '../animations/animateIcons/PaperArrow';
import { useAuth } from '../providers/AuthProvider';
import {jwtDecode} from 'jwt-decode';
import { FaHeart } from "react-icons/fa";
import loveConnnection from '../assets/loveconnection.png'


const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [userId, setUserId] = useState(null);
  const { user, setUser } = useAuth();
  const backendhosturl = import.meta.env.VITE_BACKEND_HOST_URL;


  useEffect(() => {
    // If user is available in the context, decode the token to get user ID
    if (user) {
      const decodedToken = jwtDecode(user.access_token);
      setUserId(decodedToken.user_id);
    } else {
      // If user is not in context, check localStorage
      const storedUser = JSON.parse(localStorage.getItem("jwt"));
      if (storedUser) {
        setUser(storedUser);
        const decodedToken = jwtDecode(storedUser.access_token);
        setUserId(decodedToken.user_id);
      }
    }
  }, [user, setUser]);

  

  const fetchProfiles = async (token) => {
    if (!userId) return;

    setLoading(true);
    try {
      const response = await fetch(`${backendhosturl}/api/v1/user/match/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data)
      setProfiles(data);
    } catch (error) {
      console.error("Failed to fetch profiles", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProfiles(user?.access_token);
    }
  }, [userId, user]);

  const refreshUser = () => {
    fetchProfiles(user?.access_token);
  };

  

  return (
    <>
      {loading && <div className="loading w-full h-screen flex items-center justify-center"><PapperArrow /></div>}
      <div className="mainContainer flex items-start p-8 justify-between">
        {!loading && profiles.length > 0 &&
          <div className='w-[62%] flex flex-col items-start justify-center flex-wrap gap-5'>
            <h1 className='text-xl'>Your Type</h1>
            <div className="profiles w-full flex flex-wrap gap-6 items-center justify-center">
              {profiles.map((profile) => {
                return (
                  <div key={profile.user_id} className='w-[130px] rounded-xl profile relative h-[130px] bg-[#dbdbdb]'>
                    <img src={profile.profile_photo} alt="profile" className='w-full h-full rounded-xl object-cover' />
                    <div className="desc rounded-xl absolute p-0 flex flex-col gap-2 text-white top-0 left-0 w-0 h-0 bg-btnbg-primary z-30 bg-opacity-90 overflow-hidden transition-all duration-300">
                      <img src={profile.cover_photo} alt="mini profile" className='miniProfile duration-300 w-0 h-0 border-0 border-white object-cover' />
                      <h1 className='font-bold text-lg text-white px-3'>{profile.name}</h1>
                      <div className="location flex items-center gap-2 px-3">
                        {/* <IoLocationOutline className='text-lg font-bold' /> */}
                        {profile.locality}, {profile.city} 🇲🇲
                      </div>
                      <div className="status flex gap-2 text-sm px-1">
                        <div className="age p-1 px-2 rounded-md bg-pink-500">{profile.age}</div>
                        <div className="mbti p-1 px-2 rounded-md bg-green-500">{profile.mbti}</div>
                        <div className="zodiac p-1 px-2 rounded-md bg-purple-500">{profile.zodiac_sign}</div>
                      </div>
                      <div className='flex gap-3 items-center justify-center mt-4'>
                        <p className='likePerson text-lg'>Like</p>
                        <div className="like w-10 h-10 text-center p-2 rounded-full flex items-center justify-center bg-colorbg-primary"><FaHeart className='text-lg text-red-600 cursor-pointer'/></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* {profiles.map((profile) => (
              <div
                key={profile.user_id}
                className="img w-full md:w-[230px] h-[260px] rounded-3xl overflow-hidden scale-90 hover:-rotate-3 hover:scale-100 duration-200 cursor-pointer shadow-xl relative"
              >
                <img src={profile.profile_photo} alt="profile" className='w-full h-full object-cover' />
                <div className="overlay w-full h-full absolute top-0 left-0" style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%)'
                }}></div>
                <div className="info flex flex-col gap-2 absolute bottom-2 p-2 text-white">
                  <img src={profile.profile_photo} alt="mini profile" className='w-20 h-20 border-4 border-white rounded-full object-cover' />
                  <h1 className='font-bold text-lg text-white px-3'>{profile.name}</h1>
                  <div className="location flex items-center gap-2 px-3">
                    <IoLocationOutline className='text-lg font-bold' />
                    {profile.locality}, {profile.city} 🇲🇲
                  </div>
                  <div className="status flex gap-2 text-sm px-1">
                    <div className="age p-1 px-2 rounded-xl bg-pink-500">{profile.age}</div>
                    <div className="mbti p-1 px-2 rounded-xl bg-green-500">{profile.mbti}</div>
                    <div className="zodiac p-1 px-2 rounded-xl bg-purple-500">{profile.zodiac_sign}</div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        }
        <div className="matchPeople w-[35%] flex flex-col items-start justify-center gap-5">
          <h1 className='text-xl'>Match User</h1>
            {!loading && profiles.length > 0 && 
              <div className="matchContainer w-full h-[400px] bg-[#d1d1d1] overflow-y-scroll custom-scrollbar">
                {profiles.map((profile) => {
                  return (
                    <>
                    <div className="matchPerson flex justify-between items-center gap-3 p-4" key={profile.user_id}>
                        <img src={profile.profile_photo} alt="profile" className='w-14 h-14 rounded-full object-cover' />
                        <div className="heart flex flex-col items-center justify-center">
                          <img src={loveConnnection} className='w-20' alt="" />
                          <h1 className='text-[#636363] uppercase text-sm'>August, 9, 2024</h1>
                        </div>
                        <img src={profile.cover_photo} alt="profile" className='w-14 h-14 rounded-full object-cover' />
                    </div>
                    <hr />
                    </>
                  )
                })}
              </div>
            }
          <div className='totalMatch w-full h-[130px] bg-[#d1d1d1]'></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard