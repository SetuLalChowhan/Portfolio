import React from "react";
import { educationArray } from "../assets/education";
import "../components/Header.css";

const Education = () => {
  return (
    <div className=" mt-24" id="Education">
      <div className="text-center">
        <h1 className="text-5xl">
          My <span className=" text-indigo-600 ">Education</span>
        </h1>
        <p className="mt-4 mb-20 text-lg ">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="container flex flex-col gap-5">
        {educationArray.map((i, index) => {
          return (
            <div
              key={index}
              className=" lg:ml-20 flex flex-col justify-center lg:justify-start  lg:flex lg:flex-row lg:gap-7   shadow-md lg:hover:scale-105 hover:scale-100 duration-700 "
            >
              <div className=" flex justify-center items-center">
                <img
                  className=" lg:w-96 object-contain"
                  src={i.image}
                  alt={i.name}
                />
              </div>
              <div className=" mt-4">
                <h1 className=" text-xl lg:text-2xl font-semibold">
                  {i.degree}
                </h1>
                <p className=" text-lg lg:text-xl">{i.name}</p>
                <p className=" text-md lg:text-lg">{i.passing_year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
