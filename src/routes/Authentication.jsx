import React from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Authentication = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(user.access_token);
  } catch (error) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default Authentication;
