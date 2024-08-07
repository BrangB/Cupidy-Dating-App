import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Authentication from './Authentication';
import Settings from '../pages/Settings';
import Landing from '../pages/Landing';
import SignUp from '../pages/auth/SignUp';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CollectUserData from '../pages/CollectUserData';
import Chat from '../pages/Chat';
import UserProfile from '../pages/UserProfile';
import Match from '../pages/Match';
import ForgetPassword from '../pages/auth/ForgetPassword/ForgetPassword';
import ResetPassword from '../pages/auth/ResetPassword/ResetPassword';
import ResetPwAuth from './ResetPwAuth';
import SharedProfile from '../pages/SharedProfile';

const RoutePath = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/forgetpassword' element={<ForgetPassword />}/>
      <Route path='/resetpassword' element={<ResetPwAuth><ResetPassword /></ResetPwAuth>}/>
      <Route path='/dashboard' element={<Authentication><Dashboard /></Authentication>} />
      <Route path='/chat' element={<Authentication><Chat /></Authentication>} />
      <Route path='/about/*' element={<Authentication><About /></Authentication>} />
      <Route path='/match' element={<Authentication><Match /></Authentication>} />
      <Route path='/' element={<Landing />} />
      <Route path='/setting' element={<Authentication><Settings /></Authentication>} />
      <Route path='/collect-data/*' element={<CollectUserData />} />
      <Route path='/policy' element={<PrivacyPolicy />} />
      <Route path='/userProfile' element={<UserProfile />} />
      <Route path='/sharedProfile/*' element={<SharedProfile />} />
    </Routes>
  );
};

export default RoutePath;