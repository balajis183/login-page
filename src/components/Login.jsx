import React, { useState } from "react";
import "../styles/Login.css";
import googleLogo from "../assets/google.png";
import facebookLogo from "../assets/apple.png";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import graph3 from "../assets/graph3.png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import logo from "../assets/logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const slides = [
  {
    heading: (
      <>
        Welcome back! <br />
        Please sign in to your <br />
        Filuick pay account
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure veniam perspiciatis sapiente similique officia obcaecati vero eius a!",
    graph: graph1,
    circle: circle1,
  },
  {
    heading: (
      <>
        Manage your finances <br />
        easily with <br />
        Filuick Pay
      </>
    ),
    description:
      "Track your expenses, manage transactions, and stay ahead with smart financial solutions. Secure, fast, and easy to use!",
    graph: graph2,
    circle: circle2,
  },
  {
    heading: (
      <>
        Secure and reliable <br />
        payments at your <br />
        fingertips
      </>
    ),
    description:
      "With Filuick Pay, make transactions worry-free. Enjoy seamless integration with banks and digital wallets.",
    graph: graph3,
    circle: circle3,
  },
];

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="login-page">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h2 className="brand-name">Filuick Pay</h2>
        </div>
      </div>

      <div className="content-container">
        <div className="auth-container">
          <div className="auth-form">
            <h2>Sign In</h2>
            <p className="header-text">
              Welcome Back! Please enter your details
            </p>

            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="label-password">
              Password
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                className="input-field"
                placeholder="........."
              />
            </div>

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
                <img src={googleLogo} alt="Google" className="social-logo" />{" "}
                Sign in with Google
              </button>
              <button className="social-btn facebook-btn">
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="social-logo"
                />{" "}
                Sign in with Facebook
              </button>
            </div>

            <div className="signup-text">
              Don't have an account? <a href="#">Sign up</a>
            </div>
          </div>
        </div>

        <div className="blue-box-container">
          <div className="blue-box">
            <h1>{slides[currentSlide].heading}</h1>
            <p>{slides[currentSlide].description}</p>

            <div className="graph-container">
              <img
                src={slides[currentSlide].graph}
                alt="Graph"
                className={`graph-image graph-${currentSlide + 1}`}
              />
              <img
                src={slides[currentSlide].circle}
                alt="Circle Graph"
                className={`circle-graph circle-${currentSlide + 1}`}
              />
            </div>

            <div className="dots-container">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`dash ${index === currentSlide ? "active" : ""}`}
      onClick={() => setCurrentSlide(index)}
    ></div>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
