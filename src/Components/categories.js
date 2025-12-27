import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

function Categories() {
  const { region } = useParams();
  const navigate = useNavigate();

  if (!tourismData[region]) {
    return <div>Region not found</div>;
  }

  const regionData = tourismData[region];
  const categories = regionData.categories;

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
        .categories-container {
          min-height: 100vh;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .back-btn {
          background: none;
          border: none;
          color: #33AFFF;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 3rem;
          font-weight: 900;
          color: #222;
          margin-bottom: 10px;
        }
        .header .blue {
          color: #33AFFF;
        }
        .header p {
          color: #FFB347;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 1000px;
          width: 100%;
        }
        .category-card {
          background: rgba(255 255 255 / 0.15);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255 255 255 / 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          color: #222;
        }
        .category-card:hover {
          transform: translateY(-5px);
          border-color: #33AFFF;
          box-shadow: 0 10px 30px rgba(51, 175, 255, 0.3);
        }
        .category-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        .category-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .category-desc {
          color: #FFB347;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        .category-arrow {
          color: #33AFFF;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="categories-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back to Regions
        </button>

        <div className="header">
          <h1>
            {regionData.name}<span className="blue">.</span>
          </h1>
          <p>Choose your experience type</p>
        </div>

        <div className="categories-grid">
          {Object.entries(categories).map(([key, cat]) => (
            <div
              key={key}
              onClick={() => navigate(`/destinations/${region}/${key}`)}
              className="category-card"
            >
              <span className="category-icon">
                {cat.name.includes("Safari") ? "🦁" : 
                 cat.name.includes("Beach") ? "🏖️" : 
                 cat.name.includes("Mountain") ? "🏔️" : 
                 cat.name.includes("Lake") ? "🏞️" : "📍"}
              </span>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-desc">
                Explore the best of {cat.name} in {regionData.name}
              </p>
              <div className="category-arrow">
                View Destinations →
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;