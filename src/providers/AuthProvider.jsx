import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // Initialize user state directly from localStorage
    const [user, setUser] = useState(() => {
        const storedJwt = localStorage.getItem("jwt");
        return storedJwt ? JSON.parse(storedJwt) : null;
    });

    const [resetPassword, setResetPassword] = useState(false);

    return (
        <AuthContext.Provider value={{user, setUser, resetPassword, setResetPassword}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
