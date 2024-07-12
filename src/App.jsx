import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import Navbar from './components/Navbar';
import RoutePath from './routes/RoutePath';
import ColorProvider from './providers/ColorProvider';
import LanguageProvider from './providers/LanguageProvider';
import DetailInfoProvider from './providers/DetailInfoProvider';

import './App.css';

function App() {
  const location = useLocation();

  // Use useMemo to memoize the result and avoid unnecessary calculations
  const hideNavbar = useMemo(() => {
    const pathsToHideNavbar = ['/login', '/signup', '/', '/policy'];
    const pathsToPrefixHideNavbar = ['/collect-data'];
    return pathsToHideNavbar.includes(location.pathname) || pathsToPrefixHideNavbar.some(path => location.pathname.startsWith(path));
  }, [location.pathname]);

  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary duration-300">
      <DetailInfoProvider>
        <ColorProvider>
          <LanguageProvider>
            <AuthProvider>
              {!hideNavbar && <Navbar />}
              <RoutePath />
            </AuthProvider>
          </LanguageProvider>
        </ColorProvider>
      </DetailInfoProvider>
    </div>
  );
}

export default App;
