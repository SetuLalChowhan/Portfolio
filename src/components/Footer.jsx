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
    <footer className="bg-gray-800 text-white py-10" id="Contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-around">
          {/* Portfolio Info */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold text-indigo-500">Setu's Portfolio</h1>
            <p className="text-lg mt-2">Thank you for visiting my personal portfolio website.</p>
            <p className="text-lg">Connect with me over socials.</p>
            <p className="mt-12 text-sm">© Copyright 2023 - Setulal Chowhan</p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-2xl font-semibold text-indigo-500">Quick Links</h1>
            <nav className="flex flex-col mt-4">
              {navText.map((i, index) => (
                <a
                  className="text-lg hover:text-indigo-300 duration-300 my-1"
                  key={index}
                  href={`#${i}`} // Adjusted to navigate to the correct section
                  onClick={() => setActive(i)}
                >
                  {i}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-semibold text-indigo-500">Contact Me</h1>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <AiFillPhone className="mr-2 text-indigo-300" />
                <p>01703235224</p>
              </div>
              <div className="flex items-center mb-2">
                <AiOutlineMail className="mr-2 text-indigo-300" />
                <p>setulalchowhan@gmail.com</p>
              </div>
              <div className="flex items-center mb-2">
                <MdLocationOn className="mr-2 text-indigo-300" />
                <p>Dhaka, Gulshan, Natunbazar</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start mt-4 gap-4">
              <a
                className="hover:opacity-75 duration-300"
                href="https://www.facebook.com/setu.chowhan.3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook size={30} />
              </a>
              <a
                className="hover:opacity-75 duration-300"
                href="https://www.instagram.com/setulalchowhan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                className="hover:opacity-75 duration-300"
                href="https://www.linkedin.com/in/setulal-chowhan-182301222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={30} />
              </a>
              <a
                className="hover:opacity-75 duration-300"
                href="https://github.com/SetuLalChowhan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
