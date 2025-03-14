import React, { useState } from "react";
import "../styles/Login.css";
import spiwayLogo from "../assets/icon.png"; // Ensure you have the logo in your assets folder

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const graphs = [
    <div className="graph">📊 User Growth</div>,
    <div className="graph">📈 Active Users</div>,
    <div className="graph">📉 Engagement Rate</div>,
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="login-container">
      {/* Left Side - Background */}
      <div className="left-background">
        {/* 🏆 Spiway Logo Positioned Outside the Card */}
        <img src={spiwayLogo} alt="Spiway Logo" className="spiway-logo" />
        <h3 className="spiway-text">Spiway</h3>

        {/* 📌 Card Layout for Login */}
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Please enter your details to access.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" /> Remember for 30 days
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

      {/* Right Side - Insights */}
      <div className="right-insights">
        <h1>Welcome to Spiway Dashboard!</h1>
        <p>Please sign in to access dashboard statistics.</p>

        {/* 🔄 Graph Carousel */}
        <div className="graph-carousel">
          {graphs[currentSlide]}
        </div>

        {/* 🔘 Pagination Dots */}
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
