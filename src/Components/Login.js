import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // Handle mode change
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setEmail("");
    setPassword("");
    setMessage({ type: "", text: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });
    
    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }
    if (!password.trim()) {
      setMessage({ type: "error", text: "Please enter your password." });
      return;
    }
    
    // Navigate directly to details page
    navigate("/details");
  };

  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          background: rgba(255 255 255 / 0.15);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
          border: 1.5px solid rgba(255 255 255 / 0.3);
          width: 90vw;
          max-width: 380px;
          padding: 30px;
          color: #222;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }
        h1 {
          font-weight: 700;
          font-size: 28px;
          margin: 0 0 8px 0;
          color: #222;
        }
        h1 .blue {
          color: #33AFFF;
        }
        p.subtitle {
          font-weight: 600;
          font-size: 14px;
          color: #FFB347;
          margin: 0 0 24px;
        }
        .toggle {
          display: flex;
          background: rgba(255 255 255 / 0.35);
          border-radius: 28px;
          width: 100%;
          margin-bottom: 24px;
          padding: 5px;
          border: 1.5px solid rgba(255 255 255 / 0.6);
          user-select: none;
        }
        .toggle button {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          border-radius: 28px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          color: #BFBFBF;
          padding: 10px 0;
        }
        .toggle button.active {
          background: #fff;
          color: #FFB347;
          box-shadow: 0 0 10px #FFB347AA;
        }
        label {
          align-self: flex-start;
          font-weight: 700;
          font-size: 14px;
          color: #FFB347;
          margin-bottom: 6px;
        }
        .input-group {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 12px;
          width: 100%;
          padding: 8px 12px;
          margin-bottom: 24px;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
        }
        .input-group:focus-within {
          border-color: #33AFFF;
        }
        .input-group .icon {
          background: #D9D9D9;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-weight: 700;
          color: #555;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          font-size: 18px;
          flex-shrink: 0;
          user-select: none;
        }
        input[type="email"],
        input[type="password"] {
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
          color: #222;
          background: transparent;
          user-select: text;
          min-width: 0;
        }
        .radio-circle {
          width: 20px;
          height: 20px;
          border: 2px solid #33AFFF;
          border-radius: 50%;
          margin-left: 10px;
          position: relative;
          flex-shrink: 0;
        }
        .radio-circle.checked::after {
          content: '';
          position: absolute;
          top: 4px; left: 4px;
          width: 10px; height: 10px;
          background: #33AFFF;
          border-radius: 50%;
        }
        button.signin-btn {
          width: 100%;
          padding: 12px 0;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 14px;
          font-weight: 700;
          font-size: 16px;
          color: white;
          cursor: pointer;
          margin-bottom: 20px;
          transition: filter 0.2s ease;
        }
        button.signin-btn:disabled {
          background: #999;
          cursor: not-allowed;
          filter: none;
        }
        button.signin-btn:hover:not(:disabled) {
          filter: brightness(110%);
        }
        .or-text {
          font-size: 13px;
          color: #555;
          margin-bottom: 16px;
          user-select: none;
        }
        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: white;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 22px;
          user-select: none;
          transition: background 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .social-btn:hover {
          background: #f0f0f0;
        }
        .social-btn.google {
          color: #db4437;
        }
        .social-btn.apple {
          color: #333;
        }
        .terms-link {
          font-size: 12px;
          color: #3378FF;
          text-decoration: underline;
          cursor: pointer;
          user-select: none;
        }
        .terms-link:hover,
        .terms-link:focus {
          color: #235abb;
          outline: none;
        }
        .message {
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          animation: slideIn 0.3s ease;
        }
        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 400px) {
          .container {
            width: 95vw;
            padding: 20px;
          }
          h1 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="container" role="main" aria-label="Login form">
        <h1>
          Explore.<span className="blue">KE</span>
        </h1>
        <p className="subtitle">Your gateway to the Savannah</p>

        <div className="toggle" role="tablist" aria-label="Login or Register toggle">
          <button
            role="tab"
            aria-selected={mode === "login"}
            className={mode === "login" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleModeChange("login");
            }}
            type="button"
            aria-controls="login-form"
            id="login-tab"
          >
            Log In
          </button>
          <button
            role="tab"
            aria-selected={mode === "register"}
            className={mode === "register" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleModeChange("register");
            }}
            type="button"
            aria-controls="register-form"
            id="register-tab"
          >
            Register
          </button>
        </div>

        {message.text && (
          <div className={`message ${message.type}`} role="alert">
            {message.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          aria-labelledby={mode === "login" ? "login-tab" : "register-tab"}
          id={mode === "login" ? "login-form" : "register-form"}
          style={{ width: "100%" }}
          noValidate
        >
          <label htmlFor="email">Email Address</label>
          <div className="input-group">
            <div className="icon" aria-hidden="true">
              G
            </div>
            <input
              id="email"
              type="email"
              placeholder="explorer@ke.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              autoComplete="email"
            />
            <div
              className={`radio-circle ${email.trim() ? "checked" : ""}`}
              aria-label={email.trim() ? "Selected" : "Not selected"}
              role="checkbox"
              aria-checked={email.trim() ? "true" : "false"}
            />
          </div>

          <label htmlFor="password">Password</label>
          <div className="input-group">
            <div className="icon" aria-hidden="true">
              🔒
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
            <div
              className={`radio-circle ${password.trim() ? "checked" : ""}`}
              aria-label={password.trim() ? "Selected" : "Not selected"}
              role="checkbox"
              aria-checked={password.trim() ? "true" : "false"}
            />
          </div>

          <button
            className="signin-btn"
            type="submit"
            disabled={!email.trim() || !password.trim()}
            aria-disabled={!email.trim() || !password.trim()}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="or-text">Or continue with</div>

        <div className="social-buttons" role="group" aria-label="Social sign in options">
          <button
            className="social-btn google"
            aria-label="Sign in with Google"
            type="button"
            onClick={() => alert("Google sign-in coming soon!")}
          >
            G
          </button>
          <button
            className="social-btn apple"
            aria-label="Sign in with Apple"
            type="button"
            onClick={() => alert("Apple sign-in coming soon!")}
          >
            🍎
          </button>
        </div>

        <a href="/" className="terms-link" tabIndex={0}>
          Terms of Service
        </a>
      </div>
    </>
  );
}