import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Authentication from './Authentication';
import Settings from '../pages/Settings';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CollectUserData from '../pages/CollectUserData';
import Interest from '../components/collectData/Interest';
import Gender from '../components/collectData/Gender';

const RoutePath = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Authentication><Dashboard /></Authentication>} />
      <Route path='/about' element={<Authentication><About /></Authentication>} />
      <Route path='/' element={<Landing />} />
      <Route path='/setting' element={<Authentication><Settings /></Authentication>} />
      {/* <Route path='/collect-data'>
        <Route path='interest' element={<Interest />} />
        <Route path='gender' element={<Gender />} />
      </Route> */}
      <Route path='/collect-data/*' element={<CollectUserData />} />
      <Route path='/policy' element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default RoutePath;