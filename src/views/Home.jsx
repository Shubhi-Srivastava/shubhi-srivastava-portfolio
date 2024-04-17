import React from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import dev from "../assets/dev.png";
import resumePDF from "../assets/resume.pdf";

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Shubhi_Srivastava_Resume.pdf";
    link.click();
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url('${cloud}'`, backgroundSize: "cover" }}
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span className=" text-white">Hi, I am Shubhi</motion.span>
              <span className="block text-teal-300 z-0 lg:inline italic">
                <Typical
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Back End Developer",
                    1000,
                    "Database Engineer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>

            <div className="flex md:justify-start">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
  <button
    onClick={handleDownloadResume}
    className="w-full md:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-700 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
    style={{ width: "300px" }} 
  >
    Download Resume
  </button>
</div>


            </div>
          </div>
          <img
            src={dev}
            alt="dev"
            style={{
              borderRadius: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              maxWidth: "50%",
              maxHeight: "50%",
            }}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
