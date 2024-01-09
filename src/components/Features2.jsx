import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { LuChefHat } from "react-icons/lu";
import { GiCampCookingPot } from "react-icons/gi";

export const Features2 = () => (
  <section className="w-full mt-12 sm:mt-20 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative w-screen flex justify-center mx-auto bg-white h-screen">
        <div className="flex justify-center flex-col mx-auto">
          <h3 className="mb-10 font-bold text-4xl text-center">
            ¿CÓMO HAGO MI COMPRA?
          </h3>

          <ol className="flex flex-col gap-2 list-decimal font-semibold text-xl ">
            <li className="ml-4">
              COMUNÍCATE CON NOSOTROS VÍA WHATSAPP O INSTRAGRAM
            </li>
            <li className="ml-4 ">DETÁLLANOS TU PEDIDO</li>
            <li className="ml-4">
              HACER EL PEDIDO CON MÍNIMO 12 DÍAS DE ANTICIPACIÓN
            </li>
            <li className="ml-4">
              PROGRAMAR CITA A CONVENIR PARA ENTREGAR LA MERCADERÍA
            </li>
          </ol>
          <h3 className="mb-10 font-bold text-4xl mx-auto mt-[7rem]">
            ¡Y LISTO! A DELEITAR
          </h3>
        </div>
      </div>
    </motion.div>
  </section>
);
