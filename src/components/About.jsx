import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import model from "../assets/model.jpg";
import "../components/Header.css";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center container mt-32" id="About">
      {/* Title Section */}
      <motion.div
        className="mb-12 text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About <span className="text-red-600">Me</span>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:gap-20 items-center">
        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="h-[450px] rounded-lg shadow-lg" src={model} alt="model" />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="mt-6 lg:mt-0 lg:ml-10 flex flex-col lg:w-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold">I'm Setu</h1>
          <p className="text-2xl mt-3 text-gray-700">A Web Developer</p>
          <p className="text-md mt-3 text-justify text-gray-600 leading-relaxed">
            I am a web developer who enjoys learning and creating functional, visually appealing websites.
            I am a quick learner who enjoys tackling new challenges and quickly adapting to new technologies.
            As a team player, I am always willing to help others and work together effectively. I am motivated
            by the desire to make a positive impact through my work in web development.
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-3">
            <p>
              <span className="text-indigo-600 font-semibold">Email: </span>
              <a
                href="mailto:setulalchowhan@gmail.com"
                className="hover:text-indigo-400 transition duration-300"
              >
                setulalchowhan@gmail.com
              </a>
            </p>
            <p>
              <span className="text-indigo-600 font-semibold">Place: </span>
              Dhaka, Gulshan, Natunbazar
            </p>
            <p>
              <span className="text-indigo-600 font-semibold">Phone: </span>
              <a
                href="tel:+8801703235224"
                className="hover:text-indigo-400 transition duration-300"
              >
                01703235224
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
