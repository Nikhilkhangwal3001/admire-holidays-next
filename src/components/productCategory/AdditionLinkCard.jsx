import React from "react";
import Link from "next/link";

const AdditionLinkCard = ({ state1, state2, imageUrl1, imageUrl2 }) => {
  return (
    <div className="flex items-center sm:mt-20 mt-10 flex-col gap-10 w-full justify-center">
      <h1 className="text-center md:text-5xl text-2xl text-gray-800">
        Explore other places
      </h1>
      <div className="flex sm:flex-row flex-col mx-auto gap-8 my-6">
        <Link href={`/products/${state1}`}>
          <div className="flex flex-col bg-red-500 items-center gap-4 rounded-lg  overflow-hidden ">
            <img
              src={imageUrl1}
              alt={state1}
              className="w-full h-64 object-cover"
            />
            <div className="pb-4 text-white">Explore {state1}</div>
          </div>
        </Link>
        <Link href={`/products/${state2}`}>
          <div className="flex flex-col bg-indigo-500 items-center gap-4 rounded-lg  overflow-hidden ">
            <img
              src={imageUrl2}
              alt={state2}
              className="w-full h-64 object-cover"
            />
            <div className="pb-4 text-white">Explore {state2}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdditionLinkCard;
