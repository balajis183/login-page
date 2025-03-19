import React from "react";
import "../styles/Login.css";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/apple.png";
import graphImage from "../assets/graph2.png";
import circlegraph from "../assets/circle1.png";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h2 className="brand-name">Filuick Pay</h2>
      </div>
      <div className="auth-form">
        <h2>Sign In</h2>

        <p className="header-text">Welcome Back! Please enter your details</p>

        <label htmlFor="email" className="label-email">Email</label>
        <input id="email" type="email" className="input-field" placeholder="Enter your email" />

        <label htmlFor="password" className="label-password">Password</label>
        <input id="password" type="password" className="input-field" placeholder="........." />

        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember me for 30 days
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="primary-btn">Login</button>

        <div className="separator">OR</div>

        <div className="social-auth">
          <button className="social-btn google-btn">
            <img src={googleLogo} alt="Google" className="social-logo" /> Sign in with Google
          </button>
          <button className="social-btn facebook-btn">
            <img src={facebookLogo} alt="Facebook" className="social-logo" /> Sign in with Facebook
          </button>
        </div>

        <div className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>

      <div className="blue-box">
        <h1>
          Welcome back! <br /> Please sign in to your <br /> Filuick Pay account
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure <br />veniam perspiciatis sapiente
          similique officia obcaecati vero eius a!
        </p>

        <div className="graph-container">
          <img src={graphImage} alt="Graph" className="graph-image" />
          <img src={circlegraph} alt="Circle Graph" className="circle-graph" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
