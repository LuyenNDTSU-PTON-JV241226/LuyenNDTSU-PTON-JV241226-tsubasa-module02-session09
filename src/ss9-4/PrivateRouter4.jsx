import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter4 = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter4;
