import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookingSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [days, setDays] = useState(3);

  const destination = bookingData?.destination;
  const selectedServices = bookingData?.selectedServices || [];
  const entryFee = bookingData?.entryFee || 0;
  const visitorType = bookingData?.visitorType || "citizen";
  const travelers = bookingData?.travelers || 2;
  const travelDate = bookingData?.date;

  const getServicePrice = (serviceId) => {
    const prices = {
      'stay': 20000 * days,
      'drive': 12000 * days,
      'guide': 5000 * days,
      'flight': 28000
    };
    return prices[serviceId] || 0;
  };

  const calculateTotal = () => {
    let total = entryFee * travelers;
    selectedServices.forEach(service => {
      total += getServicePrice(service);
    });
    return total;
  };

  const handleMpesaPayment = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/trip-advisory', {
        state: {
          ...bookingData,
          totalAmount: calculateTotal(),
          phoneNumber
        }
      });
    }, 2000);
  };

  if (!destination) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        Booking data not found
      </div>
    );
  }

  return (
    <>
      <style>{`
        body, html, #root { margin: 0; padding: 0; height: 100%; background: linear-gradient(135deg, #1A237E 0%, #673AB7 40%, #FFC107 100%); font-family: 'Inter', sans-serif; }
        .container { min-height: 100vh; color: white; padding: 40px 20px; max-width: 800px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; }
        .title { font-size: 2.5rem; font-weight: 900; margin-bottom: 10px; }
        .subtitle { color: rgba(255,255,255,0.7); margin-bottom: 30px; }
        .summary-card { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 30px; margin-bottom: 20px; backdrop-filter: blur(16px); }
        .section-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 15px; color: #33AFFF; }
        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .detail-label { color: rgba(255,255,255,0.8); }
        .detail-value { font-weight: 600; }
        .service-item { background: rgba(255,255,255,0.05); padding: 15px; border-radius: 15px; margin-bottom: 10px; }
        .service-name { font-weight: 700; margin-bottom: 5px; }
        .service-details { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-bottom: 5px; }
        .service-price { color: #33AFFF; font-weight: 700; }
        .total-section { background: rgba(51,175,255,0.2); border-radius: 20px; padding: 25px; margin: 20px 0; border: 2px solid #33AFFF; }
        .total-row { display: flex; justify-content: space-between; font-size: 1.5rem; font-weight: 900; }
        .payment-section { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 30px; }
        .phone-input { width: 100%; padding: 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 15px; color: white; font-size: 16px; margin-bottom: 20px; }
        .phone-input::placeholder { color: rgba(255,255,255,0.5); }
        .pay-btn { width: 100%; padding: 18px; background: linear-gradient(90deg, #10B981, #059669); border: none; border-radius: 25px; color: white; font-size: 18px; font-weight: 700; cursor: pointer; transition: all 0.3s; }
        .pay-btn:hover { transform: scale(1.02); }
        .pay-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .days-selector { display: flex; align-items: center; gap: 15px; margin: 15px 0; }
        .days-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 8px 12px; border-radius: 10px; cursor: pointer; }
        .days-btn:hover { background: rgba(255,255,255,0.2); }
        .mpesa-logo { text-align: center; margin-bottom: 20px; font-size: 2rem; }
      `}</style>
      
      <div className="container">
        <div className="header">
          <h1 className="title">Booking Summary</h1>
          <p className="subtitle">Review your trip details and complete payment</p>
        </div>

        <div className="summary-card">
          <div className="section-title">Trip Details</div>
          <div className="detail-row">
            <span className="detail-label">Destination:</span>
            <span className="detail-value">{destination.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Travel Date:</span>
            <span className="detail-value">{travelDate}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Travelers:</span>
            <span className="detail-value">{travelers} people</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Visitor Type:</span>
            <span className="detail-value">{visitorType}</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="section-title">Duration</div>
          <div className="days-selector">
            <span>Trip Duration:</span>
            <button onClick={() => setDays(Math.max(1, days - 1))} className="days-btn">-</button>
            <span style={{fontWeight: '700', fontSize: '1.2rem'}}>{days} days</span>
            <button onClick={() => setDays(days + 1)} className="days-btn">+</button>
          </div>
        </div>

        <div className="summary-card">
          <div className="section-title">Park Entry Fee</div>
          <div className="service-item">
            <div className="service-name">{destination.name} Entry</div>
            <div className="service-details">{travelers} travelers × {visitorType} rate</div>
            <div className="service-price">
              {visitorType === 'tourist' ? `$${entryFee * travelers}` : `Ksh ${(entryFee * travelers).toLocaleString()}`}
            </div>
          </div>
        </div>

        {selectedServices.length > 0 && (
          <div className="summary-card">
            <div className="section-title">Selected Services</div>
            {selectedServices.includes('stay') && (
              <div className="service-item">
                <div className="service-name">Accommodation</div>
                <div className="service-details">{days} nights stay</div>
                <div className="service-price">Ksh {getServicePrice('stay').toLocaleString()}</div>
              </div>
            )}
            {selectedServices.includes('drive') && (
              <div className="service-item">
                <div className="service-name">Safari Vehicle</div>
                <div className="service-details">{days} days rental</div>
                <div className="service-price">Ksh {getServicePrice('drive').toLocaleString()}</div>
              </div>
            )}
            {selectedServices.includes('guide') && (
              <div className="service-item">
                <div className="service-name">Tour Guide</div>
                <div className="service-details">{days} days service</div>
                <div className="service-price">Ksh {getServicePrice('guide').toLocaleString()}</div>
              </div>
            )}
            {selectedServices.includes('flight') && (
              <div className="service-item">
                <div className="service-name">Flight</div>
                <div className="service-details">Round trip</div>
                <div className="service-price">Ksh {getServicePrice('flight').toLocaleString()}</div>
              </div>
            )}
          </div>
        )}

        <div className="total-section">
          <div className="total-row">
            <span>Total Amount:</span>
            <span>Ksh {calculateTotal().toLocaleString()}</span>
          </div>
        </div>

        <div className="payment-section">
          <div className="mpesa-logo">💰 Send Money Payment</div>
          <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px', marginBottom: '20px', textAlign: 'center'}}>
            <div style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '5px'}}>Send money to:</div>
            <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#10B981'}}>0707231360</div>
            <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '5px'}}>Amount: Ksh {calculateTotal().toLocaleString()}</div>
          </div>
          <input
            type="tel"
            placeholder="Enter your phone number for confirmation"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="phone-input"
          />
          <button
            onClick={handleMpesaPayment}
            disabled={isProcessing || !phoneNumber}
            className="pay-btn"
          >
            {isProcessing ? "Confirming Payment..." : "Confirm Payment Sent"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;