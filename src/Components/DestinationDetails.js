import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

function DestinationDetails() {
  const { region, category, id } = useParams();
  const navigate = useNavigate();

  const destination = tourismData[region]?.categories[category]?.destinations.find(
    (d) => d.id === parseInt(id)
  );

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
          Destination not found
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
        .details-container {
          min-height: 100vh;
          color: white;
          position: relative;
        }
        .hero-section {
          height: 60vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%);
        }
        .nav-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px;
        }
        .nav-btn {
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background: white;
          color: black;
        }
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px;
          background: linear-gradient(to top, rgba(26, 35, 126, 0.9), transparent);
          z-index: 10;
        }
        .badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-right: 10px;
          margin-bottom: 15px;
        }
        .badge-primary {
          background: #33AFFF;
          color: white;
        }
        .badge-secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          color: white;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          margin: 0;
          line-height: 0.9;
        }
        .hero-title .accent {
          color: #33AFFF;
          font-style: normal;
        }
        .content-section {
          padding: 60px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
        }
        .section-title {
          color: #FFB347;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 20px;
        }
        .description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 40px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          text-align: center;
        }
        .stat-label {
          color: rgba(255, 255, 255, 0.3);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 5px;
        }
        .stat-value {
          color: white;
          font-weight: 700;
          font-size: 14px;
        }
        .tip-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 30px;
        }
        .tip-title {
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .tip-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          line-height: 1.5;
          font-style: italic;
        }
        .booking-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 40px;
          padding: 40px;
          position: sticky;
          top: 40px;
        }
        .price-section {
          margin-bottom: 30px;
        }
        .price-label {
          color: #FFB347;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }
        .price {
          font-size: 3rem;
          font-weight: 900;
          color: white;
          margin-bottom: 30px;
        }
        .booking-details {
          margin-bottom: 30px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
        }
        .detail-label {
          color: rgba(255, 255, 255, 0.6);
        }
        .detail-value {
          color: white;
          font-weight: 600;
        }
        .book-btn {
          width: 100%;
          padding: 20px;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .book-btn:hover {
          transform: scale(1.05);
        }
        .secure-text {
          text-align: center;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .activities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .activity-tag {
          background: rgba(51, 175, 255, 0.2);
          color: #33AFFF;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .content-section {
            grid-template-columns: 1fr;
            padding: 40px 20px;
            gap: 40px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="details-container">
        <div className="hero-section">
          <div className="nav-overlay">
            <button onClick={() => navigate(-1)} className="nav-btn">
              ←
            </button>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="nav-btn">♥</button>
              <button className="nav-btn">📤</button>
            </div>
          </div>

          <div className="hero-content">
            <div>
              <span className="badge badge-primary">{destination.county}</span>
              <span className="badge badge-secondary">⭐ {destination.rating} Rating</span>
            </div>
            <h1 className="hero-title">
              {destination.name}<span className="accent">.</span>
            </h1>
          </div>
        </div>

        <div className="content-section">
          <div>
            <section>
              <h3 className="section-title">About this journey</h3>
              <p className="description">
                Experience the breathtaking beauty of {destination.name} in {destination.county} County. 
                This destination offers a unique blend of adventure and tranquility, perfect for 
                travelers looking to immerse themselves in the authentic Kenyan landscape.
              </p>
            </section>

            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Vibe</p>
                <p className="stat-value">Adventurous</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Best Time</p>
                <p className="stat-value">June - Oct</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Entry</p>
                <p className="stat-value">Ksh 500+</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Rating</p>
                <p className="stat-value">{destination.rating}/5.0</p>
              </div>
            </div>

            <section className="tip-section">
              <h3 className="tip-title">Activities Available</h3>
              <div className="activities-list">
                {destination.activities.map((activity, idx) => (
                  <span key={idx} className="activity-tag">
                    {activity}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="booking-card">
            <div className="price-section">
              <p className="price-label">Estimated Cost</p>
              <div className="price">Free</div>
            </div>

            <div className="booking-details">
              <div className="detail-row">
                <span className="detail-label">Local Guide</span>
                <span className="detail-value">Optional</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Transport</span>
                <span className="detail-value">Available</span>
              </div>
            </div>

            <button onClick={() => navigate('/plantrip', { state: { destination } })} className="book-btn">
              Book Adventure
            </button>
            
            <p className="secure-text">
              Secure payments powered by Explore.KE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationDetails;