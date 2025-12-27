import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Accommodation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const accommodations = [
    { id: 1, name: "Luxury Safari Lodge", type: "Lodge", price: "Ksh 25,000", rating: 4.8, image: "🏨" },
    { id: 2, name: "Tented Camp", type: "Camp", price: "Ksh 15,000", rating: 4.6, image: "⛺" },
    { id: 3, name: "Eco Resort", type: "Resort", price: "Ksh 20,000", rating: 4.7, image: "🌿" }
  ];

  const handleNext = () => {
    const nextServiceIndex = (bookingData?.currentServiceIndex || 0) + 1;
    const selectedServices = bookingData?.selectedServices || [];
    
    if (nextServiceIndex < selectedServices.length) {
      const routeMap = {
        'drive': '/safari-drive',
        'guide': '/tour-guide',
        'flight': '/flight-booking'
      };
      const nextRoute = routeMap[selectedServices[nextServiceIndex]];
      navigate(nextRoute, {
        state: { ...bookingData, currentServiceIndex: nextServiceIndex, selectedAccommodation }
      });
    } else {
      navigate('/parkentry', { state: { ...bookingData, selectedAccommodation } });
    }
  };

  const handleSkip = () => {
    const nextServiceIndex = (bookingData?.currentServiceIndex || 0) + 1;
    const selectedServices = bookingData?.selectedServices || [];
    
    if (nextServiceIndex < selectedServices.length) {
      const routeMap = {
        'drive': '/safari-drive',
        'guide': '/tour-guide',
        'flight': '/flight-booking'
      };
      const nextRoute = routeMap[selectedServices[nextServiceIndex]];
      navigate(nextRoute, {
        state: { ...bookingData, currentServiceIndex: nextServiceIndex }
      });
    } else {
      navigate('/parkentry', { state: bookingData });
    }
  };

  return (
    <>
      <style>{`
        body, html, #root { margin: 0; padding: 0; height: 100%; background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%); font-family: 'Inter', sans-serif; }
        .container { min-height: 100vh; color: white; padding: 40px 20px; }
        .header { text-align: center; margin-bottom: 40px; position: relative; }
        .skip-btn { position: absolute; top: 0; right: 0; background: rgba(255,255,255,0.1); border: none; color: white; padding: 8px 16px; border-radius: 15px; cursor: pointer; font-size: 12px; }
        .title { font-size: 2.5rem; font-weight: 900; margin-bottom: 10px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto 40px; }
        .card { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 30px; cursor: pointer; transition: all 0.3s; border: 2px solid transparent; }
        .card.selected { border-color: #33AFFF; background: rgba(255,255,255,0.2); }
        .card:hover { transform: translateY(-5px); }
        .card-icon { font-size: 3rem; margin-bottom: 15px; }
        .card-name { font-size: 1.5rem; font-weight: 700; margin-bottom: 5px; }
        .card-type { color: rgba(255,255,255,0.7); margin-bottom: 10px; }
        .card-price { color: #33AFFF; font-weight: 700; font-size: 1.2rem; }
        .footer { text-align: center; max-width: 400px; margin: 0 auto; }
        .next-btn { width: 100%; padding: 15px; background: linear-gradient(90deg, #33AFFF, #3F25A3); border: none; border-radius: 25px; color: white; font-weight: 700; cursor: pointer; }
        .next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
      
      <div className="container">
        <div className="header">
          <button onClick={handleSkip} className="skip-btn">Skip</button>
          <h1 className="title">Choose Accommodation</h1>
        </div>
        
        <div className="grid">
          {accommodations.map(acc => (
            <div 
              key={acc.id}
              onClick={() => setSelectedAccommodation(acc.id)}
              className={`card ${selectedAccommodation === acc.id ? 'selected' : ''}`}
            >
              <div className="card-icon">{acc.image}</div>
              <div className="card-name">{acc.name}</div>
              <div className="card-type">{acc.type}</div>
              <div className="card-price">{acc.price}/night</div>
            </div>
          ))}
        </div>
        
        <div className="footer">
          <button 
            onClick={handleNext}
            disabled={!selectedAccommodation}
            className="next-btn"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Accommodation;