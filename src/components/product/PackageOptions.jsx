"use client";
import React, { useState } from "react";
import PackageOptionQuote from "./PackageOptionQuote";

const PackageOptions = ({ packageOptions }) => {
  const [openPackage, setOpenPackage] = useState(null);
  const [openRequestQuotePopup, setRequestQuotePopup] = useState(false);

  const openQuotepopup = () => {
    setRequestQuotePopup(true);
  };
  const closeQuotepopup = () => {
    setRequestQuotePopup(false);
  };
  const togglePackage = (index) => {
    setOpenPackage((prevOpenPackage) =>
      prevOpenPackage === index ? null : index
    );
  };

  return (
    <div className="flex flex-col gap-5" id="packageOptions">
      <PackageOptionQuote
        openRequestQuotePopup={openRequestQuotePopup}
        closeQuotepopup={closeQuotepopup}
      />
      <h1 className="font-bold text-2xl my-10 md:text-4xl">
        Exclusive Packages
      </h1>
      <div className="flex flex-col gap-5">
        {packageOptions.map((item, index) => (
          <div
            key={index}
            className="sm:p-5 p-3 border-[1px] rounded-lg border-gray-300"
          >
            <div className="flex items-center gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl">{item.package}</h2>
                <p
                  className="text-[#FD4A4C] sm:text-base text-sm  cursor-pointer font-[500]"
                  onClick={() => togglePackage(index)}
                >
                  {openPackage === index ? "Hide Details" : "Show Details"}
                </p>
              </div>
              {/* <div className="flex items-center flex-col">
                <p
                  className="text-[#00BB98] sm:text-2xl text-xl font-bold"
                  id="packageOption"
                >
                  {item.price}
                </p>
                <p className="text-gray-500 line-through">
                  {item.previousPrice}
                </p>
              </div> */}
              <div>
                <button
                  className="sm:px-4 px-1 py-3 cursor-pointer sm:text-base text-xs border-[#FD4A4C] border-[1px] text-[#FD4A4C] rounded-lg"
                  onClick={openQuotepopup}
                >
                  Request Quote
                </button>
              </div>
            </div>
            <div>
              {openPackage === index && (
                <div className="flex  flex-col text-sm text-gray-500  sm:px-5 px-2  mt-10 gap-1 ">
                  {item.hotelDetails.map((item, i) => (
                    <div
                      className="flex gap-3  sm:flex-row flex-col sm:items-center items-start "
                      key={i}
                    >
                      <h1 className="font-bold sm:text-right text-left w-[130px] text-base sm:text-xl text-black ">
                        {item.destination} :
                      </h1>
                      <div className="flex sm:gap-3 items-center gap-1">
                        {item.hotels.map((items, i) => (
                          <div className="flex gap-3" key={i}>
                            <p className="sm:text-base text-xs">{items}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageOptions;
