import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourismData } from "../Data/tourismData";

function Destinations() {
  const { region, category } = useParams();
  const navigate = useNavigate();

  const destinations = tourismData[region].categories[category].destinations;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">
        Destinations in {tourismData[region].categories[category].name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destinations.map((place) => (
          <div
            key={place.id}
            onClick={() =>
              navigate(`/destination/${region}/${category}/${place.id}`)
            }
            className="p-4 bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{place.name}</h3>
            <p className="text-gray-600">{place.county}</p>
            <p className="text-yellow-500">⭐ {place.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;

