import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // 1. Check if the role is stored in the browser
  const role = localStorage.getItem('role');
  
  // 2. Check if the role is actually 'admin' (ignoring capitalization)
  const isAdmin = role && role.toLowerCase() === 'admin';

  // 3. Logic:
  // If Admin -> Show the content (Outlet)
  // If Not Admin -> Kick them back to Login page
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;