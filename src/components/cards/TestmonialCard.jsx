import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute sm:mt-0 sm:ml-auto  mt-[20px] z-[10] ml-[-30px] mx-auto"></div>

      <div className="text-center flex  items-center gap-5 flex-col mt-7">
        <img
          className=" rounded-full w-10 h-10 md:w-[80px] md:h-[80px] z-[25]"
          src={review.image}
          alt={review.name}
        />
        <p className="tracking-wider font-bold text-2xl capitalize">
          {review.name}
        </p>
        <p className=" uppercase text-sm">{review.job}</p>
      </div>

      <div className=" mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className=" mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default TestimonialCard;
