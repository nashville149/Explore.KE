import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/categories/${regionName.toLowerCase()}`);
  };

  const handleSearch = () => {
    alert("Search functionality coming soon!");
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
        .home-container {
          min-height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(255 255 255 / 0.1);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255 255 255 / 0.2);
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #222;
        }
        .logo .blue {
          color: #33AFFF;
        }
        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 20px;
        }
        .hero h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 20px;
          color: #222;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .hero p {
          font-size: 1.2rem;
          color: #FFB347;
          margin-bottom: 40px;
          max-width: 600px;
        }
        .search-container {
          position: relative;
          max-width: 500px;
          width: 100%;
          margin-bottom: 60px;
        }
        .search-input {
          width: 100%;
          padding: 15px 20px;
          border: none;
          border-radius: 25px;
          background: rgba(255 255 255 / 0.9);
          font-size: 16px;
          outline: none;
        }
        .search-btn {
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          padding: 0 20px;
          background: linear-gradient(90deg, #33AFFF, #3F25A3);
          border: none;
          border-radius: 20px;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
        .regions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
        }
        .region-card {
          background: rgba(255 255 255 / 0.15);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255 255 255 / 0.3);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .region-card:hover {
          transform: translateY(-5px);
        }
        .region-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          display: block;
        }
        .region-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }
        .region-desc {
          color: #FFB347;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .nav {
            padding: 15px 20px;
          }
          .logo {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="home-container">
        <nav className="nav">
          <h1 className="logo">
            Explore.<span className="blue">KE</span>
          </h1>
          <div>👤</div>
        </nav>

        <div className="hero">
          <h1>Discover Magical Kenya</h1>
          <p>From the heights of Mt. Kenya to the white sands of Diani Beach</p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search your next adventure..."
              className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">Search</button>
          </div>

          <div className="regions-grid">
            <div onClick={() => handleRegionClick('nairobi')} className="region-card">
              <span className="region-icon">🏙️</span>
              <h3 className="region-name">Nairobi</h3>
              <p className="region-desc">The Green City in the Sun</p>
            </div>
            
            <div onClick={() => handleRegionClick('coast')} className="region-card">
              <span className="region-icon">🏖️</span>
              <h3 className="region-name">Coast</h3>
              <p className="region-desc">Diani, Mombasa & Lamu Beaches</p>
            </div>
            
            <div onClick={() => handleRegionClick('rift-valley')} className="region-card">
              <span className="region-icon">🦒</span>
              <h3 className="region-name">Rift Valley</h3>
              <p className="region-desc">Maasai Mara & Great Lakes</p>
            </div>
            
            <div onClick={() => handleRegionClick('central')} className="region-card">
              <span className="region-icon">🏔️</span>
              <h3 className="region-name">Central</h3>
              <p className="region-desc">Mt. Kenya & Coffee Highlands</p>
            </div>
            
            <div onClick={() => handleRegionClick('eastern')} className="region-card">
              <span className="region-icon">🐘</span>
              <h3 className="region-name">Eastern</h3>
              <p className="region-desc">Amboseli & Tsavo Wilds</p>
            </div>
            
            <div onClick={() => handleRegionClick('northern')} className="region-card">
              <span className="region-icon">🌵</span>
              <h3 className="region-name">Northern</h3>
              <p className="region-desc">Lake Turkana & Desert Magic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;