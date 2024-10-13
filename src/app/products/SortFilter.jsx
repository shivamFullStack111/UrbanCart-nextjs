import React from "react";

const SortFilter = () => {
  return (
    <div className="w-full h-full p-4  rounded-lg shadow-lg">
      <p className="text-2xl font-bold mb-4 text-gray-800">Sort By</p>
      <div className="flex gap-4">
        <SortOption label="Low To High" />
        <SortOption label="High To Low" />
      </div>

      <p className="text-2xl font-bold mt-6 text-gray-800">Price Range</p>
      <div className="flex items-center gap-3 mt-4">
        <InputField placeholder="$0" />
        <InputField placeholder="$10,000" />
      </div>
    </div>
  );
};

const SortOption = ({ label }) => {
  return (
    <div className="flex items-center text-gray-800 font-semibold gap-2 p-3 bg-white rounded-lg shadow transition-transform duration-200 hover:scale-105 cursor-pointer">
      <div className="h-5 w-5 bg-white rounded-lg border border-gray-400 flex items-center justify-center">
        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
      </div>
      {label}
    </div>
  );
};

const InputField = ({ placeholder }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className="outline-none w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-lg transition-all duration-200 focus:border-blue-500"
    />
  );
};

export default SortFilter;
