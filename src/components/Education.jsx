import React from "react";
import { educationArray } from "../assets/education";
import "../components/Header.css";

const Education = () => {
  return (
    <div className="mt-24 container" id="Education">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          My <span className="text-indigo-600">Education</span>
        </h1>
        <p className="mt-4 mb-10 text-lg italic">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {educationArray.map((i, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:gap-7 bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex justify-center items-center">
              <img className="lg:w-48 w-36 object-contain" src={i.image} alt={i.name} />
            </div>
            <div className="mt-4 lg:mt-0">
              <h1 className="text-xl lg:text-2xl font-semibold">{i.degree}</h1>
              <p className="text-lg lg:text-xl text-gray-700">{i.name}</p>
              <p className="text-md lg:text-lg text-gray-500">{i.passing_year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
