import React from "react";
import skillArray from "../assets/skill";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import "../components/Header.css";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16" id="Skills">
      {/* Title Section */}
      <motion.h1
        className="text-5xl mb-8 font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Skills & <span className="text-yellow-600">Abilities</span>
      </motion.h1>

      {/* Skill Grid Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {skillArray.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 shadow-md p-4 rounded-md flex flex-col justify-center items-center transition-transform duration-500 hover:scale-110 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            {/* Skill Image */}
            <img
              className="h-20 w-28 object-contain mb-3"
              src={skill.image}
              alt={skill.name}
            />
            {/* Skill Name */}
            <h1 className="text-lg font-semibold text-gray-800">{skill.name}</h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
