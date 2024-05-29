import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default ProtectedRoute;
