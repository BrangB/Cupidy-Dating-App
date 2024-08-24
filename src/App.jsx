import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import MobileMenu from "./components/MobileMenu";
import "./App.css";
import BottomMenu from "./components/BottomMenu";
import captain from '../src/assets/captainLogo.png'

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function App() {
  const location = useLocation();

  const getGuideStep = () => {
    if(location.pathname === "/dashboard"){
      return [
        { element: '#dashboard', popover: { title: 'Dashboard', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quae, dolor excepturi incidunt consequatur quia dolore voluptates quaerat rem, error modi, inventore nostrum veritatis culpa laboriosam quisquam aliquam corporis tempore?' } },
        { element: '#chat', popover: { title: 'Chat', description: 'Description' } },
        { element: '#about', popover: { title: 'About Us', description: 'Description' } },
        { element: '#userProfile', popover: { title: 'User Profile', description: 'Description' } },
        { element: '#typePerson', popover: { title: 'Type Person', description: 'Description' } },
        { element: '#matchPerson', popover: { title: 'Match Person', description: 'Description' } },
      ]
    }else if(location.pathname === "/about"){
      return [
        { element: '#purposeGuide', popover: { title: 'Purpose', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quae, dolor excepturi incidunt consequatur quia dolore voluptates quaerat rem, error modi, inventore nostrum veritatis culpa laboriosam quisquam aliquam corporis tempore?' } },
        { element: '#featureGuide', popover: { title: 'Feature', description: 'Description' } },
        { element: '#planningGuide', popover: { title: 'Planning', description: 'Description' } },
        { element: '#userProfile', popover: { title: 'User Profile', description: 'Description' } },
        { element: '#typePerson', popover: { title: 'Type Person', description: 'Description' } },
        { element: '#matchPerson', popover: { title: 'Match Person', description: 'Description' } },
      ]
    }else{
      return [
        { element: '#language', popover: { title: 'Language', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quae, dolor excepturi incidunt consequatur quia dolore voluptates quaerat rem, error modi, inventore nostrum veritatis culpa laboriosam quisquam aliquam corporis tempore?' } },
        { element: '#theme', popover: { title: 'Theme', description: 'Description' } },
      ]
    }
  }

  const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    animate: true,
    prevBtnText: "Prev",
    nextBtnText: "Next",
    showButtons: ['next', 'previous', 'close'],
    steps: getGuideStep()
  });
  

  // Use useMemo to memoize the result and avoid unnecessary calculations
  const hideNavbar = useMemo(() => {
    const pathsToHideNavbar = ["/login", "/signup", "/", "/policy", '/forgetpassword', '/resetpassword'];
    const pathsToPrefixHideNavbar = ["/collect-data", '/sharedProfile'];
    return (
      pathsToHideNavbar.includes(location.pathname) ||
      pathsToPrefixHideNavbar.some((path) => location.pathname.startsWith(path))
    );
  }, [location.pathname]);

  const guide = () => {
    driverObj.drive();
    console.log(location.pathname)
  }


  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary relative duration-300 z-10">
      {!hideNavbar && <div className="absolute z-20 w-[50px] h-[50px] p-2 rounded-full bg-[#dbdbdb] shadow-2xl top-6 right-5 animate-bounce cursor-pointer" onClick={guide}><img src={captain} alt="Guide" className="w-full h-full object-cover" /></div>}
      {!hideNavbar && <Navbar />}
      <div className={`w-full h-full overflow-hidden overflow-y-scroll scroll-smooth`}>
        <RoutePath />
      </div>
      {/* {!hideNavbar && <MobileMenu />} */}
      {!hideNavbar && <BottomMenu />}
    </div>
  );
}

export default App;
