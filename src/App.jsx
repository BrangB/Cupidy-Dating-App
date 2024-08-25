import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import MobileMenu from "./components/MobileMenu";
import "./App.css";
import BottomMenu from "./components/BottomMenu";
import captain from '../src/assets/captainLogo.png'
import { useLanguage } from "./providers/LanguageProvider";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function App() {
  const location = useLocation();
  const {languageData} = useLanguage();

  const getGuideStep = () => {
    if (location.pathname === "/dashboard") {
      return [
        { 
          element: '#dashboard', 
          popover: { 
            title: languageData.guide.dashboard.mainDashboard.title, 
            description: languageData.guide.dashboard.mainDashboard.description
          } 
        },
        { 
          element: '#chat', 
          popover: { 
            title: languageData.guide.dashboard.messagingCenter.title, 
            description: languageData.guide.dashboard.messagingCenter.description
          } 
        },
        { 
          element: '#about', 
          popover: { 
            title: languageData.guide.dashboard.aboutPlatform.title, 
            description: languageData.guide.dashboard.aboutPlatform.description
          } 
        },
        { 
          element: '#userProfile', 
          popover: { 
            title: languageData.guide.dashboard.yourProfile.title, 
            description: languageData.guide.dashboard.yourProfile.description
          } 
        },
        { 
          element: '#setting', 
          popover: { 
            title: languageData.guide.dashboard.setting.title, 
            description: languageData.guide.dashboard.setting.description
          } 
        },
        { 
          element: '#typePerson', 
          popover: { 
            title: languageData.guide.dashboard.personalityType.title, 
            description: languageData.guide.dashboard.personalityType.description
          } 
        },
        { 
          element: '#matchPerson', 
          popover: { 
            title: languageData.guide.dashboard.findMatch.title, 
            description: languageData.guide.dashboard.findMatch.description
          } 
        },
        { 
          element: '#TotalLikes', 
          popover: { 
            title: languageData.guide.dashboard.totalLikes.title, 
            description: languageData.guide.dashboard.totalLikes.description
          } 
        }
      ];
    } else if (location.pathname === "/userProfile") {
      return [
        { 
          element: '#profilePhoto', 
          popover: { 
            title: languageData.guide.userProfile.profilePhoto.title, 
            description: languageData.guide.userProfile.profilePhoto.description
          } 
        },
        { 
          element: '#qr', 
          popover: { 
            title: languageData.guide.userProfile.qrCode.title, 
            description: languageData.guide.userProfile.qrCode.description
          } 
        },
        { 
          element: '#detailInfo', 
          popover: { 
            title: languageData.guide.userProfile.detailedInfo.title, 
            description: languageData.guide.userProfile.detailedInfo.description
          } 
        },
        { 
          element: '#post', 
          popover: { 
            title: languageData.guide.userProfile.userPosts.title, 
            description: languageData.guide.userProfile.userPosts.description
          } 
        }
      ];
    } else {
      return [
        { 
          element: '#language', 
          popover: { 
            title: languageData.guide.settings.languageSettings.title, 
            description: languageData.guide.settings.languageSettings.description
          } 
        },
        { 
          element: '#theme', 
          popover: { 
            title: languageData.guide.settings.themeSelection.title, 
            description: languageData.guide.settings.themeSelection.description
          } 
        },
        { 
          element: '#logout', 
          popover: { 
            title: languageData.guide.settings.signOut.title, 
            description: languageData.guide.settings.signOut.description
          } 
        }
      ];
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

  const hideGuide = useMemo(() => {
    const pathsToHideNavbar = ["/login", "/signup", "/", "/policy", '/forgetpassword', '/resetpassword', "/chat", "/about",];
    const pathsToPrefixHideNavbar = ["/collect-data", '/sharedProfile'];
    return (
      pathsToHideNavbar.includes(location.pathname) ||
      pathsToPrefixHideNavbar.some((path) => location.pathname.startsWith(path))
    );
  }, [location.pathname]);


  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary relative duration-300 z-10">
      {!hideGuide && <div className="absolute hidden md:flex z-20 w-[50px] h-[50px] p-2 rounded-full bg-[#dbdbdb] shadow-2xl top-6 right-5 animate-bounce cursor-pointer" onClick={guide}><img src={captain} alt="Guide" className="w-full h-full object-cover" /></div>}
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
