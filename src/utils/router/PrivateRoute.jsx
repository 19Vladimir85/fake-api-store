import { Navigate, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function PrivateRoute() {
  const { token } = useContext(UserContext);
  return token ? <Outlet /> : <Navigate to="/registration" />;
}

export default PrivateRoute;
