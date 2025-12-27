import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismdata";

function Categories() {
  const { region } = useParams();
  const navigate = useNavigate();

  const categories = tourismData[region].categories;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">
        Select a Category in {tourismData[region].name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => navigate(`/destinations/${region}/${key}`)}
            className="p-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
