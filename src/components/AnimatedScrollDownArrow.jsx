import React from "react";
import { IoIosArrowDown } from "react-icons/io/index";

const AnimatedScrollDownArrow = () => {
  return (
    <div className="hidden sm:flex justify-center items-center mx-auto">
      <IoIosArrowDown
        className=" animate-bounce absolute top-[80%] h-20 w-20 "
        color="white"
      />
    </div>
  );
};

export default AnimatedScrollDownArrow;
