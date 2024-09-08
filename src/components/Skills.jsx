import React from "react";
import skillArray from "../assets/skill";
import '../components/Header.css'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 " id="Skills">
      <h1 className="text-5xl mb-3">Skills & <span className=" text-yellow-600">Abilities</span></h1>
      <div className=" grid grid-cols-4 lg:grid-cols-5 lg:gap-10 gap-6 container mt-10">
        {skillArray.map((i, index) => {
          return (
            <div
              key={index}
              className="  bg-slate-50 shadow-md   md:flex md:justify-center md:items-center flex-col justify-center items-center hover:scale-125 duration-700 "
            >
              <img className=" h-20 w-28 object-contain" src={i.image} alt={i.name} />
              <h1 className="flex justify-center items-center">{i.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
