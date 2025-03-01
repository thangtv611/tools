import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutComponent from "./components/Layout";

import WorkoutTimer from "./pages/WorkoutTimer/WorkoutTimer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workout" element={<WorkoutTimer />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
};

export default App;
