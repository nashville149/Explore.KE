import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TripAdvisory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const receiptRef = useRef();
  const bookingData = location.state;
  const destination = bookingData?.destination;
  const travelDate = bookingData?.date;
  const totalAmount = bookingData?.totalAmount || 0;
  const phoneNumber = bookingData?.phoneNumber;
  const selectedServices = bookingData?.selectedServices || [];
  const travelers = bookingData?.travelers || 2;
  const visitorType = bookingData?.visitorType || "citizen";
  const entryFee = bookingData?.entryFee || 0;

  const generateReceiptNumber = () => {
    return `EXP-${Date.now().toString().slice(-8)}`;
  };

  const getCurrentDateTime = () => {
    return new Date().toLocaleString('en-KE', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const downloadReceipt = () => {
    const receiptContent = `
===========================================
           EXPLORE.KE PAYMENT RECEIPT
===========================================

Receipt No: ${generateReceiptNumber()}
Date: ${getCurrentDateTime()}
Phone: ${phoneNumber}

-------------------------------------------
TRIP DETAILS
-------------------------------------------
Destination: ${destination?.name}
Travel Date: ${travelDate}
Travelers: ${travelers}
Visitor Type: ${visitorType}

-------------------------------------------
SERVICES BOOKED
-------------------------------------------
Park Entry Fee: Ksh ${(entryFee * travelers).toLocaleString()}
${selectedServices.includes('stay') ? 'Accommodation: Ksh 60,000\n' : ''}${selectedServices.includes('drive') ? 'Safari Vehicle: Ksh 36,000\n' : ''}${selectedServices.includes('guide') ? 'Tour Guide: Ksh 15,000\n' : ''}${selectedServices.includes('flight') ? 'Scenic Flight: Ksh 20,000\n' : ''}
-------------------------------------------
TOTAL AMOUNT: Ksh ${totalAmount.toLocaleString()}
PAYMENT STATUS: SUCCESSFUL
-------------------------------------------

Thank you for choosing Explore.KE!
For support: info@explore.ke

===========================================
    `;
    
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Explore-KE-Receipt-${generateReceiptNumber()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getAreaInfo = (destName) => {
    const infoMap = {
      "Maasai Mara": {
        entryTime: "6:00 AM",
        checkoutTime: "6:00 PM",
        weather: ["Sunny 28°C", "Partly Cloudy 25°C", "Light Rain 22°C"],
        roadCondition: "Good - Murram roads, 4WD recommended during rainy season",
        advisory: "Peak migration season. Carry warm clothes for early morning game drives. River crossings best viewed 7-10 AM.",
        emergencyContact: "+254 700 123 456"
      },
      "Amboseli": {
        entryTime: "6:00 AM", 
        checkoutTime: "6:00 PM",
        weather: ["Clear 32°C", "Sunny 30°C", "Hot 35°C"],
        roadCondition: "Excellent - Tarmac road to gate, dusty tracks inside park",
        advisory: "Best Kilimanjaro views early morning. Carry dust masks and plenty of water. Elephant herds active near swamps.",
        emergencyContact: "+254 700 234 567"
      },
      "Tsavo": {
        entryTime: "6:00 AM",
        checkoutTime: "6:00 PM", 
        weather: ["Hot 36°C", "Very Hot 38°C", "Warm 33°C"],
        roadCondition: "Fair - Some rough sections, carry spare tire",
        advisory: "Very hot climate. Start early, rest midday. Red elephants best seen at Mudanda Rock. Carry extra fuel.",
        emergencyContact: "+254 700 345 678"
      }
    };
    return infoMap[destName] || {
      entryTime: "6:00 AM",
      checkoutTime: "6:00 PM",
      weather: ["Pleasant 26°C", "Warm 28°C", "Cool 24°C"],
      roadCondition: "Good - Standard vehicle accessible",
      advisory: "Follow park rules and stay on designated tracks. Carry first aid kit.",
      emergencyContact: "+254 700 456 789"
    };
  };

  const areaInfo = getAreaInfo(destination?.name);
  const weatherDays = ["Today", "Tomorrow", "Day 3"];

  if (!destination) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        Trip data not found
      </div>
    );
  }

  return (
    <>
      <style>{`
        body, html, #root { margin: 0; padding: 0; height: 100%; background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%); font-family: 'Inter', sans-serif; }
        .container { min-height: 100vh; color: white; padding: 40px 20px; max-width: 800px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; }
        .success-icon { font-size: 4rem; margin-bottom: 20px; }
        .title { font-size: 2.5rem; font-weight: 900; margin-bottom: 10px; color: #10B981; }
        .subtitle { color: rgba(255,255,255,0.7); margin-bottom: 30px; }
        .info-card { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 25px; margin-bottom: 20px; backdrop-filter: blur(16px); }
        .card-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 15px; color: #33AFFF; display: flex; align-items: center; gap: 10px; }
        .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .info-label { color: rgba(255,255,255,0.8); font-size: 0.9rem; }
        .info-value { font-weight: 600; }
        .weather-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px; }
        .weather-item { background: rgba(255,255,255,0.05); padding: 15px; border-radius: 15px; text-align: center; }
        .weather-day { font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-bottom: 5px; }
        .weather-temp { font-weight: 700; color: #FFB347; }
        .advisory-text { background: rgba(255,183,71,0.1); border-left: 4px solid #FFB347; padding: 15px; border-radius: 10px; margin-top: 15px; }
        .emergency-section { background: rgba(239,68,68,0.1); border: 2px solid #EF4444; border-radius: 20px; padding: 20px; text-align: center; }
        .emergency-title { color: #EF4444; font-weight: 700; margin-bottom: 10px; }
        .emergency-number { font-size: 1.5rem; font-weight: 900; color: white; }
        .done-btn { width: 100%; padding: 18px; background: linear-gradient(90deg, #10B981, #059669); border: none; border-radius: 25px; color: white; font-size: 18px; font-weight: 700; cursor: pointer; margin-top: 30px; }
        .done-btn:hover { transform: scale(1.02); }
        .receipt-card { background: rgba(255,255,255,0.95); color: #1A237E; border-radius: 20px; padding: 30px; margin-bottom: 20px; }
        .receipt-header { text-align: center; border-bottom: 2px solid #1A237E; padding-bottom: 15px; margin-bottom: 20px; }
        .receipt-title { font-size: 1.5rem; font-weight: 900; color: #1A237E; }
        .receipt-number { font-size: 0.9rem; color: #666; margin-top: 5px; }
        .receipt-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .receipt-label { color: #666; }
        .receipt-value { font-weight: 600; color: #1A237E; }
        .receipt-total { background: #1A237E; color: white; padding: 15px; border-radius: 10px; margin-top: 15px; }
        .download-btn { background: #10B981; color: white; border: none; padding: 12px 24px; border-radius: 15px; font-weight: 700; cursor: pointer; margin-right: 15px; }
        .highlight { color: #10B981; font-weight: 700; }
      `}</style>
      
      <div className="container">
        <div className="header">
          <div className="success-icon">✅</div>
          <h1 className="title">Payment Successful!</h1>
          <p className="subtitle">Your trip to {destination.name} is confirmed</p>
        </div>

        <div className="receipt-card" ref={receiptRef}>
          <div className="receipt-header">
            <div className="receipt-title">PAYMENT RECEIPT</div>
            <div className="receipt-number">Receipt No: {generateReceiptNumber()}</div>
            <div className="receipt-number">{getCurrentDateTime()}</div>
          </div>
          
          <div className="receipt-row">
            <span className="receipt-label">Destination:</span>
            <span className="receipt-value">{destination.name}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Travel Date:</span>
            <span className="receipt-value">{travelDate}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Travelers:</span>
            <span className="receipt-value">{travelers} people</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Phone Number:</span>
            <span className="receipt-value">{phoneNumber}</span>
          </div>
          
          <div style={{marginTop: '20px', paddingTop: '15px', borderTop: '2px solid #eee'}}>
            <div className="receipt-row">
              <span className="receipt-label">Park Entry Fee:</span>
              <span className="receipt-value">Ksh {(entryFee * travelers).toLocaleString()}</span>
            </div>
            {selectedServices.includes('stay') && (
              <div className="receipt-row">
                <span className="receipt-label">Accommodation (3 nights):</span>
                <span className="receipt-value">Ksh 60,000</span>
              </div>
            )}
            {selectedServices.includes('drive') && (
              <div className="receipt-row">
                <span className="receipt-label">Safari Vehicle (3 days):</span>
                <span className="receipt-value">Ksh 36,000</span>
              </div>
            )}
            {selectedServices.includes('guide') && (
              <div className="receipt-row">
                <span className="receipt-label">Tour Guide (3 days):</span>
                <span className="receipt-value">Ksh 15,000</span>
              </div>
            )}
            {selectedServices.includes('flight') && (
              <div className="receipt-row">
                <span className="receipt-label">Scenic Flight:</span>
                <span className="receipt-value">Ksh 20,000</span>
              </div>
            )}
          </div>
          
          <div className="receipt-total">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontSize: '1.2rem', fontWeight: '700'}}>TOTAL PAID:</span>
              <span style={{fontSize: '1.5rem', fontWeight: '900'}}>Ksh {totalAmount.toLocaleString()}</span>
            </div>
            <div style={{textAlign: 'center', marginTop: '10px', fontSize: '0.9rem'}}>PAYMENT STATUS: SUCCESSFUL ✅</div>
          </div>
        </div>

        <div className="info-card">
          <div className="card-title">
            🕐 Park Timings
          </div>
          <div className="info-row">
            <span className="info-label">Entry Time:</span>
            <span className="info-value highlight">{areaInfo.entryTime}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Checkout Time:</span>
            <span className="info-value highlight">{areaInfo.checkoutTime}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Travel Date:</span>
            <span className="info-value">{travelDate}</span>
          </div>
        </div>

        <div className="info-card">
          <div className="card-title">
            🌤️ Weather Forecast
          </div>
          <div className="weather-grid">
            {weatherDays.map((day, idx) => (
              <div key={idx} className="weather-item">
                <div className="weather-day">{day}</div>
                <div className="weather-temp">{areaInfo.weather[idx]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card">
          <div className="card-title">
            🛣️ Road Conditions
          </div>
          <div className="info-value">{areaInfo.roadCondition}</div>
        </div>

        <div className="info-card">
          <div className="card-title">
            ⚠️ Important Advisory
          </div>
          <div className="advisory-text">
            {areaInfo.advisory}
          </div>
        </div>

        <div className="emergency-section">
          <div className="emergency-title">🚨 Emergency Contact</div>
          <div className="emergency-number">{areaInfo.emergencyContact}</div>
          <div style={{fontSize: '0.8rem', marginTop: '5px', color: 'rgba(255,255,255,0.7)'}}>
            Available 24/7 for park emergencies
          </div>
        </div>

        <button onClick={downloadReceipt} className="download-btn">
          📄 Download Receipt
        </button>
        <button onClick={() => navigate('/home')} className="done-btn">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default TripAdvisory;