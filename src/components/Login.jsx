import React, { useState } from "react";
import "../styles/Login.css";

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
      {/* Left Side - Sign-in Form */}
      <div className="login-form">
        <div className="logo">Spiway</div>
        <h2>Sign In</h2>
        <p>Welcome back! Please enter your details</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember for 30 Days
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <div className="social-login">
          <button className="google">Sign up with Google</button>
          <button className="facebook">Sign up with Facebook</button>
        </div>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>

      {/* Right Side - Scrollable Graphs */}
      <div className="login-stats">
        <h1>Welcome back! Please sign in to your <span>Spiway</span> account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Scrollable Graphs Container */}
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
