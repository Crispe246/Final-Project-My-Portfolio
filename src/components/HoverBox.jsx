import React from "react";

const HoverBox = ({ children }) => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="group relative w-full max-w-2xl cursor-pointer">
        {/* Back Frame - The Shadow effect */}
        <div
          className="absolute inset-0 border-2 border-black rounded-lg transition-all duration-500 ease-in-out 
        group-hover:-translate-x-2 group-hover:-translate-y-2 z-0 bg-blue-400"
        ></div>

        {/* Front Frame - The Content */}
        <div
          className="relative border-2 border-black/30 bg-linear-to-br from-indigo-400 to-blue-400  rounded-lg p-8 transition-all duration-500 
          ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 z-10"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HoverBox;
