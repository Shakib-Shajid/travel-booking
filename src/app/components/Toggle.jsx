"use client";

import React, { useState } from "react";
import Standard from "./Standard";
import Premium from "./Premium";

const Toggle = () => {
  const [isStandard, setisStandard] = useState(true);

  const handleToggle = () => {
    setisStandard(!isStandard);
  };

  return (

    <div className="text-center my-10">
      {/* Sliding toggle button */}
      <div className="flex justify-center">
        <div className="relative w-80 h-12 bg-gray-200 rounded-full flex items-center justify-between p-1 shadow-inner">
          <span
            className={`absolute left-0 top-0 bottom-0 my-auto w-1/2 bg-[#2196F3] rounded-full transition-all duration-300 ${isStandard ? "left-0" : "left-1/2"
              }`}
          ></span>

          <button
            onClick={handleToggle}
            className={`relative z-10 w-1/2 text-center font-bold transition-all duration-300 ${isStandard ? "text-white" : "text-gray-600"
              }`}
          >
            Standard
          </button>

          <button
            onClick={handleToggle}
            className={`relative z-10 w-1/2 text-center font-bold transition-all duration-300 ${!isStandard ? "text-white" : "text-gray-600"
              }`}
          >
            Premium Pass
          </button>
        </div>
      </div>

      {/* Conditional content */}
      <div className="mt-10">
        {isStandard ? (
          <Standard /> // Show Empresa component when active
        ) : (
          <Premium /> // Show Personal component when active
        )}
      </div>
    </div>

  );
};

export default Toggle;
