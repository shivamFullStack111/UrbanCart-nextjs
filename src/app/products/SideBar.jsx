"use client";
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
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import AllFilters from "./AllFilters";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { bgColors } from "../utils";

const SideBar = ({
  category,
  setcategory,
  sortBy,
  setsortBy,
  color,
  setcolor,
  price,
  setprice,
  ratingAndAbove,
  setratingAndAbove,
  gender,
  setgender,
}) => {
  const [sheet, setsheet] = useState("");
  const [sheetOpen, setsheetOpen] = useState(false);

  const toggleSheet = (type) => {
    setsheet(type);
    setsheetOpen(true);
  };

  return (
    <>
      {/* desktop filter side bar */}
      <div className="min-w-[31%] max-w-[31%] 1200px:min-w-[23%] 1200px:max-w-[23%]  h-full max-800px:hidden bg-white  p-3">
        <div className="text-xl 1000px:text-2xl   font-semibold p-2 border-2 rounded-lg">
          <p>Total Results</p>
          <p className={"text-sm text-gray-500"}>1,432 Products</p>
        </div>

        <div className="">
          <Gender gender={gender} setgender={setgender} />
          <Cat category={category} setcategory={setcategory} />
          <Sort sortBy={sortBy} setsortBy={setsortBy} />
          <Color color={color} setcolor={setcolor} />
          <Price price={price} setprice={setprice} />
          <Ratings
            ratingAndAbove={ratingAndAbove}
            setratingAndAbove={setratingAndAbove}
          />
        </div>
      </div>

      {/* bottom sheet for mobile filter */}

      <motion.div
        initial={{ y: 1000, opacity: sheetOpen ? 1 : 0 }}
        animate={{ y: sheetOpen ? 0 : 1000, opacity: sheetOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[90%] rounded-t-3xl hide-scrollbar  800px:hidden fixed overflow-y-scroll border-2 shadow-2xl bg-gray-200 bottom-0 z-50"
      >
        <RxCross1
          size={30}
          onClick={() => {
            setsheetOpen(false);
            setsheet("");
          }}
          className="ml-auto cursor-pointer hover:text-red-500 m-4"
        />
        {sheet == "category" && <CategoryFilter></CategoryFilter>}
        {sheet == "sort" && <SortFilter></SortFilter>}
        {sheet == "filter" && <AllFilters></AllFilters>}
      </motion.div>

      {/* mobile filter top bar */}
      <div className="800px:hidden flex gap-1 mx-1 ">
        <div
          onClick={() => {
            if (sheet == "category") {
              setsheet("");
              setsheetOpen(false);
            } else {
              toggleSheet("category");
            }
          }}
          className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 hover:bg-slate-300 "
        >
          <MdCategory />

          <p>Category</p>
        </div>
        <div
          onClick={() => {
            if (sheet == "sort") {
              setsheet("");
              setsheetOpen(false);
            } else {
              toggleSheet("sort");
            }
          }}
          className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 hover:bg-slate-300 "
        >
          <FaSortAmountUpAlt />
          <p>Sort</p>
        </div>
        <div
          onClick={() => {
            if (sheet == "filter") {
              setsheet("");
              setsheetOpen(false);
            } else {
              toggleSheet("filter");
            }
          }}
          className="flex cursor-pointer gap-1 text-sm font-semibold py-3  w-full justify-center items-center bg-gray-200 hover:bg-slate-300 "
        >
          <FaFilter />
          <p>Filter</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;

const Gender = ({ gender, setgender }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="border-b-2 p-2  py-3   ">
      <div
        onClick={() => {
          console.log(setisOpen((p) => !p));
        }}
        className="cursor-pointer  flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Gender</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-col  mt-4">
          <p
            onClick={() => setgender("")}
            className="font-semibold underline ml-auto cursor-pointer"
          >
            clear
          </p>

          <div
            onClick={() => setgender("kid")}
            className="flex gap-4 cursor-pointer font-semibold   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1">
              {gender == "kid" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Kids</p>
          </div>
          <div
            onClick={() => setgender("men")}
            className="flex gap-4 cursor-pointer font-semibold   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1">
              {gender == "men" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Mens</p>
          </div>
          <div
            onClick={() => setgender("women")}
            className="flex gap-4 cursor-pointer font-semibold   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1">
              {gender == "women" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Womens</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Cat = ({ setcategory, category }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="border-b-2 p-2  py-3   ">
      <div
        onClick={() => {
          console.log(setisOpen((p) => !p));
        }}
        className="cursor-pointer  flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Category</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-col  mt-4">
          <p
            onClick={() => setcategory("")}
            className="font-semibold underline ml-auto cursor-pointer"
          >
            clear
          </p>

          <div
            onClick={() => setcategory("clothing")}
            className="flex gap-4 cursor-pointer font-semibold   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1">
              {category == "clothing" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Clothing</p>
          </div>
          <div
            onClick={() => setcategory("footwear")}
            className="flex gap-4 cursor-pointer font-semibold   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1">
              {category == "footwear" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Footwear</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Sort = ({ sortBy, setsortBy }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="border-b-2 p-2  py-3   ">
      <div
        onClick={() => {
          console.log(setisOpen((p) => !p));
        }}
        className="cursor-pointer  flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Sort</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-col    mt-4 p-2">
          <p
            onClick={() => setsortBy("")}
            className="font-semibold underline ml-auto cursor-pointer"
          >
            clear
          </p>
          <div
            onClick={() => setsortBy("lowtohigh")}
            className="flex gap-4 cursor-pointer font-semibold  mt-3   rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1 ">
              {sortBy == "lowtohigh" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>Low To High</p>
          </div>
          <div
            onClick={() => setsortBy("highttolow")}
            className="flex gap-4 cursor-pointer font-semibold  mt-3  rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full flex justify-center items-center p-1 ">
              {sortBy == "highttolow" && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>High To Low</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Color = ({ color, setcolor }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="border-b-2 p-2  py-3   ">
      <div
        onClick={() => {
          console.log(setisOpen((p) => !p));
        }}
        className="cursor-pointer  flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Color</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className="w-full">
          <div className="w-full flex justify-end">
            {" "}
            <p
              onClick={() => setcolor("")}
              className="font-semibold underline ml-auto cursor-pointer"
            >
              clear
            </p>
          </div>
          <div className=" flex flex-row gap-3  p-2  text-white  mt-4 overflow-x-scroll hide-scrollbar">
            {bgColors.map((i, index) => (
              <div
                key={index}
                style={{ backgroundColor: i.color }}
                onClick={() => setcolor(i.color)}
                className={`w-10 ${
                  color == i.color && "border-2 border-blue-400"
                } h-10 min-h-10 min-w-10 rounded-full `}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Price = ({ price, setprice }) => {
  const [isOpen, setisOpen] = useState(true); // Toggle state for open/close
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
          <div className="w-full flex justify-end">
            {" "}
            <p
              onClick={() => setprice({ from: "", to: "" })}
              className="font-semibold underline ml-auto cursor-pointer"
            >
              clear
            </p>
          </div>
          <p className="text-lg font-semibold ">From</p>
          <input
            onChange={(e) => {
              setprice((p) => ({ ...p, from: e.target.value }));
            }}
            value={price?.from}
            type="number"
            placeholder="$0"
            className="outline-none bg-gray-200 text-lg  py-2 w-full rounded-xl p-1"
          />

          <p className="text-lg font-semibold ">To</p>
          <input
            value={price?.to}
            onChange={(e) => {
              setprice((p) => ({ ...p, to: e.target.value }));
            }}
            type="number"
            placeholder="$10,000"
            className="outline-none bg-gray-200 text-lg  py-2 w-full rounded-xl p-1"
          />
        </div>
      )}
    </div>
  );
};

const Ratings = ({ ratingAndAbove, setratingAndAbove }) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="border-b-2 p-2  py-3   ">
      <div
        onClick={() => {
          console.log(setisOpen((p) => !p));
        }}
        className="cursor-pointer  flex justify-between items-center"
      >
        <p className="font-semibold text-lg 1000px:text-2xl ">Rating</p>
        <FaChevronRight size={26} />
      </div>

      {isOpen && (
        <div className=" flex flex-col  mt-4">
          <div className="w-full flex justify-end">
            {" "}
            <p
              onClick={() => setratingAndAbove("")}
              className="font-semibold underline ml-auto cursor-pointer"
            >
              clear
            </p>
          </div>
          <div
            onClick={() => setratingAndAbove(1)}
            className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 0 rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full p-1 ">
              {ratingAndAbove == 1 && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>
            <p>1.0 and Above</p>
          </div>
          <div
            onClick={() => setratingAndAbove(2)}
            className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 0 rounded-lg  p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full p-1 ">
              {ratingAndAbove == 2 && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>{" "}
            <p>2.0 and Above</p>
          </div>
          <div
            onClick={() => setratingAndAbove(3)}
            className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full p-1 ">
              {ratingAndAbove == 3 && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>{" "}
            <p>3.0 and Above</p>
          </div>
          <div
            onClick={() => setratingAndAbove(4)}
            className="flex gap-4 cursor-pointer font-semibold hover:bg-gray-300 rounded-lg p-2 "
          >
            <p className="h-6 w-6 border-2 border-black rounded-full p-1 ">
              {ratingAndAbove == 4 && (
                <p className="w-full h-full bg-black rounded-full"></p>
              )}
            </p>{" "}
            <p>4.0 and Above</p>
          </div>
        </div>
      )}
    </div>
  );
};
