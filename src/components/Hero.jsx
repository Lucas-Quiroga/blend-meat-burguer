import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="flex bg-[url('https://res.cloudinary.com/dncmrwppr/image/upload/v1704826511/image4_rd9qda.jpg')] h-screen bg-cover place-items-center justify-center items-center"
      id="home"
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
              className="custom-button-colored text-sm sm:mt-20 w-36 h-12 sm:w-52  sm:h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 "
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
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
