import { dummyProducts } from "@/app/utils";
import Image from "next/image";
import React from "react";

const NewArrival = () => {
  return (
    <>
      <p className="text-xl 800px:text-2xl  font-bold text-gray-600 px-3 mb-2 800px:p-7 pt-1 animate-pulse">
        New Arrival
      </p>
      <div className="flex mt-2 flex-wrap justify-center bg-gray-200 w-full">
        {dummyProducts.slice(6, 12)?.map((item, i) => (
          <div
            key={i}
            className="h-64 cursor-pointer  border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[37%] 900px:w-[30%] 900px:h-72 1050px:w-[32%] 1050px:h-80 1300px:h-[400px] 1500px:w-[25%]  1750px:h-[420] 1950px:h-[440] 2000px:h-[460px]"
          >
            <div className="w-full h-[70%] 800px:h-[80%] relative">
              <Image
                lazy="true"
                alt="Product image"
                src={item?.images[0]}
                fill="true"
                className="hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="px-2">
              <p className="text-sm font-semibold text-gray-500">
                {item?.title}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <p className="text-sm 800px:text-lg font-semibold">
                    ${item?.price}
                  </p>
                  <p className="text-sm font-semibold line-through">
                    {item.price + 41}
                  </p>
                </div>
                <p className="bg-green-500 px-2 py-1 text-sm 1000px:text-lg rounded-xl text-white animate-bounce">
                  13% off
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrival;
