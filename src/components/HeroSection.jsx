import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Setu from "../assets/setu.jpg";
import "../components/Header.css";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly mt-12 p-4" id="Home">
      {/* Left Section - Intro Text */}
      <div className="flex flex-col mt-8 justify-center items-center lg:items-start lg:mt-0 text-center lg:text-left">
        
        {/* Greeting Text */}
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, There
        </motion.h1>

        {/* Name and Profession */}
        <motion.h1
          className="text-3xl lg:text-5xl mt-5 mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          I am Setulal <span className="text-red-700">Chowhan</span>
        </motion.h1>

        {/* Web Developer Text */}
        <motion.p
          className="text-2xl mb-5 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          I am passionate about{" "}
          <span className="text-indigo-600 font-semibold"> Web Development</span>
        </motion.p>

        {/* CV Button */}
        <motion.a
          href="https://drive.google.com/file/d/1P5VFVyXdJOA66ZFXth345x7uTMTUEq38/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl bg-indigo-600 text-white rounded-xl flex justify-center items-center w-36 mb-5 hover:bg-indigo-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          My CV
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <a className="hover:opacity-75 transition duration-300" href="https://www.linkedin.com/in/setulal-chowhan-182301222/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} />
          </a>
          <a className="hover:opacity-75 transition duration-300" href="https://github.com/SetuLalChowhan?tab=repositories" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={30} />
          </a>
          <a className="hover:opacity-75 transition duration-300" href="https://www.facebook.com/setu.chowhan.3" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size={30} />
          </a>
          <a className="hover:opacity-75 transition duration-300" href="https://www.instagram.com/setulalchowhan/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={30} />
          </a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        className="mt-6 lg:mt-0 lg:mr-44 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <img className="rounded-lg h-96 shadow-lg hover:shadow-2xl transition-shadow duration-500" src={Setu} alt="Setu" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
