import React from "react";

const Skeleton = () => {
  return (
    <div className="w-[350px] border-2 border-darkgrey bg-darkgrey shadow-lg rounded-lg p-8">
      <div className="flex flex-col gap-2 justify-center items-start">
        <div className="flex flex-row items-center gap-4">
          <div className="w-16 h-16 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="flex flex-col">
            <div className="w-20 h-6 bg-gray-600 rounded mb-2 animate-pulse"></div>
            <div className="w-32 h-4 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mt-4 gap-4 h-[42px]">
          <div className="w-24 h-full bg-gray-600 border-2 border-gray-600 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-600 border-2 border-gray-600 rounded-full animate-pulse"></div>
        </div>

        <div className="w-36 h-8 bg-gray-600 rounded mt-4 animate-pulse"></div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <div className="w-3/4 h-5 bg-gray-600 rounded animate-pulse"></div>
          <div className="w-3/4 h-5 bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
