import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io/index";
import "../styles/Combos.css";

const LOGO_URL =
  "https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png";

export const HowToBuy = () => (
  <section
    className="relative h-screen w-full  sm:mt-0  mx-auto flex flex-col justify-center"
    id="comprar"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="custom-shape-divider-top-1705354012">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="absolute hidden xl:block lg:right-0  xl:mt-[30rem]">
        <img src={LOGO_URL} alt="logo" className="w-64" />
      </div>
      <div className=" w-screen flex justify-center mx-auto bg-white h-screen">
        <div className="flex justify-center flex-col mx-auto">
          <h3 className="text-2xl mt-10 sm:text-4xl mb-16 font-bold lg:text-7xl text-center">
            ¿CÓMO HAGO MI COMPRA?
          </h3>

          <ol className="flex flex-col  gap-5 xl:gap-2 sm:list-decimal font-semibold text-xl lg:text-2xl">
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
          <h3 className="mb-10 font-bold text-2xl sm:text-4xl mx-auto mt-[7rem] text-center ">
            ¡Y LISTO! <br />
            <IoMdCheckmarkCircleOutline className="h-20 w-20 sm:h-32 sm:w-32 mx-auto pt-10" />
          </h3>
        </div>
      </div>
    </motion.div>
    <div className="custom-shape-divider-bottom-1705354306">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
);
