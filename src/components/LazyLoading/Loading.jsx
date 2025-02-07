import React from "react";

const Loading = () => {
  return (
    <div className="grid max-w-7xl gap-10 mx-auto md:grid-cols-3 my-20">
      <div className="flex justify-center items-center h-32 w-full bg-gray-200 animate-pulse rounded-lg">
        <div className="space-y-4 p-4 w-full">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="h-4 bg-gray-500 rounded w-5/6"></div>
          <div className="h-4 bg-gray-500 rounded w-2/3"></div>
        </div>
      </div>
      <div className="flex justify-center items-center h-32 w-full bg-gray-200 animate-pulse rounded-lg">
        <div className="space-y-4 p-4 w-full">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="h-4 bg-gray-500 rounded w-5/6"></div>
          <div className="h-4 bg-gray-500 rounded w-2/3"></div>
        </div>
      </div>
      <div className="flex justify-center items-center h-32 w-full bg-gray-200 animate-pulse rounded-lg">
        <div className="space-y-4 p-4 w-full">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="h-4 bg-gray-500 rounded w-5/6"></div>
          <div className="h-4 bg-gray-500 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
