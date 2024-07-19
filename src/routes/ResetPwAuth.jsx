import React from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ResetPwAuth = ({ children }) => {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const previousPath = location.state?.from || '/login';

  if (!resetPassword) return <Navigate to={previousPath} state={{ from: location.pathname }} />;

  return (
    <div>
      {children}
    </div>
  );
};

export default ResetPwAuth;
