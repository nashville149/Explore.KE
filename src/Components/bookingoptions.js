import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

const BookingOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  // Get data from navigation state
  const bookingData = location.state;
  const destination = bookingData?.destination;

  const handleOptionToggle = (optionId) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleConfirmSelections = () => {
    if (selectedOptions.length === 0) return;
    
    const routeMap = {
      'stay': '/accommodation',
      'drive': '/safari-drive',
      'guide': '/tour-guide',
      'flight': '/flight-booking'
    };
    
    const firstRoute = routeMap[selectedOptions[0]];
    navigate(firstRoute, {
      state: {
        ...bookingData,
        selectedServices: selectedOptions,
        currentServiceIndex: 0
      }
    });
  };

  const options = [
    { id: 'stay', name: 'Luxury Stay', icon: '⛺', desc: 'Tented camps & lodges', price: 'From Ksh 15k' },
    { id: 'drive', name: '4x4 Rental', icon: '🚙', desc: 'Professional safari jeeps', price: 'From Ksh 10k' },
    { id: 'guide', name: 'Local Guide', icon: '🗺️', desc: 'Expert wildlife trackers', price: 'From Ksh 3k' },
    { id: 'flight', name: 'Bush Flight', icon: '🛩️', desc: 'Aero-link connections', price: 'From Ksh 25k' },
  ];

  if (!destination) {
    return (
      <>
        <style>{`
          body, html, #root {
            margin: 0; padding: 0; height: 100%;
            background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%);
            font-family: 'Inter', sans-serif;
          }
        `}</style>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#222',
          fontSize: '1.5rem',
          fontWeight: '700'
        }}>
          Booking data not found
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%);
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .booking-container {
          min-height: 100vh;
          color: white;
          overflow-x: hidden;
          padding: 48px 24px;
          position: relative;
        }
        .bg-effect-1 {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          filter: blur(120px);
        }
        .bg-effect-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.1);
          filter: blur(120px);
        }
        .header-section {
          position: relative;
          z-index: 10;
          max-width: 1024px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 64px;
        }
        .back-btn {
          background: none;
          border: none;
          color: #33AFFF;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 16px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .back-btn:hover {
          opacity: 0.7;
        }
        .main-title {
          font-size: 3rem;
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 8px;
          font-style: italic;
          color: white;
        }
        .main-title .accent {
          color: #33AFFF;
          font-style: normal;
        }
        .subtitle {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 8px;
        }
        .options-grid {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .option-card {
          position: relative;
          padding: 32px;
          border-radius: 40px;
          border: 2px solid;
          cursor: pointer;
          transition: all 0.5s ease;
          overflow: hidden;
        }
        .option-card.selected {
          background: rgba(255, 255, 255, 0.2);
          border-color: #33AFFF;
          box-shadow: 0 0 40px rgba(51, 175, 255, 0.2);
        }
        .option-card.unselected {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .option-card.unselected:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }
        .card-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 128px;
          height: 128px;
          background: rgba(51, 175, 255, 0.1);
          border-radius: 50%;
          filter: blur(48px);
          transition: all 0.3s ease;
        }
        .option-card:hover .card-glow {
          background: rgba(51, 175, 255, 0.2);
        }
        .card-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .card-info {
          flex: 1;
        }
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 24px;
          display: block;
          transition: transform 0.5s ease;
        }
        .option-card:hover .card-icon {
          transform: scale(1.25);
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 8px;
          color: white;
        }
        .card-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          font-style: italic;
          margin-bottom: 16px;
        }
        .card-price {
          color: #33AFFF;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .selection-indicator {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .selection-indicator.selected {
          background: #33AFFF;
          border-color: #33AFFF;
        }
        .selection-indicator.unselected {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .check-mark {
          color: #1A237E;
          font-size: 10px;
          font-weight: 700;
        }
        .footer-section {
          position: relative;
          z-index: 10;
          max-width: 600px;
          margin: 64px auto 0;
          text-align: center;
        }
        .confirm-btn {
          width: 100%;
          padding: 20px;
          border-radius: 25px;
          border: none;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        .confirm-btn.enabled {
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          color: white;
          box-shadow: 0 10px 25px rgba(51, 175, 255, 0.2);
        }
        .confirm-btn.enabled:hover {
          transform: translateY(-4px);
        }
        .confirm-btn.enabled:active {
          transform: scale(0.95);
        }
        .confirm-btn.disabled {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.2);
          cursor: not-allowed;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-note {
          margin-top: 24px;
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }
        .watermark {
          position: fixed;
          bottom: -5%;
          right: -5%;
          opacity: 0.03;
          pointer-events: none;
          font-size: 25vw;
          font-weight: 900;
          font-style: italic;
          color: white;
        }
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="booking-container">
        <div className="bg-effect-1"></div>
        <div className="bg-effect-2"></div>

        <div className="header-section">
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Back to Pass
          </button>
          <h1 className="main-title">
            Enhance Your <span className="accent">Visit</span>
          </h1>
          <p className="subtitle">
            Tailor your experience at {destination.name}
          </p>
        </div>

        <div className="options-grid">
          {options.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => handleOptionToggle(opt.id)}
              className={`option-card ${selectedOptions.includes(opt.id) ? 'selected' : 'unselected'}`}
            >
              <div className="card-glow"></div>

              <div className="card-content">
                <div className="card-info">
                  <span className="card-icon">{opt.icon}</span>
                  <h3 className="card-title">{opt.name}</h3>
                  <p className="card-desc">{opt.desc}</p>
                  <p className="card-price">{opt.price}</p>
                </div>
                
                <div className={`selection-indicator ${selectedOptions.includes(opt.id) ? 'selected' : 'unselected'}`}>
                  {selectedOptions.includes(opt.id) && <span className="check-mark">✓</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-section">
          <button 
            onClick={handleConfirmSelections}
            disabled={selectedOptions.length === 0}
            className={`confirm-btn ${selectedOptions.length > 0 ? 'enabled' : 'disabled'}`}
          >
            Continue with {selectedOptions.length} Service{selectedOptions.length !== 1 ? 's' : ''}
          </button>
          <p className="footer-note">
            All bookings are subject to availability
          </p>
        </div>

        <div className="watermark">BOOK</div>
      </div>
    </>
  );
};

export default BookingOptions;