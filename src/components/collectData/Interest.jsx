import React from 'react';
import FadeCard from '../../animations/collectdata/FadeCard';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Game from './interests/Game';
import Popular from './interests/Popular';
import Music from './interests/Music';
import Activities from './interests/Activities';

const Interest = () => {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return location.pathname === path ? 'border-b-2 border-btnbg-primary' : '';
  };

  return (
    <FadeCard>
      <div className='card w-full md:w-[700px] bg-colorbg-primary p-4 py-6 rounded-sm flex flex-col gap-8 overflow-hidden duration-200'>
        <div className="heading">
          <h1 className='text-2xl font-bold'>Interests</h1>
          <span className='text-colortext-primary font-bold'>0 / 5+</span>
          <p className='text-gray-500'>Add at least 5 interests to your profile. You'll be able to discuss, engage, and meet like-minded souls in these communities.</p>
        </div>
        <div className="category w-full flex flex-col gap-6">
          <div className="title w-full flex gap-5 items-center justify-center flex-wrap">
            <Link to="/collect-data/interest/popular" className={getLinkClass('/collect-data/interest/popular')}>Popular</Link>
            <Link to="/collect-data/interest/music" className={getLinkClass('/collect-data/interest/music')}>Music</Link>
            <Link to="/collect-data/interest/activities" className={getLinkClass('/collect-data/interest/activities')}>Activities</Link>
            <Link to="/collect-data/interest/games" className={getLinkClass('/collect-data/interest/games')}>Games</Link>
            <Link to="/collect-data/interest/food-drink" className={getLinkClass('/collect-data/interest/food-drink')}>Food & Drink</Link>
            <Link to="/collect-data/interest/pets" className={getLinkClass('/collect-data/interest/pets')}>Pets</Link>
            <Link to="/collect-data/interest/sports" className={getLinkClass('/collect-data/interest/sports')}>Sports</Link>
            <Link to="/collect-data/interest/film-literature" className={getLinkClass('/collect-data/interest/film-literature')}>Film & Literature</Link>
          </div>
          <hr />
          <div className="stuff">
            <Routes>
              <Route path='popular' element={<Popular />} />
              <Route path="music" element={<Music />} />
              <Route path="activities" element={<Activities />} />
              <Route path="games" element={<Game />} />
            </Routes>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Link
          className='bg-btnbg-primary text-colortext-third p-2 w-16 flex items-center justify-center cursor-pointer'
          to={'/collect-data/main-info'}
          >
            Prev
          </Link>
        </div>
      </div>
      
    </FadeCard>
  );
};

export default Interest;
