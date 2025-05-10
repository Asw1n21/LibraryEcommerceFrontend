import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/login.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.username !== username || user.password !== password) {
      alert("Invalid credentials.");
      return;
    }
  
    // Redirect to dashboard based on role
    switch (user.role) {
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "staff":
        navigate("/staff/dashboard");
        break;
      case "customer":
        navigate("/");
        break;
      default:
        navigate("/");
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-header">Welcomeback</h1>
        <p className="login-subtext">
          Sign in to continue your journey. Access exclusive features<br />
          and personalized experiences.
        </p>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Log in
          </button>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Go back to Homepage
        </button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
