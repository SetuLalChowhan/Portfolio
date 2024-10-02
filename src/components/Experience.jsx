import React from "react";
import { experienceArray } from "../assets/experience";

const Experience = () => {
  return (
    <section className="mt-16 container" id="Experiences" >
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">
          <span className="text-blue-600">Experience</span>s
        </h2>
      </div>
      <div className="space-y-12">
        {experienceArray.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start p-6 bg-white shadow-lg rounded-lg transform transition duration-700 hover:scale-105"
          >
            <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
              <img
                className="h-64 w-auto object-cover rounded-lg"
                src={experience.image}
                alt={`${experience.name} logo`}
              />
            </div>
            <div className="w-full lg:w-2/3 lg:ml-0">
              <h3 className="text-3xl font-semibold">{experience.position}</h3>
              <p className="text-xl font-medium text-gray-600 mt-2">
                {experience.name}
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                {experience.Passage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
