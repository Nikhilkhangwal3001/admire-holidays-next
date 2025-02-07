import React from "react";
import { IoCallOutline } from "react-icons/io5";
const Button = ({ display }) => {
  return (
    <a href="tel:1800-121-4252"><button
      type="button"
      className={`${display}  bg-red-500 text-white  focus:ring-4 border-[1px] border-white font-medium rounded-lg text-xl px-5 py-2 items-center gap-4 me-2 mb-2    `}
    >
      <IoCallOutline size={24} /> 1800-121-4252
    </button></a>
  );
};

export default Button;
