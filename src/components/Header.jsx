import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "../components/Header.css"; // Ensure you have proper styles in this file

const Header = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experiences",
    "Contact",
  ];
  
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setActive("Home")}>
          <a href="#Home">Setu</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`transition-colors duration-300 ${
                active === item
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col items-center bg-gray-100 shadow-md py-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`block py-2 text-lg transition-colors duration-300 ${
                active === item
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
