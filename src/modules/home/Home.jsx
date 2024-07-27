import React from "react";
import FourGridLayoutSection from "../components/FourGridLayoutSection";
import Button from "../components/Button";
import ProjectsTextSection from "./sections/ProjectsTextSection";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import VideosSection from "./components/VideosSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsTextSection />
      <FeaturedProjects />
      <VideosSection />
    </>
  );
};

export default Home;
