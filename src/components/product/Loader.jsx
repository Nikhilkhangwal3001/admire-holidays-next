import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loader = () => {
  return (
    <div className="sm:text-7xl text-5xl font-bold flex items-center justify-center h-screen">
      <Spinner className="h-32 animate-spin text-gray-500  w-32" />
    </div>
  );
};

export default Loader;
