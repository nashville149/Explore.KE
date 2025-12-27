import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TourGuide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    { id: 1, name: "John Kimani", specialty: "Wildlife Expert", experience: "8 years", price: "Ksh 5,000", image: "👨‍🏫" },
    { id: 2, name: "Mary Wanjiku", specialty: "Bird Watching", experience: "6 years", price: "Ksh 4,500", image: "👩‍🏫" },
    { id: 3, name: "David Mwangi", specialty: "Cultural Tours", experience: "10 years", price: "Ksh 5,500", image: "👨‍🎓" }
  ];

  const handleNext = () => {
    const nextServiceIndex = (bookingData?.currentServiceIndex || 0) + 1;
    const selectedServices = bookingData?.selectedServices || [];
    
    if (nextServiceIndex < selectedServices.length) {
      const routeMap = {
        'stay': '/accommodation',
        'drive': '/safari-drive',
        'flight': '/flight-booking'
      };
      const nextRoute = routeMap[selectedServices[nextServiceIndex]];
      navigate(nextRoute, {
        state: { ...bookingData, currentServiceIndex: nextServiceIndex, selectedGuide }
      });
    } else {
      navigate('/parkentry', { state: { ...bookingData, selectedGuide } });
    }
  };

  const handleSkip = () => {
    const nextServiceIndex = (bookingData?.currentServiceIndex || 0) + 1;
    const selectedServices = bookingData?.selectedServices || [];
    
    if (nextServiceIndex < selectedServices.length) {
      const routeMap = {
        'stay': '/accommodation',
        'drive': '/safari-drive',
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
        .card-specialty { color: rgba(255,255,255,0.7); margin-bottom: 5px; }
        .card-experience { color: rgba(255,255,255,0.6); margin-bottom: 10px; font-size: 0.9rem; }
        .card-price { color: #33AFFF; font-weight: 700; font-size: 1.2rem; }
        .footer { text-align: center; max-width: 400px; margin: 0 auto; }
        .next-btn { width: 100%; padding: 15px; background: linear-gradient(90deg, #33AFFF, #3F25A3); border: none; border-radius: 25px; color: white; font-weight: 700; cursor: pointer; }
        .next-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
      
      <div className="container">
        <div className="header">
          <button onClick={handleSkip} className="skip-btn">Skip</button>
          <h1 className="title">Choose Your Guide</h1>
        </div>
        
        <div className="grid">
          {guides.map(guide => (
            <div 
              key={guide.id}
              onClick={() => setSelectedGuide(guide.id)}
              className={`card ${selectedGuide === guide.id ? 'selected' : ''}`}
            >
              <div className="card-icon">{guide.image}</div>
              <div className="card-name">{guide.name}</div>
              <div className="card-specialty">{guide.specialty}</div>
              <div className="card-experience">{guide.experience} experience</div>
              <div className="card-price">{guide.price}/day</div>
            </div>
          ))}
        </div>
        
        <div className="footer">
          <button 
            onClick={handleNext}
            disabled={!selectedGuide}
            className="next-btn"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default TourGuide;