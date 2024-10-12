import React from "react";

const ProductSkeleton = () => {
  return (
    <>
      <div className="flex flex-wrap gap-7 justify-center mt-20">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 56, 46, 35].map(
          (i) => (
            <div
              key={i}
              className="w-[90%] 500px:w-[45%] 900px:w-[30%] 1400px:w-[23%] 1800px:w-[18%] min-h-96 max-h-96 flex flex-col justify-center   bg-white"
            >
              <div className="w-full h-[78%] animate-pulse rounded-lg bg-gray-300 mb-3"></div>
              <div className="w-full h-[10%] animate-pulse rounded-md bg-gray-300 mb-3"></div>
              <div className="w-full h-[10%] animate-pulse rounded-md bg-gray-300 mb-3"></div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductSkeleton;
