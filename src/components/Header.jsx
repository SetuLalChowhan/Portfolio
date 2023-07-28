import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navText = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experiences",
    "Contact",
  ];
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState("true");

  return (
    <>
      <div
        className=" flex flex-col bg-slate-50 sticky top-0 shadow-md h-14"
        id="Header"
      >
        <div className=" flex justify-between items-center mt-3 ">
          <div className=" ml-24 text-xl " onClick={()=>{setActive("Home")}}>
            <a href="#Home" className="font-semibold">
              Setu
            </a>
          </div>

          <div className=" hidden lg:flex gap-10 mr-32 ">
            {navText.map((i, index) => {
              return (
                <a
                  href={`#${active}`}
                  onClick={() => {
                    setActive(i);
                  }}
                  key={index}
                  className={
                    active === i
                      ? "text-indigo-600 border-b-2 border-b-indigo-600"
                      : "text-black hover:text-indigo-600 hover:border-b-2 hover:border-b-indigo-600 "
                  }
                >
                  <h1>{i}</h1>
                </a>
              );
            })}
          </div>
          <div onClick={() => setMenu(!menu)} className=" flex mr-10 lg:hidden">
            {menu ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <AiOutlineClose size={30} />
            )}
          </div>
        </div>
        <div
          className={
            menu
              ? "hidden  "
              : "flex flex-col gap-8 justify-center items-center mt-4 bg-slate-100  "
          }
        >
          {navText.map((i, index) => {
            return (
              <a
                href={`#${i}`}
                onClick={() => {
                  setActive(i);
                  setMenu(!menu);
                }}
                key={index}
                className={
                  active === i
                    ? "text-indigo-600 border-b-2 border-b-indigo-600"
                    : "text-black hover:text-indigo-600 hover:border-b-2 hover:border-b-indigo-600 "
                }
              >
                <h1>{i}</h1>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
