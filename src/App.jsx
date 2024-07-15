import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import MobileMenu from "./components/MobileMenu";

import "./App.css";
import BottomMenu from "./components/BottomMenu";

function App() {
  const location = useLocation();

  // Use useMemo to memoize the result and avoid unnecessary calculations
  const hideNavbar = useMemo(() => {
    const pathsToHideNavbar = ["/login", "/signup", "/", "/policy"];
    const pathsToPrefixHideNavbar = ["/collect-data"];
    return (
      pathsToHideNavbar.includes(location.pathname) ||
      pathsToPrefixHideNavbar.some((path) => location.pathname.startsWith(path))
    );
  }, [location.pathname]);


  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary duration-300">
      {!hideNavbar && <Navbar />}
      <div className={`w-full h-full `}>
        <RoutePath />
      </div>
      {/* {!hideNavbar && <MobileMenu />} */}
      {!hideNavbar && <BottomMenu />}
    </div>
  );
}

export default App;
