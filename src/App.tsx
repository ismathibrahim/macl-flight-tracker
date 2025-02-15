import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import FlightDetails from "./screens/FlightDetails";

const App = () => {
  return (
    <div className="bg-bg-subtle min-h-[100vh]">
      <div className="max-w-md mx-auto h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flight/:number" element={<FlightDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
