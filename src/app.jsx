import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login.js";
import PersonalDetails from "./Components/PersonalDetails.js";
import Home from "./Components/home.js";
import Regions from "./Components/regions.js";
import Categories from "./Components/categories.js";
import Destinations from "./Components/destinations.js";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/categories/:region" element={<Categories />} />
          <Route path="/destinations/:region/:category" element={<Destinations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
