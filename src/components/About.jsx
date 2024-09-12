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
          <p className="text-2xl mt-3 ">A fronted Developer</p>
          <p className="text-md mt-3">
          I am a beginner web developer with a passion for learning new things. I am eager to apply my skills to create beautiful and functional websites. I am a quick learner and I am always up for a challenge. I am a team player and I am always willing to help others. I am passionate about making a difference in the world through web development.
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
