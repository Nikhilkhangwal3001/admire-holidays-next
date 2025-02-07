"use client";
import React, { useState, useEffect } from "react";
import Accordian from "./Accordian";
import { TiTick } from "react-icons/ti";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaCarSide, FaHome, FaPlane, FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import PackageOptions from "./PackageOptions";
import reviewData from "@/data/reviewData";

const ProductDetailLeft = ({
  overview,
  itinerary,
  inclusions,
  mapSrc,
  reviewHeading,
  exclusions,
  packageOptions,
  overView,
}) => {
  const [allOpen, setAllOpen] = useState(false);
  const [dayOneOpen, setDayOneOpen] = useState(false);
  const [dayTwoOpen, setDayTwoOpen] = useState(false);
  const [dayThreeOpen, setDayThreeOpen] = useState(false);
  const [dayFourOpen, setDayFourOpen] = useState(false);
  const [dayFiveOpen, setDayFiveOpen] = useState(false);
  const [daySixOpen, setDaySixOpen] = useState(false);
  const [daySevenOpen, setDaySevenOpen] = useState(false);
  const [dayEightOpen, setDayEightOpen] = useState(false);
  const [dayNineOpen, setDayNineOpen] = useState(false);
  const [dayTenOpen, setDayTenOpen] = useState(false);
  const [dayElevenOpen, setDayElevenOpen] = useState(false);
  const [openOverview, setOpenOverview] = useState(false);
  const handleOverview = () => {
    setOpenOverview(!openOverview);
  };
  const dayOneClick = () => {
    setDayOneOpen((prev) => !prev);
  };
  const dayTwoClick = () => {
    setDayTwoOpen((prev) => !prev);
  };
  const dayThreeClick = () => {
    setDayThreeOpen((prev) => !prev);
  };
  const dayFourClick = () => {
    setDayFourOpen((prev) => !prev);
  };
  const dayFiveClick = () => {
    setDayFiveOpen((prev) => !prev);
  };
  const daySixClick = () => {
    setDaySixOpen((prev) => !prev);
  };
  const daySevenClick = () => {
    setDaySevenOpen((prev) => !prev);
  };
  const dayEightClick = () => {
    setDayEightOpen((prev) => !prev);
  };
  const dayNineClick = () => {
    setDayNineOpen((prev) => !prev);
  };
  const dayTenClick = () => {
    setDayTenOpen((prev) => !prev);
  };
  const dayElevenClick = () => {
    setDayElevenOpen((prev) => !prev);
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
    <div className="flex my-10 lg:w-[65%] rounded-lg w-full flex-col gap-6">
      <h5 className="md:text-3xl text-xl font-bold">Overview</h5>
      {/* <p className="text-base text-gray-700">{overview}</p> */}
      {overView && (
        <div className="flex flex-col gap-10 relative py-10">
          <div className="flex gap-4 flex-col">
            <p className="text-lg font-medium text-gray-700">
              {overView[0].heading}
            </p>
            <p className="text-sm font-light text-gray-700">
              {overView[0].text}
            </p>
          </div>
          <div className="flex gap-4 flex-col relative">
            <p className="text-lg font-medium text-gray-700">
              {" "}
              {overView[1].heading}
            </p>
            <p
              className={`text-sm font-light text-gray-700  ${
                openOverview === false ? "pb-10" : ""
              }`}
            >
              {overView[1].text}
            </p>
            {openOverview === false && (
              <p
                className="text-[#FD4A4C] cursor-pointer absolute  bottom-0 right-0 text-sm font-medium"
                onClick={handleOverview}
              >
                Read More
              </p>
            )}
          </div>
          {openOverview === true && (
            <>
              <div className="flex gap-4 flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {overView[2].heading}
                </p>
                <p className="text-sm font-light text-gray-700">
                  {overView[2].text}
                </p>
              </div>
              <div className="flex gap-4 flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {overView[3].heading}
                </p>
                <p className="text-sm font-light text-gray-700">
                  {overView[3].text}
                </p>
              </div>

              <div className="flex gap-4 flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {overView[4].heading}
                </p>
                <p className="text-sm font-light text-gray-700">
                  {overView[4].text}
                </p>
              </div>
              <div className="flex gap-4 flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {overView[5].heading}
                </p>
                <p className="text-sm font-light text-gray-700">
                  {overView[5].text}
                </p>
              </div>
              <div className="flex gap-4 relative pb-10 flex-col">
                <p className="text-lg font-medium text-gray-700">
                  {overView[6].heading}
                </p>
                <p className="text-sm font-light text-gray-700">
                  {overView[6].text}
                </p>
                {openOverview === true && (
                  <p
                    className="text-[#FD4A4C] cursor-pointer absolute  bottom-0 right-0 text-sm font-medium"
                    onClick={handleOverview}
                  >
                    Read Less
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      )}
      {overview && <p>{overview}</p>}

      <div className="grid sm:gap-5 gap-10  my-10 sm:grid-cols-5 grid-cols-2 items-center justify-center">
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaCarSide size={40} color="#3a2f5b" />
          Transport Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <IoFastFoodSharp size={40} color="#3a2f5b" />
          Meals Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaHome size={40} color="#3a2f5b" />
          Stay Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaPlane size={40} color="#3a2f5b" />
          Airport Transfers
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <BsFillEmojiSunglassesFill size={40} color="#3a2f5b" />
          Sightseeing
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-white rounded-lg px-4 py-4">
        <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-0 gap-3  py-2 w-full   text-xs text-gray-700 sm:text-sm  items-center justify-center">
          <div
            className={`flex items-center py-2  justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#itinerary"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              id="itinerary"
              href="#itinerary"
              onClick={() => handleLinkClick("#itinerary")}
            >
              Itinerary
            </a>
          </div>
          <div
            className={`flex items-center py-2  justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#packageOptions"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              href="#packageOptions"
              onClick={() => handleLinkClick("#packageOptions")}
            >
              Package option
            </a>
          </div>

          <div
            className={`flex items-center py-2  justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#inclusions"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              href="#inclusions"
              onClick={() => handleLinkClick("#inclusions")}
            >
              Inclusions
            </a>
          </div>
          <div
            className={`flex items-center py-2  justify-center border-x-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#exclusions"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              href="#exclusions"
              onClick={() => handleLinkClick("#exclusions")}
            >
              Exclusions
            </a>
          </div>
          <div
            className={`flex items-center py-2  justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#reviews"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a href="#reviews" onClick={() => handleLinkClick("#reviews")}>
              Reviews
            </a>
          </div>
          <div
            className={`flex items-center py-2  justify-center border-l-[0.5px]  border-l-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#map"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a href="#map" onClick={() => handleLinkClick("#map")}>
              Map
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 relative">
          <button
            className="flex items-center text-sm absolute right-0 top-[-30px] sm:right-4 sm:top-[-20px] justify-center px-4 py-1 border-[1px] border-red-500 text-red-500  rounded-lg cursor-pointer"
            style={{ minWidth: "100px" }} // Set a fixed width for the button
            onClick={expandAll}
          >
            Expand all
          </button>
          {itinerary[0] && itinerary[0].day && (
            <Accordian
              day={itinerary[0].day}
              heading={itinerary[0].day1Heading}
              isOpen={dayOneOpen}
              dayOverview={itinerary[0].day1Overview}
              clickFunction={dayOneClick}
            />
          )}

          {itinerary[1] && itinerary[1].day && (
            <Accordian
              day={itinerary[1].day}
              heading={itinerary[1].day2Heading}
              isOpen={dayTwoOpen}
              dayOverview={itinerary[1].day2Overview}
              clickFunction={dayTwoClick}
            />
          )}

          {itinerary[2] && itinerary[2].day && (
            <Accordian
              day={itinerary[2].day}
              heading={itinerary[2].day3Heading}
              isOpen={dayThreeOpen}
              dayOverview={itinerary[2].day3Overview}
              clickFunction={dayThreeClick}
            />
          )}
          {itinerary[3] && itinerary[3].day && (
            <Accordian
              day={itinerary[3].day}
              heading={itinerary[3].day4Heading}
              isOpen={dayFourOpen}
              dayOverview={itinerary[3].day4Overview}
              clickFunction={dayFourClick}
            />
          )}
          {itinerary[4] && itinerary[4].day && (
            <Accordian
              day={itinerary[4].day}
              heading={itinerary[4].day5Heading}
              isOpen={dayFiveOpen}
              dayOverview={itinerary[4].day5Overview}
              clickFunction={dayFiveClick}
            />
          )}
          {itinerary[5] && itinerary[5].day && (
            <Accordian
              day={itinerary[5].day}
              heading={itinerary[5].day6Heading}
              isOpen={daySixOpen}
              dayOverview={itinerary[5].day6Overview}
              clickFunction={daySixClick}
            />
          )}
          {itinerary[6] && itinerary[6].day && (
            <Accordian
              day={itinerary[6].day}
              heading={itinerary[6].day7Heading}
              isOpen={daySevenOpen}
              dayOverview={itinerary[6].day7Overview}
              clickFunction={daySevenClick}
            />
          )}
          {itinerary[7] && itinerary[7].day && (
            <Accordian
              day={itinerary[7].day}
              heading={itinerary[7].day8Heading}
              isOpen={dayEightOpen}
              dayOverview={itinerary[7].day8Overview}
              clickFunction={dayEightClick}
            />
          )}
          {itinerary[8] && itinerary[8].day && (
            <Accordian
              day={itinerary[8].day}
              heading={itinerary[8].day9Heading}
              isOpen={dayNineOpen}
              dayOverview={itinerary[8].day9Overview}
              clickFunction={dayNineClick}
            />
          )}
          {itinerary[9] && itinerary[9].day && (
            <Accordian
              day={itinerary[9].day}
              heading={itinerary[9].day10Heading}
              isOpen={dayTenOpen}
              dayOverview={itinerary[9].day10Overview}
              clickFunction={dayTenClick}
            />
          )}
          {itinerary[10] && itinerary[10].day && (
            <Accordian
              day={itinerary[10].day}
              heading={itinerary[10].day11Heading}
              isOpen={dayElevenOpen}
              dayOverview={itinerary[10].day11Overview}
              clickFunction={dayElevenClick}
            />
          )}
        </div>
        {packageOptions && packageOptions.length > 0 ? (
          <PackageOptions packageOptions={packageOptions} />
        ) : (
          <p></p>
        )}

        {inclusions &&
          exclusions &&
          inclusions.length > 0 &&
          exclusions.length > 0 && (
            <>
              <h1
                className="font-bold text-2xl  mt-10 md:text-4xl"
                id="inclusions"
              >
                Inclusions
              </h1>
              <div className="flex  flex-col mb-10 gap-3 ">
                {inclusions.map((inclusion, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <TiTick color="#00BB98" size={30} />
                    <p
                      className="font-light text-sm sm:text-base"
                      id="exclusions"
                    >
                      {inclusion}
                    </p>
                  </div>
                ))}
              </div>
              <h1 className="font-bold text-2xl mt-10  md:text-4xl">
                Exclusions
              </h1>

              <div className="flex flex-col mb-10 gap-4">
                {exclusions.map((exclusion, i) => (
                  <div className="flex items-center gap-3" key={i}>
                    <RxCross2 color="gray" size={20} />
                    <p className="font-light">{exclusion}</p>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>

      <h1 className="font-medium text-xl md:text-2xl">{reviewHeading}</h1>
      <div className="flex  sm:flex-row flex-col gap-5">
        <div className="bg-white flex-col flex sm:justify-center justify-start  gap-5 sm:items-center sm:h-[400px] h-fit w-full sm:w-1/2">
          <div className="flex gap-5">
            <p>Based On 0 ratings</p>
          </div>
          <div className="flex gap-2 ">
            <CiStar size={30} color="#fcb900" />
            <CiStar size={30} color="#fcb900" />
            <CiStar size={30} color="#fcb900" />
            <CiStar size={30} color="#fcb900" />
            <CiStar size={30} color="#fcb900" />
          </div>
        </div>
        <div className="bg-white flex gap-4  flex-col justify-center items-center px-5 h-[400px] w-full sm:w-1/2">
          <div className="flex flex-col gap-3 w-full">
            <p>5 Star</p>
            <div className="bg-gray-300 text-sm text-white px-5 rounded-lg">
              0 %
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>4 Star</p>
            <div className="bg-gray-300 text-sm   text-white px-5 rounded-lg">
              0 %
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>3 Star</p>
            <div className="bg-gray-300 text-sm   text-white px-5 rounded-lg">
              0 %
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>2 Star</p>
            <div className="bg-gray-300  text-sm text-white px-5 rounded-lg">
              0 %
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>1 Star</p>
            <div
              className="bg-gray-300  text-sm text-white px-5 rounded-lg"
              id="reviews"
            >
              0 %
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg py-2 text-gray-600 px-5">
        Reviewed by 02 customer(s)
      </div>

      {reviewData.map((review, index) => (
        <div
          className="bg-gray-200 rounded-lg py-5 gap-10 pt-3 flex px-5"
          key={index}
        >
          <div className="flex items-center flex-col justify-center gap-3">
            <FaUserCircle
              className=" sm:text-[100px] text-[40px]"
              color="gray"
            />
            <p className="font-medium">{review.name}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center sm:gap-2 gap-1">
              <CiStar size={20} color="#fcb900" />
              <CiStar size={20} color="#fcb900" />
              <CiStar size={20} color="#fcb900" />
              <CiStar size={20} color="#fcb900" />
              <CiStar size={20} color="#fcb900" />
            </div>
            <p className="sm:text-sm text-xs">{review.review}</p>
            <div className="flex text-gray-500 gap-3 items-center">
              <MdDateRange size={20} />
              {review.date}
            </div>
          </div>
        </div>
      ))}

      <h1 className="font-bold  text-2xl mt-10 md:text-4xl" id="map">
        Tour Map
      </h1>
      <div className="mb-10">
        <iframe
          src={mapSrc}
          className="lg:w-[700px] lg:h-[450px] sm:w-96 sm:h-96 w-64 h-64"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col gap-5 bg-[#F2FBFA] rounded-lg px-5 py-3">
        <h5 className="text-xl">LEAVE FEEDBACK ABOUT THIS</h5>
        <p className="font-light">Your email address will not be published.</p>
        <div className="flex gap-2 items-center">
          <FaStar size={20} color="#fcb900" />
          <FaStar size={20} color="#fcb900" />
          <FaStar size={20} color="#fcb900" />
          <FaStar size={20} color="#fcb900" />
          <FaStar size={20} color="#fcb900" />
        </div>
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="h-10 px-5 rounded-lg"
          />
          <input
            type="email "
            placeholder="Email"
            className="h-10 px-5 rounded-lg"
          />
          <textarea
            name=""
            id=""
            className="rounded-lg px-5 py-3"
            cols="30"
            rows="10"
            placeholder="Describe your review"
          ></textarea>
          <button className="bg-[#FD4A4C] text-white py-3 px-3 w-44">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailLeft;
