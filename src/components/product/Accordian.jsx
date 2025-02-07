import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordian = ({ day, heading, isOpen, clickFunction, dayOverview }) => {
  return (
    <div className="flex flex-col sm:gap-5 gap-2  rounded-lg" id="itinerary">
      <div
        className="w-full flex cursor-pointer sm:gap-4 gap-3 sm:px-3 px-0 py-3 rounded-lg items-center"
        onClick={clickFunction}
      >
        <div className="flex items-center sm:gap-5 gap-2">
          <button className="sm:px-6 px-2 flex items-center sm:font-semibold  sm:text-base text-sm justify-center py-2 border-[1px] border-gray-300  rounded-lg">
            {day}
          </button>
          <p className=" sm:font-semibold  sm:text-base text-sm">{heading}</p>
        </div>
        <FaAngleDown size={20} color="#ef4444" />
      </div>
      {isOpen === true && (
        <div className="flex justify-center items-center px-5 py-3">
          <p className="tracking-wider sm:text-base text-sm">{dayOverview}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
