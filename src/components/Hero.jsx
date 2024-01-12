import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import AnimatedScrollDownArrow from "./AnimatedScrollDownArrow";
import "../styles/Hero.css";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="flex h-screen bg-cover place-items-center justify-center items-center"
      id="inicio"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className=" bg-black  font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4 text-center mx-auto justify-center">
            <span className="text-7xl sm:text-8xl md:text-10xl lg:text-7xl xl:text-8xl md:inline mt-0 lg:leading-tight lg:letter-spacing lg:whitespace-nowrap text-center mx-auto justify-center">
              BLEND MEAT BURGER
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 justify-center">
            <div
              className="custom-button-colored text-sm sm:mt-20 w-36 h-12 sm:w-52  sm:h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 "
              onClick={() => setIsModalOpen(true)}
            >
              ¡ÚNETE A NOSOTROS!
            </div>
          </div>
          <AnimatedScrollDownArrow />
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
