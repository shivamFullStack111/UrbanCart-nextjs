import React from "react";
import { TiTick } from "react-icons/ti";

const ProcessSteps = ({ pageNo }) => {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="w-[300px] ">
          <div className="flex justify-center w-[300px] mt-3 items-center">
            {/* Step 1 */}
            <p
              className={`h-5 w-5 rounded-full border ${
                pageNo === 1
                  ? "bg-red-400"
                  : pageNo > 1
                  ? "bg-green-400"
                  : "bg-gray-300"
              } text-white flex justify-center items-center`}
            >
              {pageNo > 1 ? <TiTick /> : 1}
            </p>

            {/* Line between step 1 and step 2 */}
            <p
              className={`w-[44%] h-1 bg-gray-300 ${
                pageNo > 1 ? "bg-green-400" : "bg-gray-300"
              }`}
            ></p>

            {/* Step 2 */}
            <p
              className={`h-5 w-5 rounded-full border ${
                pageNo === 2
                  ? "bg-red-400"
                  : pageNo > 2
                  ? "bg-green-400"
                  : "bg-gray-300"
              } text-white flex justify-center items-center`}
            >
              {pageNo > 2 ? <TiTick /> : 2}
            </p>

            {/* Line between step 2 and step 3 */}
            <p
              className={`w-[44%] h-1 bg-gray-300 ${
                pageNo > 2 ? "bg-green-400" : "bg-gray-300"
              }`}
            ></p>

            {/* Step 3 */}
            <p
              className={`h-5 w-5 rounded-full border ${
                pageNo === 3
                  ? "bg-red-400"
                  : pageNo > 3
                  ? "bg-green-400"
                  : "bg-gray-300"
              } text-white flex justify-center items-center`}
            >
              {pageNo > 3 ? <TiTick /> : 3}
            </p>
          </div>

          <div className="flex justify-center relative items-center">
            <p className="text-[12px] absolute left-[-30px] font-semibold text-gray-600">
              Product details
            </p>
            <p className="text-[12px] font-semibold text-gray-600">
              Product Specifications
            </p>
            <p className="text-[12px] absolute -right-9 font-semibold text-gray-600">
              Product Overview
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSteps;
