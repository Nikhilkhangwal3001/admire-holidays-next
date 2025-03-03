import React from "react";
import Image from "next/image"; // Use next/image for optimization
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute sm:mt-0 sm:ml-auto mt-[20px] z-[10] ml-[-30px] mx-auto"></div>

      <div className="text-center flex items-center gap-5 flex-col mt-7">
        <div className="relative w-10 h-10 md:w-[80px] md:h-[80px]">
          <Image
            className="rounded-full"
            src={review.image}
            alt={review.name}
            layout="fill" // Ensures responsiveness
            objectFit="cover" // Maintains aspect ratio
            priority={true} // Loads image faster
          />
        </div>
        <p className="tracking-wider font-bold text-2xl capitalize">
          {review.name}
        </p>
        <p className="uppercase text-sm">{review.job}</p>
      </div>

      <div className="mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default TestimonialCard;
