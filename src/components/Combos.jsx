import { motion } from "framer-motion";
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const features = [
  {
    title: "BOLSA DE 10KG",
    combo: "BOX I",
    image:
      "https://i.pinimg.com/564x/cb/06/da/cb06da0cf4a7a4a80f857cfccf911e92.jpg",
  },
  {
    title: "BOLLOS",
    combo: "BOX II",
    image:
      "https://i.pinimg.com/564x/19/7a/41/197a41a1e63c51365f006920e7e0975b.jpg",
  },
  {
    title: "MEDALLÓN",
    combo: "BOX III",
    image:
      "https://i.pinimg.com/564x/69/4e/7b/694e7b45cb66976ea6d77fc4833c17b7.jpg",
  },
];

export const Combos = () => {
  return (
    <section
      className="bg-black relative h-screen w-full flex flex-col justify-center mx-auto items-center text-center"
      id="combos"
    >
      <div className="relative text-center mt-20">
        <span className="text-white text-5xl lg:text-7xl font-semibold">
          COMBOS
        </span>
        <p className="text-white text-sm relative">LO HACEMOS SIMPLE</p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={Math.floor(features.length / 2)}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="relative mx-auto justify-center items-center flex"
        >
          <div className="flex justify-center items-center mx-auto">
            {features.map(({ title, combo, image }) => (
              <SwiperSlide
                key={title}
                className="max-w-md mx-auto justify-center items-center mt-20"
              >
                <img
                  src={image}
                  alt={combo}
                  className="h-96 w-full object-cover"
                />
                <div className="relative flex flex-col justify-center items-center w-full h-full text-white my-10">
                  <h3 className="text-3xl font-bold">{title}</h3>
                  <p className="text-2xl font-bold">{combo}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <span className="text-white text-center mx-auto block mb-10 sm:mb-0">
          Desliza para conocer nuestros combos{" "}
        </span>
      </motion.div>
    </section>
  );
};
