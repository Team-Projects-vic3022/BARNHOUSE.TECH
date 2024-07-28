import React from "react";
import ProjectsTextSection from "./sections/ProjectsTextSection";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import VideosSection from "./components/VideosSection";
import FurnitureSection from "./components/FurnitureSection";
import Cooperation from "./components/Cooperation";
import TrustUs from "./components/TrustUs";
import EuropeanStandard from "./components/EuropeanStandard";
import { CustomerReviews } from "../components";
import ContactUs from "./components/ContactUs";
import InstagramSocial from "./components/InstagramSocial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsTextSection />
      <FeaturedProjects />
      <VideosSection />
      <FurnitureSection />
      <Cooperation />
      <TrustUs />
      <EuropeanStandard />
      <CustomerReviews />
      <ContactUs />
      <InstagramSocial />
    </>
  );
};

export default Home;
