import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import PapperArrow from '../animations/animateIcons/PaperArrow';
import { useAuth } from '../providers/AuthProvider';
import {jwtDecode} from 'jwt-decode';  // Corrected import
import { FaHeart } from "react-icons/fa";
import loveConnnection from '../assets/loveconnection.png';
import toast from 'react-hot-toast';
import { FiMenu } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";
import { useLanguage } from "../providers/LanguageProvider";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [showMatchUserLoading, setShowMatchUserLoading] = useState(false);
  const [totalLikeGet, setTotalLikeGet] = useState(null)
  const [totalLikesGive, setTotalLikesGive] = useState(null)
  const [profiles, setProfiles] = useState([]);
  const [matchProfile, setMatchProfile] = useState([]);  // Initialized as an empty array
  const [userId, setUserId] = useState(null);
  const { user, setUser } = useAuth();
  const { languageData } = useLanguage();
  const [showMobileMatch, setShowMobileMatch] = useState(false);
  const backendhosturl = import.meta.env.VITE_BACKEND_HOST_URL;

  useEffect(() => {
    if (user) {
      const decodedToken = jwtDecode(user.access_token);
      setUserId(decodedToken.user_id);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("jwt"));
      if (storedUser) {
        setUser(storedUser);
        const decodedToken = jwtDecode(storedUser.access_token);
        setUserId(decodedToken.user_id);
      }
    }
  }, [user, setUser]);

  const fetchProfiles = async (token) => {
    if (!userId || !token) return;

    setLoading(true);
    try {
      const response = await fetch(`${backendhosturl}/api/v1/user/match/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch profiles");
      }
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error("Failed to fetch profiles", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.access_token) {
      fetchProfiles(user.access_token);
    }
  }, [userId, user]);

  const refreshUser = () => {
    if (user && user.access_token) {
      fetchProfiles(user.access_token);
    }
  };

  const likePerson = async (id, token) => {
    toast.promise(
      (async () => {
        const response = await fetch(`${backendhosturl}/api/v1/user/${userId}/like/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.detail === "You have already liked this user") {
            throw new Error('You have already liked this user');
          } else {
            throw new Error('Failed to like person');
          }
        }
      })(),
      {
        loading: 'Liking person...',
        success: () => {
          setTotalLikesGive(totalLikesGive + 1)
          return 'Person liked successfully!'
        },
        error: (err) => {
          if (err.message === 'You have already liked this user') {
            return 'You have already liked this user';
          }
          return 'Failed to like the person';
        }
      }
    );
  };

  const getMatchUser = async () => {
    if (!userId) return;
    setShowMatchUserLoading(true);
    try {
      const response = await fetch(`${backendhosturl}/api/v1/user/matches/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.access_token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Unable to Retrieve Matches');
      }
  
      const data = await response.json();
      setTotalLikeGet(data.totalLikes_get)
      setTotalLikesGive(data.totalLikes_give)
      setMatchProfile(data.matches || []); // Safely access data.matches or default to an empty array
      console.log(data);
    } catch (error) {
      console.error(error);
      setMatchProfile([]); // Ensure matchProfile is set even if an error occurs
    } finally {
      setShowMatchUserLoading(false); // Hide loading indicator regardless of success or failure
    }
  };
  

  const handleMatchFetch = () => {
    toast.promise(
      getMatchUser(),
      {
        loading: 'Fetching match users...',
        success: 'Match users fetched successfully!',
        error: 'No match users yet 🤐',
      }
    );
  };

  useEffect(() => {
    if (userId) {
      handleMatchFetch();
    }
  }, [userId]);

  const refreshMatch = () =>  {
    getMatchUser()
  }

  return (
    <>
      <div className='p-4 rounded-full bg-btnbg-primary flex md:hidden items-center justify-center absolute top-4 right-4 z-50'><FiMenu className='text-white text-lg' onClick={() => setShowMobileMatch(!showMobileMatch)}/></div>
      <div className={`mobileMatchUser flex md:hidden z-50 absolute w-screen h-screen top-0 ${showMobileMatch ? "left-0 bg-[#0000005e] backdrop-blur-md" : "-left-full"} duration-300`} onClick={() => setShowMobileMatch(!showMobileMatch)}>
          <div className="mainContainer h-full w-[75%]" >
            <div className="matchContainer gap-4 bg-colorbg-secondary py-6 w-full h-full flex flex-col items-center justify-start">
              <h1 className='font-bold text-xl w-full relative translate-x-4 my-6 md:my-0 '>
                  {languageData.dashboard.matchUser}
                <span className='w-20 md:w-20 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
              </h1>
              {!loading && matchProfile.length > 0 && 
              <div className="matchContainer w-full flex flex-col items-center justify-start h-full bg-colorbg-secondary overflow-y-scroll custom-scrollbar">
              {matchProfile.map((profile) => (
                  <div className="matchPerson flex justify-start px-6 items-center gap-6 p-4" key={profile.user_id}>
                      <img src={profile.profile_photo} alt="profile" className='w-14 h-14 rounded-full object-cover' />
                      <div className="heart flex flex-col items-center justify-center">
                        <h1 className='text-[#636363] uppercase text-sm font-semibold'>{profile.name}</h1>
                        <img src={loveConnnection} className='w-20' alt="" />
                      </div>
                  </div>
              ))}
              <hr className='w-[90%]'/>
            </div>
            }
            {!showMatchUserLoading && matchProfile.length === 0 && <div className='w-full text-center text-colortext-primary'>{languageData.dashboard.noMatchUser}</div>}
            </div>
          </div>
          <div className='totalMatch absolute bottom-0 left-0 w-[70%] h-[90px] bg-colorbg-secondary p-3 flex md:hidden items-center justify-center'>
            {totalLikeGet && totalLikesGive && (
              <div>
                <div className='flex items-center justify-start gap-4'>
                  <RiUserHeartFill className='text-xl text-colortext-primary'/>
                  <p className='likeGetAndGive flex gap-3 items-center justify-start'><span className='font-medium text-colortext-primary'>{languageData.dashboard.giveLike}</span> <span className='text-xl'>{totalLikesGive}</span></p>
                </div>
                <div className='flex items-center justify-start gap-4'>
                  <FaHandHoldingHeart className='text-xl text-colortext-primary'/>
                  <p className='likeGetAndGive flex gap-3 items-center justify-start'><span className='font-medium text-colortext-primary'>{languageData.dashboard.likeReceive}</span> <span className='text-xl'>{totalLikeGet}</span></p>
                </div>
              </div>
            )}
          </div>
        </div>
      <div className={`mainContainer relative flex items-start p-4 md:p-8 justify-between `}>
        <div className={`w-full ${showMobileMatch ? "overflow-hidden h-screen" : ""} md:w-[62%] flex flex-col items-start justify-center flex-wrap gap-5 `} id='typePerson'>
          <div className="profiles bg-colorbg-secondary min-h-[500px] custom-scrollbar p-2 md:p-6 py-10 w-full flex flex-wrap gap-8  items-start justify-center">
            <h1 className='font-bold text-xl md:text-xl w-full relative translate-x-4 mt-0 my-6 md:my-0 '>
                {languageData.dashboard.matchP}
              <span className='w-32 md:w-40 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
            </h1>
            <div className='w-full flex gap-6 flex-wrap items-start justify-center'>
              {loading && <div className='w-full loading-image text-colortext-primary flex items-center justify-center'>{languageData.dashboard.findMatchUser}</div>}
              {!loading && profiles.length > 0 && profiles.map((profile) => {
                return (
                  <div key={profile.user_id} className=' w-[120px] h-[120px] md:w-[130px] md:h-[130px] rounded-xl profile relative bg-[#dbdbdb]'>
                    <img src={profile.profile_photo} loading="lazy" alt="profile" className='w-full h-full rounded-xl object-cover' />
                    <div className="desc rounded-xl absolute -translate-x-10 p-0 flex flex-col gap-2 text-white top-0 left-0 w-0 h-0 bg-btnbg-primary z-20 bg-opacity-90 overflow-hidden transition-all duration-300">
                      <img src={profile.cover_photo} loading="lazy" alt="mini profile" className='miniProfile duration-300 w-0 h-0 border-0 border-white object-cover' />
                      <h1 className='font-bold text-lg text-white px-3'>{profile.name}</h1>
                      <div className="location flex items-center gap-2 px-3">
                        <IoLocationOutline className='text-lg font-bold' />
                        {profile.locality}, {profile.city} 🇲🇲
                      </div>
                      <div className="status flex gap-2 text-sm px-1">
                        <div className="age p-1 px-2 rounded-md bg-pink-500">{profile.age}</div>
                        <div className="mbti p-1 px-2 rounded-md bg-green-500">{profile.mbti}</div>
                        <div className="zodiac p-1 px-2 rounded-md bg-purple-500">{profile.zodiac_sign}</div>
                      </div>
                      <div className='flex gap-3 items-center justify-center mt-4'>
                        <p className='likePerson text-lg'>Like</p>
                        <div className="like w-10 h-10 text-center p-2 rounded-full flex items-center justify-center bg-colorbg-primary">
                          <FaHeart className='text-lg text-red-600 cursor-pointer' onClick={() => likePerson(profile.user_id, user?.access_token)} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {!loading && profiles.length === 0 && <div className='w-full text-center text-black'>{languageData.dashboard.noFoundUser}</div>}
            </div>
          </div>
        </div>

        <div className="matchPeople hidden w-[35%] md:flex flex-col items-start justify-center gap-5" id='matchPerson'>
          <div className="matchContainer gap-4 bg-colorbg-secondary py-6 w-full h-[400px] flex flex-col items-center justify-start">
            <h1 className='font-bold text-lg md:text-xl w-full relative translate-x-4 my-6 md:my-0 '>
                {languageData.dashboard.matchUser}
              <span className='w-32 md:w-20 h-1 bg-colorbg-third absolute -bottom-2 left-0'></span>
            </h1>
            <div className="refreshMatchUser w-full flex items-center justify-end mr-6  text-white">
              <div className='w-auto px-2 bg-btnbg-primary flex items-center justify-center py-1 cursor-pointer hover:bg-btnbg-hover duration-200' onClick={refreshMatch}>{languageData.dashboard.refresh}</div>
            </div>
            {showMatchUserLoading && <div className='w-full h-full loading-image text-colortext-primary flex items-center justify-center'>{languageData.dashboard.findMatches}</div>}
            {!showMatchUserLoading && matchProfile.length > 0 && 
            <div className="matchContainer w-full flex flex-col items-center justify-start h-full bg-colorbg-secondary overflow-y-scroll custom-scrollbar">
              {matchProfile.map((profile) => (
                  <div className="matchPerson flex justify-start px-6 items-center gap-6 p-4" key={profile.user_id}>
                      <img src={profile.profile_photo} alt="profile" className='w-14 h-14 rounded-full object-cover' />
                      <div className="heart flex flex-col items-center justify-center">
                        <h1 className='text-[#636363] uppercase text-sm font-semibold'>{profile.name}</h1>
                        <img src={loveConnnection} className='w-20' alt="" />
                      </div>
                  </div>
              ))}
              <hr className='w-[90%]'/>
            </div>
          }
          {!showMatchUserLoading && matchProfile.length === 0 && <div className='w-full mt-6 text-center text-colortext-primary'>{languageData.dashboard.noMatchUser}</div>}
          </div>
          <div className='totalMatch w-full h-[90px] bg-colorbg-secondary p-3 flex items-center justify-center' id='TotalLikes'>
            {totalLikeGet && totalLikesGive && (
              <div>
                <div className='flex items-center justify-start gap-4'>
                  <RiUserHeartFill className='text-xl text-colortext-primary'/>
                  <p className='likeGetAndGive flex gap-3 items-center justify-start'><span className='font-medium text-colortext-primary'>{languageData.dashboard.giveLike}</span> <span className='text-xl'>{totalLikesGive}</span></p>
                </div>
                <div className='flex items-center justify-start gap-4'>
                  <FaHandHoldingHeart className='text-xl text-colortext-primary'/>
                  <p className='likeGetAndGive flex gap-3 items-center justify-start'><span className='font-medium text-colortext-primary'>{languageData.dashboard.likeReceive}</span> <span className='text-xl'>{totalLikeGet}</span></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
