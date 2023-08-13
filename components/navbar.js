import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Add scroll event listener to close the menu when scrolling
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="py-4 lg:py-10 mb-12 flex justify-between lg:text-xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-black to-gray-500 font-burtons lg:text-4xl dark:text-white">
          Zerofy<b>.Dev</b>
        </h1>
      </motion.div>

      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Hamburger menu for mobile */}
        <div className="lg:hidden relative z-10">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Transparent card-like menu for mobile */}
          {isOpen && (
            <div className="absolute top-10 -left-20 w-full bg-white rounded-lg py-6 pr-28 pl-16 shadow-md z-20 font-semibold text-lg">
              <ul className="space-y-2">
                <li>
                  <Link
                    activeClass="active"
                    to="Hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Navigation links for large screens */}
        <ul className="hidden lg:flex items-center space-x-6 mt-4 lg:mt-0">
          <li>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <a
          className="bg-black text-white py-2 px-4 rounded-md ml-8 font-bold dark:bg-white dark:text-black"
          href="#"
        >
          Resume
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;