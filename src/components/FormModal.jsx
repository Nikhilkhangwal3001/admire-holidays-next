"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
const FormModal = ({
  closeModalFunc,
  openModal,
  setOpenModal,
  openModalFunc,
}) => {
  return (
    <div
      className={`fixed z-[9999] top-0 px-4 h-full w-full items-center justify-center bg-gray-700 bg-opacity-90 ${
        openModal === true ? "flex" : "hidden"
      } `}
    >
      <div className=" text-white cursor-pointer  text-7xl absolute right-4 top-4">
        <RxCross1 color="white" size={30} onClick={closeModalFunc} />
      </div>
      <div className="bg-white sm:p-8 p-4 rounded-xl gap-8 flex flex-col items-center justify-center">
        <p className="text-center text-xl font-semibold">
          Get the Itinirary of Jaipur
        </p>
        <form action="" className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className=" font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder=" Your Name"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className=" font-medium text-gray-700">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Number"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="destination" className=" font-medium text-gray-700">
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter Destination"
              className="mt-2 py-2  px-5 w-full border rounded-md"
              required
            />
          </div>

          <button className="py-4 bg-[#FD4A4C] mt-5 w-full px-5  text-sm text-white rounded-lg  flex justify-center items-center">
            Download pdf
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
