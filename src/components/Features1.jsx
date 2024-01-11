import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-black mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="h-screen">
          <div className="relative text-center mt-[10rem] sm:ml-[8rem] sm:mb-[5rem] sm:top-[10rem]">
            <span className="text-white text-5xl font-semibold">COMBOS</span>
            <p className="text-white text-sm relative sm:left-9">
              LO HACEMOS SIMPLE
            </p>
            <div className="absolute hidden sm:block top-0 left-0">
              <img
                src="https://res.cloudinary.com/dncmrwppr/image/upload/v1705005350/logo-removebg-preview_e0khrf.png"
                alt="logo"
                className="w-64"
              />
            </div>
          </div>
          <div className="flex mt-[8rem] sm:mt-0 sm:gap-10 sm:justify-end sm:mr-[14rem]">
            <div>
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://res.cloudinary.com/dncmrwppr/image/upload/v1704922273/image3_jhaji0.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[35rem]"
                />

                <h3 className="mt-4 text-lg font-bold text-white sm:text-xl underline text-center">
                  BOX I
                </h3>

                <p className="mt-2 max-w-sm text-white text-center">
                  BOLSA DE 10 KG
                </p>
              </a>
            </div>
            <div>
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://res.cloudinary.com/dncmrwppr/image/upload/v1704922133/image1_fyhofo.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[35rem]"
                />

                <h3 className="mt-4 text-lg font-bold text-white sm:text-xl underline text-center">
                  BOX II
                </h3>

                <p className="mt-2 max-w-sm text-white text-center">BOLLOS</p>
              </a>
            </div>
            <div>
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://res.cloudinary.com/dncmrwppr/image/upload/v1704922180/image2_hk9nmd.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[35rem]"
                />

                <h3 className="mt-4 text-lg font-bold text-white sm:text-xl underline text-center">
                  BOX III
                </h3>

                <p className="mt-2 max-w-sm text-white text-center">MEDALLÓN</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
