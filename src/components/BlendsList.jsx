import React from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu/index";
import { GiCampCookingPot } from "react-icons/gi/index";
import { CiCircleInfo } from "react-icons/ci/index";
import "../styles/BlendList.css";

const blends = [
  "ROAST BEEF + TAPA DE ASADO",
  "ROAST BEEF + OJO DE BIFE + BIFE DE CHORIZO",
  "OJO DE BIFE + BIFE DE CHORIZO",
  "ROAST BEEF + VACÍO",
  "ROAST BEEF + TAPA DE ASADO + VACIO",
];

const BlendList = ({ blends }) => {
  return (
    <ol className="flex flex-col gap-2 text-xl sm:list-decimal font-semibold  text-center">
      {blends.map((blend, index) => (
        <li
          className={`sm:ml-4 ${
            blend === "ROAST BEEF + OJO DE BIFE + BIFE DE CHORIZO"
              ? "sm:pl-6"
              : ""
          }`}
          key={index}
        >
          {blend}
        </li>
      ))}
    </ol>
  );
};

const Combos = () => {
  return (
    <section
      className="relative overflow-x-hidden overflow-y-hidden"
      id="blends"
    >
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="relative flex justify-center bg-white h-screen w-screen">
          <div className="flex justify-center items-center flex-col mx-auto">
            <h3 className="mb-10 text-4xl font-bold sm:text-6xl lg:text-7xl text-center">
              <LuChefHat className="relative ml-1 -rotate-12 " />
              NUESTROS BLENDS
            </h3>
            <BlendList blends={blends} />

            <GiCampCookingPot className="w-48 h-36 mt-10 sm:mt-0 sm:w-56 sm:h-80 mx-auto" />

            <div className="text-center mt-10 hidden sm:block">
              <span className=" text-sm  sm:text-lg flex items-center gap-2 bg-gray-300 rounded-lg py-2 px-2 sm:px-2 sm:py-2 sm:mx-auto">
                <CiCircleInfo className="hidden sm:block h-10 sm:w-10 " />
                ¿Sabías que podés hacer tu blend personalizado? <br />
                Coméntanos tus tipos de carne ideal y te cotizamos.
              </span>
            </div>
          </div>
          <div className="absolute hidden lg:block bottom-0 right-10">
            <img
              src="https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png"
              alt="logo"
              className="w-64"
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1705353350">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Combos;
