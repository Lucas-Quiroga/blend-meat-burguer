import React from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu";
import { GiCampCookingPot } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { PiKnifeFill } from "react-icons/pi";

const Combos = () => {
  return (
    <section className="relative" id="blends">
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="relative flex justify-center bg-white h-screen w-screen">
          <div className="absolute hidden xl:flex h-screen left-[4rem] top-[7rem] -rotate-6  flex-col">
            <div className="flex">
              <BsStars
                className="items-center justify-center relative top-3 w-12 h-32"
                color="orange"
              />
              <p className="font-semibold text-center">
                ¿SABÍAS QUE PODES <br />
                HACER TU{" "}
                <span className="underline">
                  BLEND
                  <br />
                  PERSONALIZADO
                </span>
                ?
                <br />
                COMÉNTANOS TUS
                <br /> CORTES DE CARNE IDEAL
                <br />Y TE COTIZAMOS
              </p>
              <BsStars
                className="items-center justify-center relative top-3 w-12 h-32"
                color="orange"
              />
            </div>
            <PiKnifeFill className="w-16 h-16 ml-[12rem] " />
          </div>
          <div className="flex justify-center items-center flex-col mx-auto">
            <h3 className="mb-10 text-4xl font-bold sm:text-6xl lg:text-7xl text-center">
              <LuChefHat className="relative ml-1 -rotate-12 " />
              NUESTROS BLENDS
            </h3>

            <ol className="flex flex-col gap-2 text-xl sm:list-decimal font-semibold  text-center">
              <li className="sm:ml-4">ROAST BEEF + TAPA DE ASADO</li>
              <li className="sm:ml-4 sm:pl-6">
                ROAST BEEF + OJO DE BIFE + BIFE DE CHORIZO
              </li>
              <li className="sm:ml-4">OJO DE BIFE + BIFE DE CHORIZO</li>
              <li className="sm:ml-4">ROAST BEEF + VACÍO</li>
              <li className="sm:ml-4">ROAST BEEF + TAPA DE ASADO + VACIO</li>
            </ol>
            <GiCampCookingPot className="w-48 h-36 mt-10 sm:mt-0 sm:w-56 sm:h-80 mx-auto" />
          </div>
          <div className="absolute hidden sm:block bottom-0 right-10">
            <img
              src="https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png"
              alt="logo"
              className="w-64"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Combos;
