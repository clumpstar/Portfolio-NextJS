import Head from "next/head";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";
import Hero from "../components/heroSection";
import Card from "../components/cards";
import Skill from "../components/skills";
import Contact from "../components/contactForm";

import { useEffect, useRef } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [text, count] = useTypewriter({
    words: [
      "While(Life--): experience+=Learning;",
      "Newbie in Web Developement.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hari Ganesh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        <main className="bg-white px-10 md:px-20 lg:px-52 dark:bg-gray-800">

        <div className="min-h-screen">

          <Navbar />

          <section id="Hero">
            <Hero />
          </section>

          <section id="Projects" className="mt-20">
            <h1 className="text-4xl font-black text-center bg-gradient-to-r from-purple-300 to-gray-500 leading-7 bg-clip-text text-transparent py-8 lg:text-6xl">
              Projects
            </h1>

            <div className="flex flex-col lg:flex-wrap lg:flex-row gap-10 mt-7 justify-center items-center">
            <Card
              imageUrl='https://cdn-icons-png.flaticon.com/512/7631/7631097.png'
              title='Password Manager'
              githubLink='https://github.com/clumpstar/Password-Manager.git'
            />
            <Card
              imageUrl='https://cdn-icons-png.flaticon.com/512/7631/7631097.png'
              title='Password Manager'
              githubLink='https://github.com/clumpstar/Password-Manager.git'
            />
            <Card
              imageUrl='https://cdn-icons-png.flaticon.com/512/7631/7631097.png'
              title='Password Manager'
              githubLink='https://github.com/clumpstar/Password-Manager.git'
            />
            <Card
              imageUrl='https://cdn-icons-png.flaticon.com/512/7631/7631097.png'
              title='Password Manager'
              githubLink='https://github.com/clumpstar/Password-Manager.git'
            />
            </div>
          </section>

          <section id="Skills" className="mt-20">
            <h1 className="text-4xl font-black text-center bg-gradient-to-r from-purple-300 to-gray-500 leading-7 bg-clip-text text-transparent py-8 lg:text-6xl">
              Skills
            </h1>

            <div className="flex flex-col font-bold lg:flex-row lg:flex-wrap gap-10 mt-7 justify-center items-center lg:text-xl lg:font-semibold">
              <Skill title="HTML" limit={75} backgroundImage="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"/>
              <Skill title="REACT" limit={60} backgroundImage="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
              <Skill title="PYTHON" limit={90} backgroundImage="https://i.etsystatic.com/32954091/r/il/408155/3673666601/il_570xN.3673666601_oktl.jpg"/>
              <Skill title="C" limit={70} backgroundImage="https://www.interviewbit.com/blog/wp-content/uploads/2021/09/C-2.png"/>
              <Skill title="C++" limit={70} backgroundImage="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"/>
              <Skill title="TailWind CSS" limit={65} backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"/>
            </div>

          </section>

          <section id="Contact" className="mt-24">
            <Contact />
          </section>

          <div className="dark:bg-gray-800 h-16" />
        </div>
      </main>
      </div>
    </div>
  );
}



{/* <nav className="py-10 mb-12 flex justify-between lg:text-xl">
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
                <ul className="flex items-center">
                  <li className="mr-5">
                    {darkMode ? (
                      <FiSun
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-3xl dark:bg-clip-text bg-white dark:text-white"
                      />
                    ) : (
                      <FiMoon
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-3xl dark:bg-clip-text bg-white dark:text-white"
                      />
                    )}
                  </li>
                  <li>
                    <a
                      className="bg-black text-white py-2 px-4 rounded-md ml-8 font-bold dark:bg-white dark:text-black"
                      href="#"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </motion.div>
            </nav> */}






