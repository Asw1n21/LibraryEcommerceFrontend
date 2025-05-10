import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/signup.css";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password || !role) {
      alert("Please fill out all fields.");
      return;
    }

    const newUser = { username, email, password, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-header">Create Account</h1>
        <p className="signup-subtext">
          Join BookNest to explore and collect your favorite reads.
        </p>

        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>

          <button className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>

        <p className="login-prompt">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
