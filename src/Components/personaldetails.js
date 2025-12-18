import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nationality, setNationality] = useState("");

  const handleContinue = () => {
    if (fullName && nationality) {
      navigate("/home");
    } else {
      alert("Please fill in all details");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Personal Details</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nationality"
          className="w-full p-3 mb-6 border border-gray-300 rounded"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <button
          onClick={handleContinue}
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;
