import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const WeekendTripCard = ({ imageUrl, location, about, url }) => {
  return (
    <Link href={url}>
      <div className="flex flex-col shadow-md gap-3 border-1 rounded-xl  border-gray-200  justify-center">
        <Image src={imageUrl} className="h-64 rounded-t-xl" alt={location} />
        <h5 className="px-5 text-xl font-medium">{location}</h5>
        <div className="flex pb-4  px-3 text-gray-500 items-center gap-2">
          <FaLocationDot color="#0F9898" size={18} />
          <p>{about}</p>
        </div>
      </div>
    </Link>
  );
};

export default WeekendTripCard;
