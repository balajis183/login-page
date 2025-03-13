import React from "react";
import "../styles/Login.css";

const Login = () => {
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
      
      {/* Right Side - Graph & Stats */}
      <div className="login-stats">
        <h1>
          Welcome back! <br /> Please sign in to your <span>Spiway</span> account
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="graph-container">
          {/* Placeholder for Graph - Can be replaced with a Chart.js component */}
          <div className="graph">[Graph Placeholder]</div>
          <div className="stats-card">
            <p>Total Users: 2,488</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
