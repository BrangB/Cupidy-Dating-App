import React, { createContext, useContext, useEffect, useState } from 'react'

const ColorContext = createContext();

const ColorProvider = ({children}) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "pink")

    useEffect(() => {
      setTheme(localStorage.getItem("theme"))
      changeTheme(theme)
    }, [])

    const changeTheme = (themeName) => {
        setTheme(themeName)
        localStorage.setItem("theme", themeName)
        document.body.setAttribute("data-theme", themeName)
    }
  return (
    <ColorContext.Provider value={{theme, changeTheme}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider

export const useColor = () => {
    return useContext(ColorContext)
}