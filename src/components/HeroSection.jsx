import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Setu from "../assets/setu.jpg";
import "../components/Header.css";

const HeroSection = () => {
  return (
    <div
      className=" flex flex-col  lg:flex lg:flex-row lg:justify-evenly mt-12 "
      id="Home"
    >
      <div className="flex flex-col mt-8 justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start  ">
        <h1 className=" text-6xl">Hi,There</h1>
        <h1 className=" text-3xl lg:text-5xl mt-5 mb-5">
          I am Setulal <span className="text-red-700">Chowhan</span>
        </h1>
        <p className=" text-2xl mb-5 ">I am into <span className="text-2xl text-indigo-600 font-semibold">Web Development</span></p>

        <a
          className="text-2xl  bg-indigo-600 text-white rounded-xl flex justify-center items-center w-36 mb-5"
          href="https://drive.google.com/file/d/1oCsXY7WwaZsjZxv2XXZYnvhKGFARhGHy/view?usp=sharing"
          target="blank"
        >
          My CV
        </a>
        <div className="flex gap-4">
          <a
            className="hover:opacity-75 duration-300"
            href="https://www.linkedin.com/in/setulal-chowhan-182301222/"
            target="blank"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            className="hover:opacity-75 duration-300"
            href="https://github.com/SetuLalChowhan?tab=repositories"
            target="blank"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            className="hover:opacity-75 duration-300"
            href="https://www.facebook.com/setu.chowhan.3"
            target="blank"
          >
            <AiFillFacebook size={30} />
          </a>
          <a
            className="hover:opacity-75 duration-300"
            href="https://www.instagram.com/setulalchowhan/"
            target="blank"
          >
            <AiFillInstagram size={30} />
          </a>
        </div>
      </div>
      <div className=" mt-6 lg:mt-0 lg:mr-44 flex justify-center items-center">
        <img className=" rounded-lg h-96" src={Setu} alt="setu" />
      </div>
    </div>
  );
};

export default HeroSection;
