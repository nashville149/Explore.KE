import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

function Destinations() {
  const { region, category } = useParams();
  const navigate = useNavigate();

  if (!tourismData[region] || !tourismData[region].categories[category]) {
    return <div>Category not found</div>;
  }

  const categoryData = tourismData[region].categories[category];
  const destinations = categoryData.destinations;

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
        .destinations-container {
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
          font-size: 2.5rem;
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
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          max-width: 1200px;
          width: 100%;
        }
        .destination-card {
          background: rgba(255 255 255 / 0.15);
          border-radius: 20px;
          padding: 25px;
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255 255 255 / 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          color: #222;
        }
        .destination-card:hover {
          transform: translateY(-5px);
          border-color: #33AFFF;
          box-shadow: 0 10px 30px rgba(51, 175, 255, 0.3);
        }
        .destination-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .destination-county {
          color: #FFB347;
          font-size: 0.9rem;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .destination-rating {
          color: #33AFFF;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .destination-activities {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .activity-tag {
          background: rgba(51, 175, 255, 0.2);
          color: #33AFFF;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }
          .destinations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="destinations-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back to Categories
        </button>

        <div className="header">
          <h1>
            {categoryData.name}<span className="blue">.</span>
          </h1>
          <p>in {tourismData[region].name}</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((place) => (
            <div
              key={place.id}
              onClick={() => navigate(`/destination/${region}/${category}/${place.id}`)}
              className="destination-card"
            >
              <h3 className="destination-name">{place.name}</h3>
              <p className="destination-county">{place.county} County</p>
              <p className="destination-rating">⭐ {place.rating}/5.0</p>
              <div className="destination-activities">
                {place.activities.map((activity, idx) => (
                  <span key={idx} className="activity-tag">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Destinations;