import { CiMail } from "react-icons/ci";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { FaWhatsapp } from "react-icons/fa";

const footerData = [
  { label: "Inicio", href: "#inicio", ariaLabel: "Inicio" },
  { label: "Blends", href: "#blends", ariaLabel: "Blends" },
  { label: "Combos", href: "#combos", ariaLabel: "Combos" },
  { label: "Comprar", href: "#comprar", ariaLabel: "Comprar" },
  { label: "Contacto", href: "#contacto", ariaLabel: "Contacto" },
];

const socialMediaLinks = [
  {
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=541138501335&text=Hola%20estoy%20interesadx%20en%20sus%20servicios%20😊",
    ariaLabel: "Whatsapp",
    icon: (
      <span className="text-2xl">
        <FaWhatsapp />
      </span>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blend_meat_burger",
    ariaLabel: "Instagram",
    icon: (
      <span className="text-2xl">
        <InstagramIcon />
      </span>
    ),
  },
  {
    label: "Email",
    href: "mailto:blendmeatburger@gmail.com",
    ariaLabel: "Email",
    icon: (
      <span className="text-2xl">
        <CiMail />
      </span>
    ),
  },
];

export const Footer = () => {
  return (
    <footer>
      <section class="bg-customDarkBg1 ">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            {footerData.map(({ href, label, ariaLabel }) => (
              <div class="px-5 py-2">
                <a
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                  class="text-base leading-6 text-white hover:text-gray-400"
                >
                  {label}
                </a>
              </div>
            ))}
          </nav>

          <div class="flex justify-center mt-8 space-x-6 items-center mx-auto">
            {socialMediaLinks.map(({ href, label, ariaLabel, icon }) => (
              <>
                <span class="sr-only">{label}</span>
                <a
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                  class="text-base leading-6 text-white hover:text-gray-400"
                >
                  {icon}
                </a>
              </>
            ))}
          </div>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            ©2024 MIT license. Matthew and Quiroga Lucas.
          </p>
        </div>
      </section>
    </footer>
  );
};
