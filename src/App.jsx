import AuthProvider from "./providers/AuthProvider"
import Navbar from "./components/Navbar"
import RoutePath from "./routes/RoutePath"
import { useLocation } from "react-router-dom"
import ColorProvider, { useColor } from "./providers/ColorProvider";
import LanguageProvider from "./providers/LanguageProvider";
import './App.css'

function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === "/" || location.pathname === "/policy";

  

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
  )
}

export default App
