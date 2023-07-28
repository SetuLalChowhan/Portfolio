import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Project />
      <Experience />
      <Footer/>
    </div>
  );
};

export default Home;
