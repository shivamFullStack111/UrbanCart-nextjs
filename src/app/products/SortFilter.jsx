import React from "react";

const SortFilter = () => {
  return (
    <>
      <div className="w-full h-full p-2">
        <p className="text-xl font-semibold ">Sort By</p>
        <div className="flex gap-3 items-center">
          <div className="flex items-center  text-slate-800 font-semibold mt-2 gap-2  py-2 px-4  bg-white rounded-lg justify-center">
            <p className="h-5 w-5 bg-white  rounded-lg border font-semibold border-black"></p>
            Low To High
          </div>
          <div className="flex items-center  text-slate-800 font-semibold mt-2 gap-2  py-2 px-4  bg-white rounded-lg justify-center">
            <p className="h-5 w-5 bg-white  rounded-lg border font-semibold border-black"></p>
            High To Low
          </div>
        </div>

        <p className="text-xl font-semibold mt-4 ">Price Range</p>
        <div className="flex items-center gap-3 p-3 mx-3 mt-2 rounded-lg active:border  bg-white text-lg">
          <input
            type="number"
            placeholder="$0"
            className="outline-none w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3 p-3 mx-3 mt-2 rounded-lg active:border  bg-white text-lg">
          <input
            type="number"
            placeholder="$10,000"
            className="outline-none w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default SortFilter;
