import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}