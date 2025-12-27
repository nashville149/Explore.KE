import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PlanTrip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDestination = location.state?.destination;
  
  const [tripName, setTripName] = useState(
    selectedDestination ? `My ${selectedDestination.name} Adventure` : "My Kenyan Adventure"
  );
  
  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [currency, setCurrency] = useState("KSH");
  
  const activities = selectedDestination?.activities || [
    "Game Drives", "Photography", "Bird Watching", "Nature Walks", "Cultural Tours"
  ];

  const freeActivities = ["Nature Walks", "Photography", "Bird Watching", "Hiking", "Scenic Views"];
  const paidActivities = ["Game Drives", "Guided Tours", "Boat Rides", "Cultural Visits", "Safari Tours"];

  const handleProceedToBooking = () => {
    navigate('/bookingoptions', {
      state: {
        destination: selectedDestination,
        date: selectedDate,
        travelers,
        currency,
        activities
      }
    });
  };

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
        .plan-container {
          min-height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
        }
        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .back-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 20px;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .back-btn:hover {
          color: white;
        }
        .logo {
          font-size: 24px;
          font-weight: 900;
          color: #222;
        }
        .logo .accent {
          color: #33AFFF;
          font-style: normal;
        }
        .save-btn {
          padding: 10px 20px;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .save-btn:hover {
          transform: scale(1.05);
        }
        .main-content {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .booking-section {
          padding: 40px;
          overflow-y: auto;
        }
        .trip-title {
          background: transparent;
          border: none;
          outline: none;
          font-size: 2.5rem;
          font-weight: 900;
          color: #222;
          width: 100%;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 10px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .trip-title:focus {
          color: #33AFFF;
          border-bottom-color: #33AFFF;
        }
        .subtitle {
          color: #FFB347;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 40px;
          font-style: italic;
        }
        .form-section {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          padding: 30px;
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 30px;
        }
        .section-title {
          color: #FFB347;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
        }
        .form-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: #33AFFF;
          background: rgba(255, 255, 255, 0.15);
        }
        .currency-select {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .currency-btn {
          flex: 1;
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .currency-btn.active {
          background: #33AFFF;
          border-color: #33AFFF;
        }
        .travelers-control {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
        }
        .control-btn {
          background: none;
          border: none;
          color: #33AFFF;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .travelers-count {
          font-weight: 700;
          font-size: 18px;
          color: white;
        }
        .activities-section {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(30px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .activity-category {
          margin-bottom: 25px;
        }
        .category-title {
          color: #FFB347;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .activity-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .activity-icon {
          margin-right: 12px;
          font-size: 16px;
        }
        .activity-name {
          color: white;
          font-size: 14px;
          font-weight: 600;
        }
        .free-badge {
          background: #10B981;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: auto;
        }
        .paid-badge {
          background: #F59E0B;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: auto;
        }
        .proceed-section {
          background: rgba(51, 175, 255, 0.2);
          border-radius: 20px;
          padding: 25px;
          border: 1px solid rgba(51, 175, 255, 0.3);
          margin-top: auto;
        }
        .proceed-title {
          color: white;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .proceed-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          margin-bottom: 20px;
        }
        .proceed-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 25px;
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .proceed-btn:hover {
          transform: scale(1.05);
        }
        .proceed-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        @media (max-width: 768px) {
          .main-content {
            grid-template-columns: 1fr;
          }
          .trip-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="plan-container">
        <nav className="nav-bar">
          <div className="nav-left">
            <button onClick={() => navigate(-1)} className="back-btn">←</button>
            <h1 className="logo">Plan<span className="accent">.Trip</span></h1>
          </div>
          <button className="save-btn">Save Plan</button>
        </nav>

        <div className="main-content">
          <div className="booking-section">
            <header>
              <input 
                type="text" 
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="trip-title"
              />
              <p className="subtitle">Plan your Kenyan adventure</p>
            </header>

            <div className="form-section">
              <h3 className="section-title">Travel Details</h3>
              
              <div className="form-group">
                <label className="form-label">Travel Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Currency Preference</label>
                <div className="currency-select">
                  {['KSH', 'USD', 'EUR'].map(curr => (
                    <button 
                      key={curr} 
                      onClick={() => setCurrency(curr)}
                      className={`currency-btn ${currency === curr ? 'active' : ''}`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Number of Travelers</label>
                <div className="travelers-control">
                  <button 
                    className="control-btn"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  >
                    -
                  </button>
                  <span className="travelers-count">{travelers.toString().padStart(2, '0')}</span>
                  <button 
                    className="control-btn"
                    onClick={() => setTravelers(travelers + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="activities-section">
            <div className="activity-category">
              <div className="category-title">
                <span>🆓</span> Free Activities
              </div>
              <div className="activity-list">
                {activities.filter(activity => 
                  freeActivities.some(free => activity.toLowerCase().includes(free.toLowerCase()))
                ).map((activity, idx) => (
                  <div key={idx} className="activity-item">
                    <span className="activity-icon">🌿</span>
                    <span className="activity-name">{activity}</span>
                    <span className="free-badge">Free</span>
                  </div>
                ))}
                {activities.filter(activity => 
                  freeActivities.some(free => activity.toLowerCase().includes(free.toLowerCase()))
                ).length === 0 && (
                  <div className="activity-item">
                    <span className="activity-icon">🌿</span>
                    <span className="activity-name">Nature Walks</span>
                    <span className="free-badge">Free</span>
                  </div>
                )}
              </div>
            </div>

            <div className="activity-category">
              <div className="category-title">
                <span>💰</span> Paid Activities
              </div>
              <div className="activity-list">
                {activities.filter(activity => 
                  paidActivities.some(paid => activity.toLowerCase().includes(paid.toLowerCase()))
                ).map((activity, idx) => (
                  <div key={idx} className="activity-item">
                    <span className="activity-icon">🎯</span>
                    <span className="activity-name">{activity}</span>
                    <span className="paid-badge">Paid</span>
                  </div>
                ))}
                {activities.filter(activity => 
                  !freeActivities.some(free => activity.toLowerCase().includes(free.toLowerCase()))
                ).map((activity, idx) => (
                  <div key={idx} className="activity-item">
                    <span className="activity-icon">🎯</span>
                    <span className="activity-name">{activity}</span>
                    <span className="paid-badge">Paid</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="proceed-section">
              <div className="proceed-title">Ready to Book?</div>
              <div className="proceed-desc">Choose additional services for your trip</div>
              <button 
                onClick={handleProceedToBooking}
                className="proceed-btn"
                disabled={!selectedDate}
              >
                Select Additional Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanTrip;