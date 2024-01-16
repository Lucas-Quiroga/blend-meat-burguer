import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedScrollDownArrow from "./AnimatedScrollDownArrow";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section
      className="flex h-screen bg-cover place-items-center justify-center items-center"
      id="inicio"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
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
        >
          <div className="text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 ">
            ¡LO HACEMOS SIMPLE!
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AnimatedScrollDownArrow />
        </motion.div>
      </div>
    </section>
  );
};
