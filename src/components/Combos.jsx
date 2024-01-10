import React from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu";
import { GiCampCookingPot } from "react-icons/gi";

const Combos = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 10, zIndex: 20 }}
        animate={{ opacity: 1, y: 0, zIndex: 20 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="relative flex justify-center bg-white h-screen">
          <div className="flex justify-center flex-col mx-auto">
            <h3 className="mb-10 font-bold text-4xl">
              <LuChefHat className="relative ml-12 -rotate-12" /> NUESTROS
              BLENDS
            </h3>

            <ol className="flex flex-col gap-2 list-decimal font-semibold text-xl">
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
