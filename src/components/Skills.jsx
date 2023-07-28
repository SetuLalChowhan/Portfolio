import React from "react";
import skillArray from "../assets/skill";
import '../components/Header.css'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 " id="Skills">
      <h1 className="text-5xl">Skills & <span className=" text-yellow-600">Abilities</span></h1>
      <div className=" grid grid-cols-5 gap-10 container mt-10">
        {skillArray.map((i, index) => {
          return (
            <div
              key={index}
              className="  bg-slate-50  border-1 shadow-md border-black lg:flex flex-col justify-center items-center hover:scale-125 duration-700 "
            >
              <img className="h-32 w-40 object-contain" src={i.image} alt={i.name} />
              <h1>{i.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
