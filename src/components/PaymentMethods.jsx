import { motion } from "framer-motion";
import { BsCashCoin } from "react-icons/bs";
import { SiMercadopago } from "react-icons/si";
import { AiTwotoneBank } from "react-icons/ai";

const LOGO_URL =
  "https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png";

const PaymentMethod = ({ Icon, name }) => (
  <div className="w-full sm:w-1/3 py-6 flex flex-col justify-center items-center">
    <Icon className="h-32 w-32" />
    <div className="text-black text-center text-xl font-semibold">{name}</div>
  </div>
);

export const PaymentMethods = () => (
  <section className="py-12 sm:py-24 bg-white w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute hidden sm:right-0 sm:mt-[5rem]">
        <img src={LOGO_URL} alt="logo" className="w-64" />
      </div>
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex xl:flex-row flex-col items-center -mx-4 justify-center xl:text-left text-center sm:gap-[6rem]">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-black">
                MEDIOS DE PAGO
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-[700px] mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap sm:-m-4">
              <PaymentMethod Icon={BsCashCoin} name="EFECTIVO" />
              <PaymentMethod Icon={SiMercadopago} name="MERCADO PAGO" />
              <PaymentMethod
                Icon={AiTwotoneBank}
                name="TRANSFERENCIA BANCARIA"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
