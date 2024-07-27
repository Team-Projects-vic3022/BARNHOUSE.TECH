import React from "react";
import FourGridLayoutSection from "../components/FourGridLayoutSection";
import Button from "../components/Button";
import ProjectsTextSection from "./sections/ProjectsTextSection";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsTextSection />
      <FeaturedProjects />
    </>
  );
};

export default Home;
