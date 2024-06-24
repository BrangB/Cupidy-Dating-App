import AuthProvider from "./providers/AuthProvider"
import Navbar from "./components/Navbar"
import RoutePath from "./routes/RoutePath"
import { useLocation } from "react-router-dom"
import ColorProvider from "./providers/ColorProvider";
import LanguageProvider from "./providers/LanguageProvider";

function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login';

  return (
    <div className="App w-screen h-screen overflow-hidden flex bg-primary-50 text-primary-900 duration-300">
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
  )
}

export default App
