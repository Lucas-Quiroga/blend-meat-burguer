import { useState } from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu";
import { InvitationModal } from "./InvitationModal";
import { GiCampCookingPot } from "react-icons/gi";
import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Discover new data flow
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline md:hidden">Analytics</span>
            <span className="hidden md:inline mt-10">BLEND MEAT BURGUER</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Experience seamless business integrations and powerful insights with
            our cutting-edge analytic tools.
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="custom-button-colored mt-20 w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              ¡ÚNETE A NOSOTROS!
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard}
              alt="123"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center bg-white h-screen">
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
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
