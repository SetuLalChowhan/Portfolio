import React from "react";
import model from "../assets/model.jpg";
import "../components/Header.css"

const About = () => {
  return (
    <div className="flex flex-col mt-32 justify-center items-center" id="About">
      <div className=" mb-12 text-5xl">
        {" "}
        About <span className="text-red-600 text-5xl">Me</span>{" "}
      </div>
      <div className="flex flex-col lg:flex lg:flex-row  lg:gap-20">
        <div className=" flex justify-center items-center lg:flex">
          <img className=" h-[450px]" src={model} alt="model" />
        </div>
        <div className=" mt-6 ml-6 lg:ml-0  lg:mt-0  flex flex-col  lg:w-[600px]">
          <h1 className="text-4xl">I'm Setu</h1>
          <p className="text-2xl mt-3 ">A Web Developer</p>
          <p className="text-md mt-3 text-justify">
          I am a web developer who enjoys learning and creating functional, visually appealing websites. I am a quick learner who enjoys tackling new challenges and quickly adapting to new technologies. As a team player, I am always willing to help others and work together effectively. I am motivated by the desire to make a positive impact through my work in web development.
          </p>
          <p className="mb-2 mt-2">
            <span className=" text-indigo-600 font-semibold">Email: </span>
            setulalchowhan@gmail.com
          </p>
          <p className="mb-2">
            <span className=" text-indigo-600 font-semibold">Place: </span>
            Dhaka,Gulshan,Natunbazar
          </p>
          <p>
            <span className=" text-indigo-600 font-semibold">Phone: </span>
            01703235224
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
