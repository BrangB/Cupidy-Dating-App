import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import Navbar from './components/Navbar';
import RoutePath from './routes/RoutePath';
import ColorProvider from './providers/ColorProvider';
import LanguageProvider from './providers/LanguageProvider';

import './App.css';

function App() {
  const location = useLocation();

  // Function to check if the current path matches any of the given paths
  const shouldHideNavbar = () => {
    const pathsToHideNavbar = ['/login', '/signup', '/', '/policy', '/collect-data'];
    return pathsToHideNavbar.some(path => location.pathname.startsWith(path));
  };

  const hideNavbar = shouldHideNavbar();

  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-colorbg-primary duration-300">
        <ColorProvider>
          <LanguageProvider>
            <AuthProvider>
              <>
                {!hideNavbar && <Navbar />}
                <RoutePath />
              </>
            </AuthProvider>
          </LanguageProvider>
        </ColorProvider>
    </div>
  );
}

export default App;
