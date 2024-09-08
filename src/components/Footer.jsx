import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

import "../components/Header.css";

const Footer = () => {
  const navText = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experiences",
  ];

  const [active, setActive] = useState("Home");
  return (
    <div>
      <div
        className=" flex flex-col lg:flex lg:flex-row lg:justify-around mt-14   bg-gray-200"
        id="Contact"
      >
        <div className="mt-4">
          <h1 className="text-2xl mb-3 text-indigo-500">Setu's Portfolio</h1>
          <p className="text-xl">
            Thank you for visiting my personal portfolio website
          </p>
          <p className="text-xl">Connect with me over socials.</p>
          <p className="hidden lg:flex mt-12">
            © Copyright 2023 - Setulal Chowhan
          </p>
        </div>
        <div className="flex lg:justify-center lg:items-center flex-col mt-4">
          <h1 className="text-2xl mb-3 text-indigo-500">Quick Links</h1>
          {navText.map((i, index) => {
            return (
              <a
                className="text-lg hover:text-indigo-500 duration-300 "
                key={index}
                href={`#${active}`}
                onClick={() => {
                  setActive(i);
                }}
              >
                <h1>{i}</h1>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col lg:justify-center lg:items-center mt-6 lg:-mt-6">
          <h1 className="text-2xl mb-3 text-indigo-500 ">Contact Me</h1>
          <div>
            <div className="flex lg:flex lg:justify-center lg:items-center">
              <AiFillPhone className=" mt-1 lg:mt-0" />
              <p>01703235224</p>
            </div>
            <div className=" flex  lg:flex lg:justify-center lg:items-center">
              <AiOutlineMail className=" mt-1 lg:mt-0" />
              <p>setulalchowhan@gmail.com</p>
            </div>
            <div className="flex lg:flex lg:justify-center lg:items-center">
              <MdLocationOn className=" mt-1 lg:mt-0 " />
              <p>Dhaka,Gulshan,Natunbazar</p>
            </div>
          </div>
          <div className="flex mt-3 lg:mt-8 gap-4">
            <a
              className=" hover:opacity-75 duration-300"
              href="https://www.facebook.com/setu.chowhan.3/"
              target="blank"
            >
              <AiFillFacebook size={30} />
            </a>
            <a
              className=" hover:opacity-75 duration-300"
              href="https://www.instagram.com/setulalchowhan/"
              target="blank"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              className=" hover:opacity-75 duration-300"
              href="https://www.linkedin.com/in/setulal-chowhan-182301222/"
              target="blank"
            >
              {" "}
              <AiFillLinkedin size={30} />
            </a>
            <a
              className=" hover:opacity-75 duration-300"
              href="https://github.com/SetuLalChowhan?tab=repositories"
              target="blank"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>
        <div className=" mt-4 lg:mt-0 flex lg:hidden">
          {" "}
          <p>© Copyright 2023 - Setulal Chowhan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
