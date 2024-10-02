import React from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [open, setopen] = useState(second)  
  return (
    <>
      <div className="w-[25%] h-full bg-white  p-3">
        <div className="text-2xl font-semibold p-2 border-2 rounded-lg">
          <p>Total Results</p>
          <p className={"text-sm text-gray-500"}>1,432 Products</p>
        </div>

        <div>
          <div
            onClick={() => {
              console.log(setopen(1));
            }}
            className="border-b-2 p-2  py-3 mx-4  "
          >
            <div className="cursor-pointer  flex justify-between items-center">
              <p className="font-semibold text-2xl">Category</p>
              <FaChevronRight size={26} />
            </div>

            <div className=" flex flex-col  mt-4">
              <div className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 0 rounded-lg  p-2 ">
                <p className="h-6 w-6 border-2 border-black rounded-md "></p>
                <p>Jeans</p>
              </div>
              <div className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 ">
                <p className="h-6 w-6 border-2 border-black rounded-md "></p>
                <p>Jeans</p>
              </div>
              <div className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 ">
                <p className="h-6 w-6 border-2 border-black rounded-md "></p>
                <p>Jeans</p>
              </div>
              <div className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 ">
                <p className="h-6 w-6 border-2 border-black rounded-md "></p>
                <p>Jeans</p>
              </div>
              <div className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 ">
                <p className="h-6 w-6 border-2 border-black rounded-md "></p>
                <p>Jeans</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              console.log(setopen(2));
            }}
            className="border-b-2 cursor-pointer p-2  py-3 mx-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold">Sort</p>
            <FaChevronRight size={26} />
          </div>
          <div
            onClick={() => {
              console.log(setopen(3));
            }}
            className="border-b-2 cursor-pointer p-2  py-3 mx-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold">Color</p>
            <FaChevronRight size={26} />
          </div>
          <div
            onClick={() => {
              console.log(setopen(4));
            }}
            className="border-b-2 cursor-pointer p-2  py-3 mx-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold">Price</p>
            <FaChevronRight size={26} />
          </div>
          <div
            onClick={() => {
              console.log(setopen(5));
            }}
            className="border-b-2 cursor-pointer p-2  py-3 mx-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold">Ratings</p>
            <FaChevronRight size={26} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
