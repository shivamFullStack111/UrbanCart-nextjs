import React from "react";
import DropDown from "./DropDown";
import { FaPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
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

const ProductDetails = ({ setproductDetails, setpageNo, productDetails }) => {
  return (
    <>
      <Toaster />
      <div className="p-1 mt-4 ">
        <div className=" border-2 p-4 border-gray-300  rounded-lg">
          <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
            Product Details
          </p>

          {/* form  */}
          <div className="flex flex-col mt-4 gap-2">
            {/* title  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Tittle</p>
              <input
                value={productDetails.tittle}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    tittle: e.target.value,
                  }))
                }
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>

            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Gender</p>
              <DropDown
                heading={productDetails.gender || "Select Gender"}
                onSelect={(val) =>
                  setproductDetails((p) => ({
                    ...p,
                    gender: val.toLowerCase(),
                  }))
                }
                items={[
                  {
                    key: "Men",
                    label: "Men",
                  },
                  {
                    key: "Women",
                    label: "Women",
                  },
                  {
                    key: "Kid",
                    label: "Kid",
                  },
                ]}
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>

            {/* category wear type  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Category</p>
              <DropDown
                heading={productDetails.category || "Select category"}
                onSelect={(val) =>
                  setproductDetails((p) => ({
                    ...p,
                    category: val.toLowerCase(),
                  }))
                }
                items={[
                  {
                    key: "Clothing",
                    label: "Clothing",
                  },
                  {
                    key: "Footwear",
                    label: "Footwear",
                  },
                ]}
              />
            </div>

            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Cloth Type</p>
              <DropDown
                onSelect={(val) =>
                  setproductDetails((p) => ({
                    ...p,
                    clothType: val.toLowerCase(),
                  }))
                }
                heading={productDetails.clothType || "Select cloth type"}
                items={
                  productDetails.category == "clothing"
                    ? productDetails?.gender == "men"
                      ? menClothing
                      : productDetails.gender == "women"
                      ? womenClothing
                      : kidsClothing
                    : productDetails?.gender == "men"
                    ? menFootwear
                    : productDetails.gender == "women"
                    ? womenFootwear
                    : kidsFootwear
                }
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>

            {/* brand  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Brand</p>
              <input
                value={productDetails.brand}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    brand: e.target.value,
                  }))
                }
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>

            {/* sku  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">
                Stock Keeping Unit
              </p>
              <input
                value={productDetails.stockKeepingUnit}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    stockKeepingUnit: e.target.value,
                  }))
                }
                placeholder="Enter SKU"
                type="number"
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>
            {/* mrp  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">(MRP) Price</p>
              <input
                value={productDetails.mrpPrice}
                type="number"
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    mrpPrice: e.target.value,
                  }))
                }
                placeholder="Enter MRP* Price"
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>
            {/*seliing price  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">
                Selling Price
              </p>
              <input
                type="number"
                value={productDetails.sellingPrice}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    sellingPrice: e.target.value,
                  }))
                }
                placeholder="Enter Selling price"
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>
            {/* stock  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Stock</p>
              <input
                value={productDetails.stock}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    stock: e.target.value,
                  }))
                }
                placeholder="Enter Stock Quantity"
                className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></input>
            </div>
            {/* description  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Description</p>
              <textarea
                value={productDetails.description}
                onChange={(e) =>
                  setproductDetails((p) => ({
                    ...p,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter Description"
                className="w-full p-1 py-2 resize min-h-56  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
              ></textarea>
            </div>
            {/* image url  */}
            <div className="p-1">
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-bold text-gray-500">
                  Image Urls
                </p>
                <FaPlus
                  onClick={() => {
                    if (
                      !productDetails.images[productDetails?.images?.length - 1]
                    ) {
                      toast.error("please first fill all image url fields");
                    } else {
                      setproductDetails((p) => ({
                        ...p,
                        images: [...p.images, ""],
                      }));
                    }
                  }}
                  className="text-gray-500"
                  size={25}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                {productDetails?.images?.map((img, i) => (
                  <input
                    key={i}
                    value={img}
                    onChange={(e) =>
                      setproductDetails((p) => ({
                        ...p,
                        images: p.images.map((img, j) => {
                          if (i == j) {
                            return e.target.value;
                          } else {
                            return img;
                          }
                        }),
                      }))
                    }
                    placeholder="http://example.png"
                    className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                  ></input>
                ))}
              </div>
            </div>

            {/* next button  */}
            <div
              onClick={() => {
                console.log(productDetails);
                const {
                  tittle,
                  gender,
                  clothType,
                  category,
                  brand,
                  stockKeepingUnit,
                  mrpPrice,
                  sellingPrice,
                  stock,
                  description,
                  images,
                } = productDetails;
                if (
                  !tittle ||
                  !gender ||
                  !clothType ||
                  !category ||
                  !brand ||
                  !stockKeepingUnit ||
                  !mrpPrice ||
                  !sellingPrice ||
                  !stock ||
                  !description ||
                  !images?.length
                ) {
                  return toast.error("please fill all field to continue");
                }
                setpageNo(2);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="text-white  mt-6 font-bold text-lg bg-violet-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-violet-400 rounded-lg  hover:text-gray-600  py-1 flex justify-center items-center"
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
