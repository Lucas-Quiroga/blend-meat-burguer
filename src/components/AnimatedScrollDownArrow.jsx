import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const AnimatedScrollDownArrow = () => {
  return (
    <div className="flex justify-center items-center mx-auto">
      <IoIosArrowDown
        className=" animate-bounce absolute top-[80%] h-32 w-60 "
        color="white"
      />
    </div>
  );
};

export default AnimatedScrollDownArrow;
