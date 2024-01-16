import { motion } from "framer-motion";
import { MdOutlineSmartphone } from "react-icons/md/index";
import { FaInstagram } from "react-icons/fa6/index";
import { CiLocationOn } from "react-icons/ci/index";
import { CiMail } from "react-icons/ci/index";

const contactData = [
  {
    href: `https://api.whatsapp.com/send?phone=541138501335&text=Hola%20estoy%20interesadx%20en%20sus%20servicios%20😊`,
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: MdOutlineSmartphone,
    title: "CELULAR",
    description: "11-3850-1335",
  },
  {
    href: "https://www.instagram.com/blend_meat_burger",
    target: "_blank",
    rel: "noopener noreferrer",
    Icon: FaInstagram,
    title: "INSTAGRAM",
    description: "@blend_meat_burger",
  },
  {
    href: "mailto:blendmeatburger@gmail.com",
    Icon: CiMail,
    title: "MAIL",
    description: "blendmeatburger@gmail.com",
  },
  {
    Icon: CiLocationOn,
    title: "UBICACIÓN",
    description: "Ciudad Madero - La Matanza",
  },
];

const ContactItem = ({ href, target, rel, Icon, title, description }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className="flex flex-col justify-start items-start hover:bg-gray-400 hover:rounded-lg hover:text-black hover:cursor-pointer"
  >
    <div className="flex items-center">
      <Icon className="mr-2" />
      <span>{title}</span>
    </div>
    <p className="mt-2 ml-7">{description}</p>
  </a>
);

export const ContactInfo = () => {
  return (
    <section
      className="bg-black items-center flex justify-end h-screen w-screen overflow-x-hidden overflow-y-hidden"
      id="contacto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute hidden lg:block sm:left-0 sm:mt-[30rem]">
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

              <div className=" text-white mt-[5rem] flex flex-col gap-8 font-semibold text-xl lg:text-2xl mr-[10rem] md:mr-0">
                {contactData.map((contact, index) => (
                  <ContactItem key={index} {...contact} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
