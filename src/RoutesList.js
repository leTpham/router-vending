import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Candies from "./Candies";

function RoutesList() {
  return (
    <Routes>
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/candies" element={<Candies />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;