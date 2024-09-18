import React from "react";
import { experienceArray } from "../assets/experience";

const Experience = () => {
  return (
    <div className="mt-10" id="Experiences">
      <div className="text-center">
        <h1 className="text-4xl mb-6">
          Experi<span className="text-4xl mb-6 text-blue-600">ences</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        {experienceArray.map((i, index) => {
          return (
            <div
              className=" flex flex-col lg:flex lg:flex-row lg:gap-10  shadow-lg  lg:hover:scale-105 duration-700  "
              key={index}
            >
              <div className="flex justify-center items-center ">
                <img className="ml-10 h-72" src={i.image} alt={index} />
              </div>
              <div className=" md:w-[730px] lg:mt-10">
                <h1 className="text-3xl">{i.position}</h1>
                <p className="text-2xl text-justify">{i.name}</p>
                <p className="text-lg mt-4 text-justify">{i.Passage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
