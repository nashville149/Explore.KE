import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
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
          max-width: 600px;
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
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 100%;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        label {
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
          padding: 8px 12px;
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
        }
        input, select, textarea {
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
          color: #222;
          background: transparent;
          min-width: 0;
        }
        textarea {
          resize: none;
          padding: 8px 12px;
          border-radius: 12px;
          background: #fff;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
        }
        textarea:focus {
          border-color: #33AFFF;
        }
        button.submit-btn {
          width: 100%;
          padding: 12px 0;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 14px;
          font-weight: 700;
          font-size: 16px;
          color: white;
          cursor: pointer;
          margin-top: 20px;
          transition: filter 0.2s ease;
        }
        button.submit-btn:hover {
          filter: brightness(110%);
        }
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .container {
            width: 95vw;
            padding: 20px;
          }
        }
      `}</style>

      <div className="container">
        <h1>
          Explore.<span className="blue">KE</span>
        </h1>
        <p className="subtitle">Complete Your Profile</p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-group">
              <div className="icon">👤</div>
              <input type="text" placeholder="Enter your full name" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-group">
              <div className="icon">📱</div>
              <input type="tel" placeholder="+254 7..." />
            </div>
          </div>

          <div className="form-group">
            <label>Age</label>
            <div className="input-group">
              <div className="icon">🎂</div>
              <input type="number" placeholder="25" />
            </div>
          </div>

          <div className="form-group">
            <label>Nationality</label>
            <div className="input-group">
              <div className="icon">🌍</div>
              <select>
                <option>Kenyan</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Tell us about yourself</label>
            <textarea rows="3" placeholder="I love exploring new places..."></textarea>
          </div>

          <div className="form-group full-width">
            <button type="submit" className="submit-btn">
              Continue to Explore
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;