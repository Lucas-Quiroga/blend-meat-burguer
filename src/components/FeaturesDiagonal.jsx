import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-screen flex justify-end  bg-black h-screen">
          <div className="flex justify-center flex-col ">
            <h3 className="mb-10 font-bold text-4xl text-center text-white">
              COMUNICATE CON NOSOTROS
            </h3>

            <div className="text-white">
              <div>
                <span>CELULAR</span>
                <p>11-3850-1335</p>
              </div>
              <div>
                <span>INSTAGRAM</span>
                <p>@BLEND_MEET_BURGER</p>
              </div>
              <div>
                <span>UBICACIÓN</span>
                <p>CIUDAD MADERO - LA MATANZA</p>
              </div>
            </div>
            <h3 className="mb-10 font-bold text-4xl mx-auto mt-[7rem]">
              ¡Y LISTO! A DELEITAR
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
