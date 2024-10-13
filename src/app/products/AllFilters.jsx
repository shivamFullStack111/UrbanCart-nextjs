"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const AllFilters = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="p-4">
      {/* Color Filter */}
      <div className="bg-gray-100 rounded-lg shadow-lg mb-4">
        <div
          className={`flex justify-between items-center p-4 cursor-pointer rounded-lg transition duration-200 ${
            active === 1 ? "bg-blue-300" : "hover:bg-blue-200"
          }`}
          onClick={() => setActive(active === 1 ? 0 : 1)}
        >
          <p className="text-lg font-bold text-gray-800">Color</p>
          <FaChevronRight
            className={`transition-transform duration-200 ${
              active === 1 ? "-rotate-90" : ""
            }`}
            size={24}
            color={"#555"}
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: active === 1 ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 overflow-hidden flex gap-2 flex-wrap"
        >
          {["red", "blue", "green", "pink", "black", "white"].map((color) => (
            <div
              key={color}
              className="h-12 w-12 mt-2 rounded-full border-2 border-gray-300 p-1 flex items-center justify-center"
              style={{ backgroundColor: "white" }}
            >
              <div
                style={{ backgroundColor: color }}
                className="h-full w-full rounded-full"
              ></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Rating Filter */}
      <div className="bg-gray-100 rounded-lg shadow-lg">
        <div
          className={`flex justify-between items-center p-4 cursor-pointer rounded-lg transition duration-200 ${
            active === 2 ? "bg-blue-300" : "hover:bg-blue-200"
          }`}
          onClick={() => setActive(active === 2 ? 0 : 2)}
        >
          <p className="text-lg font-bold text-gray-800">Rating</p>
          <FaChevronRight
            className={`transition-transform duration-200 ${
              active === 2 ? "-rotate-90" : ""
            }`}
            size={24}
            color={"#555"}
          />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: active === 2 ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 overflow-hidden"
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="hover:bg-blue-600 hover:text-white text-md font-semibold px-3 py-2 rounded-lg bg-gray-200 mt-2 transition-colors duration-200"
            >
              {num}.0 and Above
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllFilters;
