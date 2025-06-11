import { useItenaryContext } from "@/context/itenary-details/ItenaryDetailsContext";
import React,{useState} from "react";
import TripHiglightsRightSection from "./TripHiglightsRightSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";

function TripHiglightsLeftSection() {
  const {itenaryDetails} = useItenaryContext();
  const [charLimit] = useState(300);
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState([]);
  const fullContent = itenaryDetails?.destination_detail || "";
  const shortContent = fullContent.slice(0, charLimit);
  return (
    <div className="flex-1 p-4">
      <h2 className="md:text-3xl text-2xl font-semibold mt-14 text-gray-900 capitalize mb-8 tracking-wide relative before:absolute before:-left-4 before:top-1/2 before:w-2 before:h-10 before:bg-red-600 before:-translate-y-1/2">
        {itenaryDetails.title || "No Title Available"}
      </h2>

      <div className="bg-white border-l-4 mt-10 border-red-500 shadow-lg p-5 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          🌍 Destination Overview
        </h3>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
          {fullContent ? (
            <>
              <span
                className="text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: isExpanded ? fullContent : `${shortContent}...`,
                }}
              />
              {fullContent.length > charLimit && (
                <button
                  onClick={toggleExpand}
                  className="ml-2 text-red-600 border-2 border-gray-600 rounded-lg p-1 mt-2 font-semibold hover:underline focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </>
          ) : (
            <span className="text-gray-500 italic">
              No description available
            </span>
          )}
        </p>
      </div>


      {/* Horizontal Filter */}
      <div className="flex flex-wrap justify-center items-center border border-gray-300">
        <div className="flex divide-x divide-gray-300 text-sm text-gray-800 text-center overflow-x-auto scrollbar-hide">
          <div
            onClick={() => setShow(!show)}
            className="cursor-pointer px-3 py-1 hover:bg-gray-100 whitespace-nowrap"
          >
            {show ? "Hide" : "Tour"} Details
          </div>

          <div
            onClick={() => scrollToSection("itinerary")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Itinerary Detail
          </div>

          <div
            onClick={() => scrollToSection("inclusion")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Inclusion/Exclusion
          </div>

          <div
            onClick={() => scrollToSection("accommodation")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Accommodation Info
          </div>

          <div
            onClick={() => scrollToSection("payment")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Payment Mode
          </div>

          <div
            onClick={() => scrollToSection("cancellation")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Cancellation Policy
          </div>

          <div
            onClick={() => scrollToSection("term")}
            className="cursor-pointer px-3 py-1 hover:bg-yellow-600 hover:text-white whitespace-nowrap"
          >
            Term & Conditions
          </div>
        </div>
      </div>
      {show && (
        <section
          id="meals"
          className="flex justify-center items-center px-4 py-16 bg-white"
        >
          <div className="w-full max-w-9xl border-l-4 border-yellow-500 pl-6">
            {/* Heading */}
            <h3 className="text-3xl font-bold text-gray-900 mb-12 border-b pb-4 border-gray-200">
              Tour Details
            </h3>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 mb-12">
              {/* Duration */}
              <div>
                <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                  Duration
                </h4>
                <p className="text-base">{itenaryDetails.duration || "N/A"}</p>
              </div>

              {/* Pricing */}
              <div>
                <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                  Pricing
                </h4>
                <p
                  onClick={() => setShowModal(true)}
                  className="text-base border-2 border-red-600 text-center text-white cursor-pointer p-1 rounded-lg bg-yellow-600"
                >
                  {itenaryDetails.pricing || "N/A"}
                </p>
              </div>
              {/* Modal */}
              {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500"
                    >
                      &times;
                    </button>

                    {/* Form Heading */}
                    <h2 className="text-xl font-semibold mb-4 text-center">
                      Enquiry Form
                    </h2>

                    {/* Form */}
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                      <textarea
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        rows="4"
                      ></textarea>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Type */}
              <div>
                <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                  Type
                </h4>
                <p className="text-base">
                  {itenaryDetails.domestic_or_international || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <section className="max-w-9xl"> */}
      <div
        id="itinerary"
        className="  px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Side - Trip Details */}
        <div className="md:col-span-2 md:w-[1000px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Trip Itinerary
            </h2>

            {/* Display "Expand On" button only if backend data exists */}
            {itenaryDetails.days_information?.length > 0 && (
              <button
                onClick={() => {
                  if (showAll) {
                    setOpenIndex([]);
                    setShowAll(false);
                  } else {
                    setShowAll(true);
                  }
                }}
                className="text-sm md:text-lg font-medium text-red-600 border-2 border-yellow-600 p-1 rounded-lg"
              >
                {showAll ? "Collapse All" : "Expand All"}
              </button>
            )}
          </div>

          {itenaryDetails.days_information?.length > 0 ? (
            itenaryDetails.days_information.map((day, index) => (
              <div key={index} className="mb-6 border-b border-gray-300 pb-4">
                {/* Accordion Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center py-3 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200"
                >
                  <h6 className="text-[10px] md:text-[14px] text-gray-900 font-medium">
                    <span className="bg-red-600 p-2 rounded-lg text-white">
                      Day {day.day}
                    </span>{" "}
                    : {day.title}
                  </h6>
                  <span className="text-gray-600 text-sm">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {/* Show Detail + Images only when open or if showAll is true */}
                {(openIndex?.includes(index) || showAll) && (
                  <>
                    {/* Detail Text */}
                    <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow mt-4">
                      <p className="text-gray-700">
                        <strong>Destination:</strong>{" "}
                        {day.detail ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: day.detail,
                            }}
                          />
                        ) : (
                          "No description available"
                        )}
                      </p>
                    </div>

                    {/* Image Slider */}
                    <div className="rounded-lg shadow-lg mt-4">
                      {images.length > 0 ? (
                        <Swiper
                          modules={[Navigation, Autoplay]}
                          navigation
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          spaceBetween={20}
                          slidesPerView={1}
                          className="w-full"
                        >
                          {images.map((img, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div
                                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                                onClick={() =>
                                  setSelectedImage(
                                    `https://admiredashboard.theholistay.in/${img}`
                                  )
                                }
                              >
                                <Image
                                  src={`https://admiredashboard.theholistay.in/${img}`}
                                  alt={`Image ${imgIndex + 1}`}
                                  width={300}
                                  height={200}
                                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                  <p className="text-white text-lg font-semibold">
                                    🔍 View Image
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <p className="text-gray-500 text-center mt-6 italic">
                          No Additional Images Available
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No itinerary available</p>
          )}
        </div>
      </div>
      {/* </section> */}
      <div className="flex flex-col">
        <section id="tour-info" className="px-4 py-16 bg-gray-100">
          <section
            id="inclusion"
            className="py-24 px-4 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 tracking-tight">
                Tour Inclusions & Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-20">
                {/* Inclusions Section */}
                {itenaryDetails.inclusion && <div className="relative pl-10">
                  <div className="absolute left-0 top-2 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                  <div className="flex items-center mb-6">
                    <span className="text-green-500 text-3xl mr-4">✅</span>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      What’s Included
                    </h3>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed space-y-2 text-justify">
                    {itenaryDetails.inclusion ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: itenaryDetails.inclusion,
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 italic">
                        No description available
                      </span>
                    )}
                  </div>
                </div>}

                {/* Exclusions Section */}
                {itenaryDetails.exclusion && <div className="relative pl-10">
                  <div className="absolute left-0 top-2 w-1 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
                  <div className="flex items-center mb-6">
                    <span className="text-red-500 text-3xl mr-4">❌</span>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      What’s Excluded
                    </h3>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed space-y-2 text-justify">
                    {itenaryDetails.exclusion ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: itenaryDetails.exclusion,
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 italic">
                        No description available
                      </span>
                    )}
                  </div>
                </div>}
              </div>
            </div>
          </section>

          {/* Additional Inclusion */}
          {itenaryDetails.additional_inclusion && <div className="bg-white rounded-xl shadow-md p-8 mb-8 transition hover:shadow-lg max-w-9xl mx-auto">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
              Additional Inclusion
            </h3>
            <div className="text-gray-700 leading-relaxed text-justify text-base">
              {itenaryDetails.additional_inclusion ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: itenaryDetails.additional_inclusion,
                  }}
                />
              ) : (
                <span className="text-gray-500 italic">
                  No description available
                </span>
              )}
            </div>
          </div>}
        </section>

        <section
          id="accommodation"
          className="flex flex-col px-4 py-10 bg-gray-50"
        >
          <div className="p-6 sm:p-10 bg-white rounded-3xl shadow-2xl border-l-8 border-indigo-500">
            {/* Section Heading */}
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b-4 pb-4 border-indigo-300">
              Accommodation Information
            </h3>

            {/* Hotel Details */}
            <div className="p-6 sm:p-8 bg-gray-100 rounded-2xl shadow-lg mb-8 border-l-8 border-yellow-400 transition-transform hover:scale-[1.02]">
              <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                Hotel Details
              </h4>
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                {itenaryDetails.hotel_details ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: itenaryDetails.hotel_details,
                    }}
                  />
                ) : (
                  <span className="text-gray-500 italic">
                    No description available
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section id="payment" className="flex flex-col px-4 py-10 bg-gray-50">
          <div className="p-6 sm:p-10 bg-white rounded-3xl shadow-2xl border-l-8 border-red-500">
            {/* Section Heading */}
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b-4 pb-4 border-red-300">
              Payment Information
            </h3>

            {/* Payment Mode Block */}
            <div className="p-6 sm:p-8 bg-gray-100 rounded-2xl shadow-lg border-l-8 border-yellow-500 transition-transform hover:scale-[1.02]">
              <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                Payment Mode
              </h4>
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                {itenaryDetails.payment_mode ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: itenaryDetails.payment_mode,
                    }}
                  />
                ) : (
                  <span className="text-gray-500 italic">
                    No payment information available.
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>

        <section
          id="cancellation"
          className="flex flex-col px-4 py-10 bg-gray-50"
        >
          <div className="p-6 sm:p-10 bg-gradient-to-br from-red-100 to-white rounded-3xl shadow-2xl border-l-8 border-red-500 w-full max-w-9xl mx-auto">
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-red-700 mb-6 border-b-4 border-red-300 pb-4 text-center">
              Cancellation Policy
            </h2>

            {/* Policy Description */}
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              {itenaryDetails.cancellation_policy ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: itenaryDetails.cancellation_policy,
                  }}
                />
              ) : (
                <span className="text-gray-500 italic">
                  No cancellation policy available.
                </span>
              )}
            </p>
          </div>
        </section>
        <section id="term" className="flex flex-col p-6 sm:p-10 bg-gray-100">
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border-t-8 border-yellow-500">
            {/* Main Heading */}
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 border-b-4 pb-4 border-red-300">
              Important Information
            </h3>

            {/* Terms & Conditions */}
            <div className="p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-red-400 transition-transform hover:scale-[1.02] mb-8 bg-white">
              <h4 className="text-xl md:text-2xl font-semibold text-red-700 mb-4 border-b-2 pb-3 border-red-300">
                Terms & Conditions
              </h4>
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                {itenaryDetails.terms_and_conditions ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: itenaryDetails.terms_and_conditions,
                    }}
                  />
                ) : (
                  <span className="text-gray-500 italic">
                    No description available
                  </span>
                )}
              </p>
            </div>

            {itenaryDetails.special_note && (
              <div className="p-6 sm:p-8 bg-yellow-50 rounded-2xl shadow-lg border-l-8 border-yellow-400 transition-transform hover:scale-[1.02]">
                <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                  Special Note
                </h4>
                <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: itenaryDetails.special_note,
                    }}
                  />
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TripHiglightsLeftSection;
