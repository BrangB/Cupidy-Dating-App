// CollectUserData.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Interest from '../components/collectData/Interest';
import Info from '../components/collectData/Info';
import MainInfo from '../components/collectData/MainInfo';
import ThemeToggle from '../components/ThemeToggle';
import Cat from '../animations/animateIcons/Cat';
import Zodiac from '../components/collectData/Zodiac';
import Mbti from '../components/collectData/Mbti';
import ProfilePhoto from '../components/collectData/ProfilePhoto';

const CollectUserData = () => {
  return (
    <div className='w-full relative flex items-center justify-center flex-col bg-[#1a1a1a0a]'>
      <Routes>
        <Route path='welcome' element={<Info />} />
        <Route path="main-info" element={<MainInfo />} />
        <Route path="interest" element={<Interest />} />
        <Route path='zodiac' element={<Zodiac />} />
        <Route path='mbti' element={<Mbti />}/>
        <Route path='profilephoto' element={<ProfilePhoto />}/>
      </Routes>
      <ThemeToggle />
      <Cat/>
    </div>
  );
};

export default CollectUserData;
