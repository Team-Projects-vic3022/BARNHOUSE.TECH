import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects, Services } from "./modules";
import { Navigation, Footer } from "./modules/components";
import Article from "./modules/article/Article";
import SingleProductPage from "./modules/singleProduct/SingleProductPage";
import MobileNavigation from "./modules/components/MobileNavigation";
import { useLocation } from "react-router-dom";
import useScrollToTop from "./lib/useScrollToTop";

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    setMobileNav(false);
  }, [location]);

  return (
    <>
      <Navigation setMobileNav={setMobileNav} mobileNav={mobileNav} />
      <MobileNavigation mobileNav={mobileNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProductPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
