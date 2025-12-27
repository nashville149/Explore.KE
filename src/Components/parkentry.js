import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

const ParkEntry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visitorType, setVisitorType] = useState("citizen");
  
  const bookingData = location.state;
  const destination = bookingData?.destination;
  
  const getEntryFee = (destinationName) => {
    const feeMap = {
      "Maasai Mara": { citizen: 500, resident: 1200, tourist: 60 },
      "Amboseli": { citizen: 400, resident: 1000, tourist: 50 },
      "Tsavo": { citizen: 300, resident: 800, tourist: 40 },
      "Lake Nakuru": { citizen: 400, resident: 1000, tourist: 50 },
      "Hell's Gate": { citizen: 200, resident: 600, tourist: 30 }
    };
    return feeMap[destinationName] || { citizen: 300, resident: 800, tourist: 40 };
  };

  const entryFees = getEntryFee(destination?.name);
  const currentFee = entryFees[visitorType];

  const handleProceedToSummary = () => {
    navigate('/booking-summary', {
      state: {
        ...location.state,
        visitorType,
        entryFee: currentFee
      }
    });
  };

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
          Park not found
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
        .entry-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .bg-glow-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          filter: blur(120px);
          animation: pulse 4s ease-in-out infinite;
        }
        .bg-glow-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          filter: blur(120px);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .header {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 500px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cancel-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .cancel-btn:hover {
          color: white;
        }
        .header-title {
          font-size: 20px;
          font-weight: 900;
          color: white;
          font-style: italic;
        }
        .header-title .accent {
          color: #10B981;
          font-style: normal;
        }
        .info-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .ticket-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 500px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        .ticket-header {
          padding: 40px;
          text-align: center;
          border-bottom: 2px dashed rgba(255, 255, 255, 0.2);
          position: relative;
        }
        .ticket-notch-left {
          position: absolute;
          bottom: -16px;
          left: -16px;
          width: 32px;
          height: 32px;
          background: #1A237E;
          border-radius: 50%;
        }
        .ticket-notch-right {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 32px;
          height: 32px;
          background: #1A237E;
          border-radius: 50%;
        }
        .kws-label {
          color: #10B981;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 8px;
        }
        .park-name {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 8px;
          line-height: 0.9;
        }
        .county-name {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-style: italic;
        }
        .ticket-body {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .qr-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .qr-code {
          width: 192px;
          height: 192px;
          background: white;
          padding: 16px;
          border-radius: 24px;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }
        .qr-inner {
          width: 100%;
          height: 100%;
          background: #1A237E;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .qr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          opacity: 0.4;
        }
        .qr-dot {
          width: 16px;
          height: 16px;
          background: #10B981;
          border-radius: 2px;
        }
        .scan-text {
          font-size: 8px;
          color: #10B981;
          font-weight: 700;
          margin-top: 8px;
          animation: pulse 2s ease-in-out infinite;
        }
        .ticket-id {
          margin-top: 16px;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .visitor-selector {
          display: flex;
          background: rgba(0, 0, 0, 0.4);
          padding: 4px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .visitor-btn {
          flex: 1;
          padding: 8px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .visitor-btn.active {
          background: white;
          color: #10B981;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .visitor-btn.inactive {
          background: transparent;
          color: rgba(255, 255, 255, 0.4);
        }
        .pricing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .price-section {
          display: flex;
          flex-direction: column;
        }
        .price-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }
        .price-amount {
          font-size: 2rem;
          font-weight: 900;
          color: white;
        }
        .validity-section {
          text-align: right;
        }
        .validity-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }
        .validity-time {
          font-size: 14px;
          font-weight: 700;
          color: #10B981;
        }
        .pay-btn {
          width: 100%;
          padding: 20px;
          background: linear-gradient(90deg, #10B981, #059669);
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
        }
        .pay-btn:hover {
          transform: scale(1.05);
        }
        .pay-btn:active {
          transform: scale(0.95);
        }
        .footer-info {
          margin-top: 32px;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .footer-text {
          color: rgba(255, 255, 255, 0.2);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .park-name {
            font-size: 2rem;
          }
          .ticket-body {
            padding: 30px;
          }
        }
      `}</style>

      <div className="entry-container">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>

        <div className="header">
          <button onClick={() => navigate(-1)} className="cancel-btn">
            ← Cancel
          </button>
          <h2 className="header-title">
            Gate<span className="accent">Pass</span>
          </h2>
          <div className="info-btn">ℹ️</div>
        </div>

        <div className="ticket-card">
          <div className="ticket-header">
            <div className="ticket-notch-left"></div>
            <div className="ticket-notch-right"></div>
            
            <p className="kws-label">Kenya Wildlife Service</p>
            <h1 className="park-name">{destination.name}</h1>
            <p className="county-name">{destination.county} County</p>
          </div>

          <div className="ticket-body">
            <div className="qr-section">
              <div className="qr-code">
                <div className="qr-inner">
                  <div className="qr-grid">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="qr-dot"></div>
                    ))}
                  </div>
                  <p className="scan-text">SCAN AT GATE</p>
                </div>
              </div>
              <p className="ticket-id">Ticket ID: #EXP-254-990</p>
            </div>

            <div className="visitor-selector">
              {["citizen", "resident", "tourist"].map((type) => (
                <button
                  key={type}
                  onClick={() => setVisitorType(type)}
                  className={`visitor-btn ${visitorType === type ? 'active' : 'inactive'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="pricing-row">
              <div className="price-section">
                <p className="price-label">Entry Fee</p>
                <p className="price-amount">
                  {visitorType === "citizen" ? `Ksh ${currentFee}` : visitorType === "resident" ? `Ksh ${currentFee}` : `$${currentFee}`}
                </p>
              </div>
              <div className="validity-section">
                <p className="validity-label">Validity</p>
                <p className="validity-time">24 Hours</p>
              </div>
            </div>

            <button onClick={handleProceedToSummary} className="pay-btn">
              Continue to Summary
            </button>
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-text">
            Ensure you have your ID/Passport ready at the gate. <br />
            No Cash is accepted at KWS gates.
          </p>
        </div>
      </div>
    </>
  );
};

export default ParkEntry;