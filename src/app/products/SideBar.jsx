import React from "react";
import {
  FaAngleRight,
  FaChevronRight,
  FaFilter,
  FaSortAmountUpAlt,
  FaUps,
} from "react-icons/fa";
import { useState } from "react";
import { MdCategory } from "react-icons/md";

const SideBar = () => {
  const [open, setopen] = useState(1);
  return (
    <>
      {/* desktop side bar */}
      <div className="w-[33%] 1200px:w-[25%] h-full max-800px:hidden bg-white  p-3">
        <div className="text-xl 1000px:text-2xl   font-semibold p-2 border-2 rounded-lg">
          <p>Total Results</p>
          <p className={"text-sm text-gray-500"}>1,432 Products</p>
        </div>

        <div className="">
          <Cat />

          <Sort />
          <Color />
          <Price />
          <Ratings />
        </div>
      </div>

      {/* mobile side bar */}
      <div className="800px:hidden flex gap-1 mx-1 ">
        <div className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 ">
          <MdCategory />

          <p>Category</p>
        </div>
        <div className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 ">
          <FaSortAmountUpAlt />
          <p>Sort</p>
        </div>
        <div className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 ">
          <FaFilter />
          <p>Filter</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;

const Cat = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div
      onClick={() => {
        console.log(setisOpen((p) => !p));
      }}
      className="border-b-2 p-2  py-3   "
    >
      <div className="cursor-pointer  flex justify-between items-center">
        <p className="font-semibold text-lg 1000px:text-2xl ">Category</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
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
      )}
    </div>
  );
};

const Sort = () => {
  const [isOpen, setisOpen] = useState(false);
  const [sortBy, setsortBy] = useState("");
  return (
    <div
      onClick={() => {
        console.log(setisOpen((p) => !p));
      }}
      className="border-b-2 p-2  py-3   "
    >
      <div className="cursor-pointer  flex justify-between items-center">
        <p className="font-semibold text-lg 1000px:text-2xl ">Sort</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-col  text-white  mt-4 p-2">
          <div className="flex gap-4 cursor-pointer font-semibold bg-black mt-3  hover:bg-slate-800 0 rounded-lg  p-2 ">
            <p className="h-6 w-6 border-2 border-white rounded-md "></p>
            <p>Low To High</p>
          </div>
          <div className="flex gap-4 cursor-pointer font-semibold bg-black mt-3 hover:bg-slate-800 0 rounded-lg  p-2 ">
            <p className="h-6 w-6 border-2 border-white rounded-md "></p>
            <p>High To Low</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Color = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div
      onClick={() => {
        console.log(setisOpen((p) => !p));
      }}
      className="border-b-2 p-2  py-3   "
    >
      <div className="cursor-pointer  flex justify-between items-center">
        <p className="font-semibold text-lg 1000px:text-2xl ">Color</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-row gap-3  p-2  text-white  mt-4 overflow-x-scroll hide-scrollbar">
          {["red", "green", "yellow", "blue", "pink", "purple"].map((i) => (
            <div
              key={i}
              style={{ backgroundColor: i }}
              className={`w-12 h-12 min-h-12 min-w-12 rounded-full `}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

const Price = () => {
  const [isOpen, setisOpen] = useState(false); // Toggle state for open/close
  const [values, setValues] = useState([0, 100]); // State for slider values

  return (
    <div className="border-b-2 p-2 py-3 ">
      <div
        onClick={() => setisOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Price</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className="mt-4  p-2">
          <p className="text-lg font-semibold ">From</p>
          <input
            type="text"
            placeholder="$0"
            className="outline-none bg-gray-200 text-lg  py-2 w-full rounded-xl p-1"
          />

          <p className="text-lg font-semibold ">To</p>
          <input
            type="text"
            placeholder="$10,000"
            className="outline-none bg-gray-200 text-lg  py-2 w-full rounded-xl p-1"
          />
        </div>
      )}
    </div>
  );
};

const Ratings = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div
      onClick={() => {
        console.log(setisOpen((p) => !p));
      }}
      className="border-b-2 cursor-pointer p-2  py-3  flex justify-between items-center"
    >
      <p className="font-semibold text-lg 1000px:text-2xl ">Ratings</p>
      <FaChevronRight size={26} />
    </div>
  );
};
