"use client";
import React, { useState, useEffect } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import BookingForm from "./BookingForm";
import EnquiryForm from "./EnquiryForm";
import { TiTick } from "react-icons/ti";

const ProductRightPricing = ({
  homePickupAdultPrice,
  homePickupBabyPrice,
  homePickupChildPrice,
  openModalFunc,
  visaPolicy,
  overview
}) => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(true);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  const openBookingForm = () => {
    setIsBookingFormOpen(true);
    setIsEnquiryFormOpen(false);
  };
  const openEnquiryForm = () => {
    setIsEnquiryFormOpen(true);
    setIsBookingFormOpen(false);
  };

  const [selectedTime, setSelectedTime] = useState("option1");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = formatDate(currentDate);

    // Calculate check-out date based on the selected time range
    const checkoutDate = new Date(currentDate);
    checkoutDate.setDate(checkoutDate.getDate() + 6); // Assuming 7 days duration

    // Format dates
    const checkinDateString = formatDate(currentDate);
    const checkoutDateString = formatDate(checkoutDate);

    // Set the values in the state
    setCheckinDate(checkinDateString);
    setCheckoutDate(checkoutDateString);
  }, [selectedTime]);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
 
  const expandAll = () => {
      setAllOpen(!allOpen);
      setDayOneOpen(!allOpen);
      setDayTwoOpen(!allOpen);
      setDayThreeOpen(!allOpen);
      setDayFourOpen(!allOpen);
      setDayFiveOpen(!allOpen);
      setDaySixOpen(!allOpen);
      setDaySevenOpen(!allOpen);
      setDayEightOpen(!allOpen);
      setDayNineOpen(!allOpen);
      setDayTenOpen(!allOpen);
      setDayElevenOpen(!allOpen);
    };
  
    const [activeLink, setActiveLink] = useState("#itinerary");
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
      const targetElement = document.getElementById(link.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    useEffect(() => {
      console.log(overview);
    }, []);
    
  
  return (
    <div className="flex lg:min-w-[100%] w-full flex-col gap-10">
      <div className="p-10  flex flex-col gap-4 h-fit rounded-lg  my-5 bg-white">
        <div className="flex justify-center gap-1 items-center relative">
          <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
          <IoIosAirplane size={40} color="#FD4A4C" />
          <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex text-gray-500  gap-10 justify-center items-center"></div>

          <EnquiryForm
            homePickupAdultPrice={homePickupAdultPrice}
            homePickupBabyPrice={homePickupBabyPrice}
            homePickupChildPrice={homePickupChildPrice}
            openModalFunc={openModalFunc}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 rounded-lg  bg-white justify-center  ">
        <div className="w-full  px-5 py-3  rounded-t-lg bg-[#3a2f5b] text-white ">
          <p className="sm:text-xl text-base text-center font-medium">
            Why book Admire Holidays?
          </p>
        </div>
        <div className="px-5 flex flex-col gap-3 pb-5">
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">Wide range of exclusive</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">deals with resorts.</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">24*7 help line</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Detail information about </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">
                package information clearly.
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Local support</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg ">Deals on flights booking</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Quick book</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 rounded-lg  bg-white justify-center  ">
        <div className="w-full  px-5 py-3  rounded-t-lg bg-[#FD4A4C] text-white ">
          <p className="sm:text-xl text-base text-center font-medium">
            Cancellation Policy
          </p>
        </div>
        <div className="px-5 flex flex-col gap-3 pb-5">
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <FaRegStar size={20} color=" #FFD700" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                Airfare/Train fare cancellation applied original booking refund
                policy
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <FaRegStar size={20} color="#FFD700" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  ">
                Before 30 days of cancellation 100% refund of total booking
                amount
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <FaRegStar size={20} color="#FFD700" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  ">
                Before 15 days of cancellation 25% cancellation amount require
                of total booking cost
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <FaRegStar size={20} color="#FFD700" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  ">
                Before 7 days of cancellation 50% cancellation amount require of
                total booking cost{" "}
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <FaRegStar size={20} color="#FFD700" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  ">
                Before 3 days of cancellation no refund allowed of total advance
                amount.
              </p>
            </div>
          </div>
          <div className="flex text-sm justify-center  flex-col gap-5 py-5">
            <div className="flex items-center ">
              <strong>
                N.B - Any types of cancellation/Refund amount will be made
                30working days from date of cancellation.
              </strong>
            </div>
            <div className="">
              <strong>
                N.B - Refund amount pay through only Cheque/Neft mode.
              </strong>
            </div>
          </div>
        </div>
      </div>
      {visaPolicy && visaPolicy.length > 0 && (
        <div className="flex flex-col gap-10 rounded-lg  bg-white justify-center  ">
          <div className="w-full  px-5 py-3  rounded-t-lg bg-[#FD4A4C] text-white ">
            <p className="sm:text-xl text-base text-center font-medium">
              Visa Policy
            </p>
          </div>
          <div className="px-5 flex flex-col gap-3 pb-5">
            {visaPolicy.map((item, i) => (
              <div className="flex  items-center gap-5" key={i}>
                <div className="w-fit h-fit flex items-center justify-center">
                  <FaRegStar size={20} color=" #FFD700" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductRightPricing;
