import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [
      "While(Life--): experience+=Learning;",
      "Newbie in Web Developement.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <motion.div
        initial={{
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
        <div className="text-center p-5 lg:p-10">
          <h3 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-black to-gray-500 leading-7 py-4 md:text-5xl max-w-3xl mx-auto px-auto inline-block dark:text-white">
            <span>{text}</span>
            <Cursor cursorColor="#fcab0a" />
          </h3>
          <div className="flex justify-center px-10 cursor-pointer gap-10 mt-10 text-gray-600 md:gap-16 dark:text-gray-500 mx-auto">
            <AiFillLinkedin className="text-3xl lg:text-4xl"/>
            <AiFillInstagram className="text-3xl lg:text-4xl"/>
            <AiFillGithub className="text-3xl lg:text-4xl"/>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-b from-black to-gray-600 rounded-full w-80 h-80 my-8 mx-auto pt-24 overflow-hidden lg:w-100 h-100"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Image src={deved} objectFit="cover" layout="fill" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
