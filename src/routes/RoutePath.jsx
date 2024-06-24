import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Authentication from './Authentication'
import Settings from '../pages/Settings'
import Landing from '../pages/Landing'

const RoutePath = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Authentication>
            <Dashboard />
        </Authentication>} />
        <Route path='/about' element={<About />} />
        <Route path='/setting' element={<Settings />} />
        <Route path='/landing' element={<Landing />} />
    </Routes>
  )
}

export default RoutePath