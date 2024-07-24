import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Services } from "./modules";
import { Navigation, Footer } from "./modules/components";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
