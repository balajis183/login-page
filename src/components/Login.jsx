import React from "react";
import "../styles/Login.css";

const LoginPage = () => {
  return (
    <div className="container">
      {/* Left Section - Login Form */}
      <div className="left-section">
        <div className="card">
          <h2 className="text-center">Sign In</h2>
          <p className="text-gray-500 text-sm text-center">Welcome back! Please enter your details</p>

          <label>Email</label>
          <input type="email" placeholder="Enter your email" className="input-field" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" className="input-field" />

          <div className="flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember for 30 Days</label>
            </div>
            <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
          </div>

          <button>Sign In</button>

          <div className="text-center my-4">OR</div>

          <div className="social-buttons">
            <div className="social-button">
              <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
              Sign in with Google
            </div>
            <div className="social-button">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
              Sign in with Facebook
            </div>
          </div>

          <p className="text-center text-sm mt-4">
            Don’t have an account? <a href="#" className="text-blue-600 font-medium">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Section - Info */}
      <div className="right-section">
        <h1>Welcome back!</h1>
        <h2>Please sign in to your <span className="underline">Filuick Pay</span> account</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Facilisi neque lectus turpis id tincidunt eget.</p>
      </div>
    </div>
  );
};

export default LoginPage;
