import React, { useState } from 'react';
import MatchTransition from '../animations/match/MatchTransition';
import { Route, Routes } from 'react-router-dom';
import AutoMatch from '../components/match/AutoMatch';
import CustomMatch from '../components/match/CustomMatch';

const Match = () => {

  return (
    <MatchTransition>
      <div className="card w-full p-6 min-h-[500px] relative flex flex-col items-center justify-center">
        <Routes>
          <Route path='/' element={<AutoMatch />} />
          <Route path="customize" element={<CustomMatch />} />
        </Routes>
      </div>
    </MatchTransition>
  );
};

export default Match;
