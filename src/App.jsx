import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import { IoMdMenu, IoMdClose, IoMdSettings } from "react-icons/io";
import { useLanguage } from "./providers/LanguageProvider";

import "./App.css";

function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { languageData } = useLanguage();

  // Use useMemo to memoize the result and avoid unnecessary calculations
  const hideNavbar = useMemo(() => {
    const pathsToHideNavbar = ["/login", "/signup", "/", "/policy"];
    const pathsToPrefixHideNavbar = ["/collect-data"];
    return (
      pathsToHideNavbar.includes(location.pathname) ||
      pathsToPrefixHideNavbar.some((path) => location.pathname.startsWith(path))
    );
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary duration-300">
      {!hideNavbar && <Navbar />}
      <div className={`w-full`}>
        <RoutePath />
      </div>
      <div
        className={`menu absolute top-6 right-6 flex md:hidden items-center justify-center ${isMobileMenuOpen ? "text-colortext-primary bg-colortext-third" : "bg-btnbg-primary text-colortext-third"} p-2 rounded-full cursor-pointer z-50`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <IoMdMenu className="text-2xl" />
        )}
      </div>
      <div className={`mobile-navbar fixed top-0 ${isMobileMenuOpen ? "left-0" : "-left-[100vw]"} duration-200 w-full h-full bg-colorbg-third text-colortext-third flex flex-col items-center justify-center z-40`}>
          <div className="mainLink text-lg flex flex-col gap-6 items-center justify-center">
            <Link
              to="/dashboard"
              className="capitalize"
              onClick={toggleMobileMenu}
            >
              {languageData.navbar.dashboard}
            </Link>
            <Link to="/chat" className="capitalize" onClick={toggleMobileMenu}>
              {languageData.navbar.chat}
            </Link>
            <Link to="/about" className="capitalize" onClick={toggleMobileMenu}>
              {languageData.navbar.about}
            </Link>
            <Link
              to="/setting"
              className="capitalize w-full flex p-2 bg-white text-colortext-primary justify-center items-center gap-3 rounded-sm"
              onClick={toggleMobileMenu}
            >
              <IoMdSettings className="flex items-center justify-center" />
              {languageData.navbar.setting}
            </Link>
          </div>
        </div>
    </div>
  );
}

export default App;
