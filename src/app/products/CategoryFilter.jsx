"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("Brand A");

  // Dummy data for clothing brands
  const clothingBrands = ["Brand A", "Brand B", "Brand C", "Brand D"];

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Category Selector */}
      <div className="flex gap-2 w-full">
        <div className="flex flex-col items-center">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              onClick={() => setSelectedCategory(i)}
              className={`w-16 cursor-pointer hover:scale-105 transition-transform duration-150 h-16 flex items-center justify-center rounded-lg ${
                selectedCategory === i
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              } shadow-md`}
            >
              Category {i}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: (selectedCategory - 1) * 70 + selectedCategory * 3.5 }}
          transition={{ duration: 0.2 }}
          className="bg-red-500 w-1 h-16"
        />
      </div>

      {/* Brand Filter */}
      <div className="flex gap-4">
        {clothingBrands.map((brand, index) => (
          <div
            key={index}
            onClick={() => setSelectedBrand(brand)}
            className={`cursor-pointer rounded-lg p-2 flex items-center justify-center transition-colors duration-150 ${
              selectedBrand === brand
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } shadow-md hover:bg-blue-400`}
          >
            {brand}
          </div>
        ))}
      </div>

      {/* Render Products */}
      <div className="flex flex-wrap w-full gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="h-24 w-24 bg-slate-500 flex-grow-0 flex-shrink-0 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
          >
            Product {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
