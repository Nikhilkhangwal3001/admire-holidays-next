import Link from "next/link";
import React from "react";

const ProductCategoryCard = ({ url, days, destination, productLink }) => {
  return (
    <Link href={productLink} className="cursor-pointer">
      <div className="flex flex-col ">
        <img
          src={url}
          alt=""
          className="w-[400px] bg-cover rounded-lg h-[320px]"
        />

        <div className="flex flex-col w-full gap-3 py-5 px-1 ">
          <p className="text-gray-500 text-sm">{days}</p>
          <h5 className="text-md font-semibold">{destination}</h5>
          <div className="flex   w-full items-center gap-2">
            <buttom className=" w-[180px] mt-1 border-red-500 cursor-pointer border-[1px] text-red-600 flex justify-center items-center font-medium py-2 rounded-lg">
              Call Now
            </buttom>
            <Link
              className="text-white w-[180px] mt-1 bg-red-500  cursor-pointer border-[1px] border-red-500 flex justify-center items-center font-medium py-2 rounded-lg"
              href={productLink}
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
