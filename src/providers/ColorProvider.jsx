import React, { createContext, useContext, useState } from 'react'

const ColorContext = createContext();

const ColorProvider = ({children}) => {

    const [theme, setTheme] = useState("purple-heart")

    const changeTheme = (themeName) => {
        setTheme(themeName)
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