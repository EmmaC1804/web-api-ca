import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from './contexts/authContext'
import { Typography } from "@mui/material";

const ProtectedRoutes = () => {

  const context = useContext(AuthContext);
  const location = useLocation();

  return context.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    <Typography variant="h5">Login to access page content</Typography>
  );
};

export default ProtectedRoutes;