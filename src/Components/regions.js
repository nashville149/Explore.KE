import React from "react";
import { useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismData";

function Regions() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Select a Region</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(tourismData).map(([key, region]) => (
          <button
            key={key}
            onClick={() => navigate(`/categories/${key}`)}
            className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {region.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Regions;
