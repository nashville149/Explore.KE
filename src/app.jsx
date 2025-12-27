import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login.js";
import PersonalDetails from "./Components/PersonalDetails.js";
import Home from "./Components/HomePage.js";
import Regions from "./Components/regions.js";
import Categories from "./Components/categories.js";
import Destinations from "./Components/destinations.js";
import DestinationDetails from "./Components/DestinationDetails.js";
import PlanTrip from "./Components/plantrip.js";
import ParkEntry from "./Components/parkentry.js";
import BookingOptions from "./Components/bookingoptions.js";
import Accommodation from "./Components/accommodation.js";
import SafariDrive from "./Components/safari-drive.js";
import TourGuide from "./Components/tour-guide.js";
import FlightBooking from "./Components/flight-booking.js";
import BookingSummary from "./Components/booking-summary.js";
import TripAdvisory from "./Components/trip-advisory.js";

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
          <Route path="/destination/:region/:category/:id" element={<DestinationDetails />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/parkentry" element={<ParkEntry />} />
          <Route path="/bookingoptions" element={<BookingOptions />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/safari-drive" element={<SafariDrive />} />
          <Route path="/tour-guide" element={<TourGuide />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/trip-advisory" element={<TripAdvisory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
