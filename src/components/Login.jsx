import React, { useState } from "react";
import "../styles/Login.css";
import spiwayLogo from "../assets/spiway.png"; // Your logo

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const graphs = [
    <div className="graph">📊 Graph 1</div>,
    <div className="graph">📈 Graph 2</div>,
    <div className="graph">📉 Graph 3</div>,
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="login-container">
      
      {/* Left Side - Sign-in Section */}
      <div className="login-left">
        
        {/* 🏆 Logo and Spiway Text */}
        <div className="logo-container">
          <img src={spiwayLogo} alt="Spiway Logo" className="spiway-logo" />
          <span className="spiway-text">Spiway</span>
        </div>

        {/* 🎉 Sign-in Card */}
        <div className="login-card">
          <h2>Sign In</h2>
          <p>Welcome back! Please enter your details</p>

          <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn-primary">Sign In</button>
          </form>

          <div className="social-login">
            <button className="google">Sign in with Google</button>
            <button className="facebook">Sign in with Facebook</button>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Side (UNCHANGED) */}
      <div className="login-right">
        <h1>Welcome to <span>Spiway Dashboard</span></h1>
        <p>Please sign in to access dashboard statistics</p>

        {/* Scrollable Graphs */}
        <div className="graph-carousel">
          {graphs[currentSlide]}
        </div>

        {/* Pagination Dots */}
        <div className="graph-pagination">
          {graphs.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
