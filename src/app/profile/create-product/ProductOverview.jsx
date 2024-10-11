import React from "react";
import {
  bgColors,
  clothingMaterials,
  fitTypes,
  footwearMaterials,
  kidsClothing,
  kidsFootwear,
  menClothing,
  menFootwear,
  neckStyles,
  patterns,
  sleeveTypes,
  soleMaterials,
  womenClothing,
  womenFootwear,
} from "@/app/utils";
import Image from "next/image";
import { FaArrowCircleLeft } from "react-icons/fa";

const ProductOverview = ({
  setpageNo,
  handleCreateProduct,
  productDetails,
  productSpecifications,
}) => {
  return (
    <>
      <div className="p-1 mt-4 ">
        <div className=" border-2 p-4 border-gray-300  rounded-lg">
          <FaArrowCircleLeft
            onClick={() => setpageNo((p) => p - 1)}
            className="text-gray-500 text-2xl cursor-pointer mb-2 hover:text-red-400"
          />
          {/* Header */}

          <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
            Product Overview
          </p>

          {/* Product Details */}
          <div className="grid grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <p className="text-gray-500 font-medium">Product Name</p>
              <p className="text-gray-700">{productDetails?.tittle}</p>
            </div>

            {/* Category */}
            <div>
              <p className="text-gray-500 font-medium">Category</p>
              <p className="text-gray-700">{productDetails?.category}</p>
            </div>

            {/* Type */}
            <div>
              <p className="text-gray-500 font-medium">Cloth Type</p>
              <p className="text-gray-700">{productDetails?.clothType}</p>
            </div>

            {/* Size */}
            <div>
              <p className="text-gray-500 font-medium">Size</p>
              <p className="text-gray-700">{productDetails?.size}</p>
            </div>

            {/* Color */}
            <div>
              <p className="text-gray-500 font-medium">Color</p>
              {productSpecifications?.colors?.map((i) => (
                <p
                  key={i.color}
                  style={{ backgroundColor: i }}
                  className="text-gray-700 h-3 w-3 rounded-full"
                ></p>
              ))}
            </div>

            {/* Material */}
            <div>
              <p className="text-gray-500 font-medium">Material</p>
              <p className="text-gray-700">{productSpecifications?.material}</p>
            </div>

            {/* Fit Type */}
            <div>
              <p className="text-gray-500 font-medium">Fit Type</p>
              <p className="text-gray-700">{productSpecifications?.fitType}</p>
            </div>

            {/* Pattern */}
            <div>
              <p className="text-gray-500 font-medium">Pattern</p>
              <p className="text-gray-700">
                {productSpecifications?.clothPattern}
              </p>
            </div>

            {/* Sleeve Type */}
            <div>
              <p className="text-gray-500 font-medium">Sleeve Type</p>
              <p className="text-gray-700">
                {productSpecifications?.sleeveType}
              </p>
            </div>

            {/* Neck Style */}
            <div>
              <p className="text-gray-500 font-medium">Neck Style</p>
              <p className="text-gray-700">{productSpecifications?.neckType}</p>
            </div>
          </div>

          {/* Product Images */}
          <div className="mt-6">
            <p className="text-gray-500 font-medium">Product Images</p>
            <div className="flex space-x-4 mt-3">
              {productDetails?.images?.map((im) => (
                <div
                  key={im}
                  className="w-24 relative h-24 object-cover rounded-lg border border-gray-300"
                >
                  <Image
                    src={im}
                    fill={true}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                    alt="Product Image 1"
                  />
                </div>
              ))}
            </div>
            <div
              onClick={() => handleCreateProduct()}
              className="text-white  mt-6 font-bold text-lg bg-green-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-green-400 rounded-lg  hover:text-green-600  py-1 flex justify-center items-center"
            >
              Create Product
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
