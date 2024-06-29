// CollectUserData.js

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Interest from '../components/collectData/Interest';
import Gender from '../components/collectData/Gender';
import Info from '../components/collectData/Info';
import MainInfo from '../components/collectData/MainInfo';
import ThemeToggle from '../components/ThemeToggle';
import Cat from '../animations/animateIcons/Cat';

const CollectUserData = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col bg-[#00000013]'>
      <Routes>
        <Route path='welcome' element={<Info />} />
        <Route path="main-info" element={<MainInfo />} />
        <Route path="interest" element={<Interest />} />
        <Route path="gender" element={<Gender />} />
      </Routes>
      {/* <div className="link">
        <Link to='/collect-data/interest'>Interest</Link>
        <Link to='/collect-data/gender'>Gender</Link>
      </div> */}
      <ThemeToggle />
      <Cat />
    </div>
  );
};

export default CollectUserData;
