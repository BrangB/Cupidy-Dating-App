import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import FindUser from '../../animations/animateIcons/FindUser';
import { useAuth } from '../../providers/AuthProvider';
import {jwtDecode} from 'jwt-decode';

const AutoMatch = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [userId, setUserId] = useState(null);
  const { user, setUser } = useAuth();

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
      const response = await fetch(`http://127.0.0.1:8000/api/v1/user/match/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
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
      {loading && <div className="loading"><FindUser /></div>}
      {!loading &&
        <div className="w-full p-6">
          <button className='bg-btnbg-primary text-colortext-third p-2 rounded-md' onClick={refreshUser}>Refresh</button>
        </div>
      }
      {!loading && profiles.length > 0 &&
        <div className='w-full flex items-center justify-center flex-wrap gap-5'>
          {profiles.map((profile) => (
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
          ))}
        </div>
      }
    </>
  );
};

export default AutoMatch;
