import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { LuChefHat } from "react-icons/lu";
import { GiCampCookingPot } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const HowToBuy = () => (
  <section
    className="w-full mt-12 sm:mt-20 lg:my-20 pt-4 mx-auto flex flex-col justify-center"
    id="comprar"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute hidden lg:right-0 lg:mt-[30rem]">
        <img
          src="https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png"
          alt="logo"
          className="w-64"
        />
      </div>
      <div className=" w-screen flex justify-center mx-auto bg-white h-screen">
        <div className="flex justify-center flex-col mx-auto">
          <h3 className="text-4xl mb-16 font-bold lg:text-7xl text-center">
            ¿CÓMO HAGO MI COMPRA?
          </h3>

          <ol className="flex flex-col gap-5 xl:gap-2 sm:list-decimal font-semibold text-xl lg:text-2xl">
            <li className="ml-4 lg:ml-10">
              COMUNÍCATE CON NOSOTROS VÍA WHATSAPP O INSTRAGRAM
            </li>
            <li className="ml-4 lg:ml-10 ">DETÁLLANOS TU PEDIDO</li>
            <li className="ml-4 lg:ml-10">
              HACER EL PEDIDO CON MÍNIMO 12 HORAS DE ANTICIPACIÓN
            </li>
            <li className="ml-4 lg:ml-10">
              PROGRAMAR CITA A CONVENIR PARA ENTREGAR LA MERCADERÍA
            </li>
          </ol>
          <h3 className="mb-10 font-bold text-4xl mx-auto mt-[7rem] text-center ">
            ¡Y LISTO! <br />
            <IoMdCheckmarkCircleOutline className="h-32 w-32 mx-auto pt-10" />
          </h3>
        </div>
      </div>
    </motion.div>
  </section>
);
