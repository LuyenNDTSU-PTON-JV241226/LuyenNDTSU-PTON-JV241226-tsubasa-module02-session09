import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/account");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
