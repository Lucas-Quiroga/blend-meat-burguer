import React from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu";
import { GiCampCookingPot } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { PiKnifeFill } from "react-icons/pi";

const Combos = () => {
  return (
    <section className="relative ">
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="relative  left-[10rem] top-[0rem] z-50 -rotate-6 flex flex-col">
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
        <div className="relative flex justify-center bg-white h-screen">
          <div className="flex justify-center flex-col mx-auto">
            <h3 className="mb-10 font-bold text-4xl text-center">
              <LuChefHat className="relative ml-12 -rotate-12" />
              NUESTROS BLENDS
            </h3>

            <ol className="flex flex-col gap-2 list-decimal font-semibold text-xl text-center">
              <li className="ml-4">ROAST BEEF + TAPA DE ASADO</li>
              <li className="ml-4 pl-6">
                ROAST BEEF + OJO DE BIFE + BIFE DE CHORIZO
              </li>
              <li className="ml-4">OJO DE BIFE + BIFE DE CHORIZO</li>
              <li className="ml-4">ROAST BEEF + VACÍO</li>
              <li className="ml-4">ROAST BEEF + TAPA DE ASADO + VACIO</li>
            </ol>
            <GiCampCookingPot className="w-56 h-80 mx-auto" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Combos;
