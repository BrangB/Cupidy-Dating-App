import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [resetPassword, setResetPassword] = useState(false)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("jwt")))
    }, [])

  return (
    <AuthContext.Provider value={{user, setUser, resetPassword, setResetPassword}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}