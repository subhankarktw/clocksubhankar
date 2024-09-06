import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Sharmodule/Navbar";
import Footer from "../Sharmodule/Footer";
import StopWatch from "../Components/StopWatch";
import TimeDisplay from "../Components/WorldClock";
import Introduction from "../Components/Intro";
export default function Rout() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/WorldClock" element={<TimeDisplay />} />
          <Route path="/Stopwatch" element={<StopWatch />} />
          <Route path="/" element={<Introduction/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
