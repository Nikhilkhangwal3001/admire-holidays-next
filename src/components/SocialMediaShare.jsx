import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
const SocialMediaShare = ({ singleProductData, params }) => {
  const getShareUrl = (platform) => {
    if (!params || !params.category || !params.id) {
      return ""; // Return an empty string if params is undefined or missing category/id
    }

    const url = `https://admireholidays.com/packages/${params.category}/${params.id}`;
    const text = encodeURIComponent(singleProductData.heading);

    switch (platform) {
      case "whatsapp":
        return `https://wa.me/?text=${text}%20${url}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      default:
        return "";
    }
  };
  return (
    <div className="flex sm:gap-4 gap-2 items-center lg:justify-center ">
      <div className="flex gap-2 items-center sm:text-base text-sm justify-center">
        Share package
        <IoIosShareAlt size={20} />
      </div>
      <div className="flex items-center justify-center sm:gap-4  gap-1 rounded-xl">
        <a
          href={getShareUrl("whatsapp", singleProductData, params)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="cursor-pointer" color="#25D366" />
        </a>
        <a
          href={getShareUrl("facebook", singleProductData, params)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color="	#1877F2" size={30} className="cursor-pointer" />
        </a>
        <a
          href={getShareUrl("twitter", singleProductData, params)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter
            size={30}
            color="#14171A"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};
export default SocialMediaShare;
