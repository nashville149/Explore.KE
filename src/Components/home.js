import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Where do you want to explore?</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => navigate("/regions")}
          className="w-64 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Explore by Region
        </button>
        <button
          onClick={() => alert("Favorites not implemented yet")}
          className="w-64 p-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Favorites
        </button>
        <button
          onClick={() => alert("Profile not implemented yet")}
          className="w-64 p-3 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Home;
