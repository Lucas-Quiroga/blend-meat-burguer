import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className=" mt-12 sm:mt-20 lg:my-20 pt-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex-row">
          <div className="h-screen flex justify-end bg-black">
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
              <div>
                <span>MAIL</span>
                <p>blendmeatburger@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
