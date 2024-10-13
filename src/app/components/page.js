import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const TrendingPage = () => {
  const { trendingProducts } = useSelector((state) => state.product);
  return (
    <>
      <div className="max-800px:pt-12  ">
        <p className="text-xl 800px:text-2xl font-bold text-gray-600 px-3 mt-4 mb-2 800px:p-7 animate-pulse">
          Trending
        </p>
        <div className="flex mt-2 flex-wrap justify-center w-full">
          {trendingProducts?.map((item, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[37%] 900px:w-[30%] 900px:h-72 1050px:w-[32%] 1050px:h-80 1300px:h-[400px] 1500px:w-[25%]  1750px:h-[420] 1950px:h-[440] 2000px:h-[460px]"
            >
              <div className="w-full h-[70%] 800px:h-[80%] relative">
                <Image
                  lazy="true"
                  alt="Product image"
                  src={item?.images[0]}
                  fill="true"
                />
              </div>
              <div className="px-2">
                <p className="text-sm font-semibold text-gray-500">
                  {item?.tittle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <p className="text-sm 800px:text-lg font-semibold">
                      ${item?.sellingPrice}
                    </p>
                    <p className="text-sm font-semibold line-through">
                      {item?.mrpPrice}
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
      </div>
    </>
  );
};

export default TrendingPage;
