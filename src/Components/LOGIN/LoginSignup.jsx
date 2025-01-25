import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setName("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      if (isLogin) {
        // Handle Login
        const response = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
        localStorage.setItem("token", response.data.token); // Save the JWT token
        alert("Login Successful");
      } else {
        // Handle Signup
        await axios.post("http://localhost:5000/api/signup", {
          name,
          email,
          password,
        });
        alert("Signup Successful");
        handleToggle(); // Switch to login page
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className={`login-signup-wrapper ${isLogin ? "login-page" : ""}`}>
      <div className="heading">
        <h1>{isLogin ? "LOGIN" : "SIGNUP"}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="input-group">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="input-group">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div style={{ marginTop: "20px" }}>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={handleToggle}
            style={{
              color: "purple",
              cursor: "pointer",
              background: "none",
              border: "none",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
