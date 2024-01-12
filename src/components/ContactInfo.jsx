import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="bg-black items-center flex justify-end h-screen"
      id="contacto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute hidden sm:left-0 sm:mt-[30rem]">
          <img
            src="https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png"
            alt="logo"
            className="w-64"
          />
        </div>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16 mr-[12rem]">
            <div className="mx-auto max-w-lg sm:text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <span
                className="text-4xl  md:text-5xl lg:text-7xl font-bold text-white xl:mr-[10rem] xl:tracking-wide xl:text-center"
                style={{ margin: 0 }}
              >
                COMUNICATE CON <br /> NOSOTROS
              </span>

              <div className="text-white mt-[5rem] flex flex-col gap-8 font-semibold text-xl lg:text-2xl mr-[10rem] md:mr-0">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center">
                    <MdOutlineSmartphone className="mr-2" />
                    <span>CELULAR</span>
                  </div>
                  <p className="mt-2 ml-7">11-3850-1335</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center">
                    <FaInstagram className="mr-2" />
                    <span>INSTAGRAM</span>
                  </div>
                  <p className="mt-2 ml-7">@BLEND_MEET_BURGER</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center">
                    <CiLocationOn className="mr-2" />
                    <span>UBICACIÓN</span>
                  </div>
                  <p className="mt-2 ml-7">CIUDAD MADERO - LA MATANZA</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center">
                    <CiMail className="mr-2" />
                    <span>MAIL</span>
                  </div>
                  <p className="mt-2 ml-7">blendmeatburger@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
