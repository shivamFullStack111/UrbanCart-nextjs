import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import DropDown from "@/app/profile/create-product/DropDown";
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
  womenClothing,
  womenFootwear,
} from "@/app/utils";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const ProductEditPage = ({
  seteditOpen,
  product,
  setselectedEditProduct,
  setproducts,
  allproducts,
}) => {
  const [chooseColorOpen, setchooseColorOpen] = useState(true);
  const [chooseSizeOpen, setchooseSizeOpen] = useState(true);
  const updateProduct = async () => {
    try {
      const res = await axios.post(`/api/update-product`, { product });
      if (res?.data?.success) {
        toast.success(res.data?.message);
        // console.log("product chaged", product);
        // console.log("product chaged", allproducts);

        const editProducts = allproducts.map((prdt) => {
          if (prdt._id === product._id) {
            console.log("match");
            return product;
          } else {
            console.log("not match");
            return prdt;
          }
        });

        setproducts(editProducts);
        setTimeout(() => {
          setselectedEditProduct(null);
          seteditOpen(false);
        }, 400);
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Toaster />
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0004] z-50 flex justify-center items-center">
        <div className="w-full h-full 600px:w-[550px] 600px:h-[94%] p-2 bg-white overflow-y-scroll hide-scrollbar 600px:rounded-xl">
          <RxCross1
            onClick={() => seteditOpen(false)}
            className="text-3xl hover:scale-110 text-black cursor-pointer hover:text-red-400 ml-auto m-3  max-600px:mr-2 "
          />
          <p className="text-lg font-semibold my-1">Images</p>
          <div className="  flex gap-2 overflow-x-scroll hide-scrollbar">
            {product?.images?.map((img, i) => (
              <div key={i} className="p-1 border">
                <div className="w-24 relative h-32">
                  <RxCross1
                    onClick={() => {
                      setselectedEditProduct((prev) => {
                        return {
                          ...prev,
                          images: prev.images?.filter((imgg) => imgg !== img),
                        };
                      });
                    }}
                    className="absolute right-1 cursor-pointer top-1 text-white bg-black hover:bg-red-400 text-xl z-40"
                  />
                  <Image alt="product" src={img} fill={true} />
                </div>
              </div>
            ))}
          </div>

          {/* fields  */}
          <div className="w-full">
            {/* title  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">TITLE:</p>
              <input
                value={product?.title}
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
                type="text"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>

            {/* gender  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">GENDER:</p>
              <DropDown
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    gender: val.toLowerCase(),
                  }))
                }
                heading={product?.gender || "Select gender"}
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
            </div>
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">GENDER:</p>
              <DropDown
                heading={product?.category || "Select category"}
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
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

            {/* brand  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">BRAND:</p>
              <input
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    brand: e.target.value,
                  }));
                }}
                value={product?.brand}
                type="text"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* clothType  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">CLOTH TYPE:</p>
              <DropDown
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    clothType: val.toLowerCase(),
                  }))
                }
                heading={product?.clothType || "Select cloth type"}
                items={
                  product?.category == "clothing"
                    ? product?.gender == "men"
                      ? menClothing
                      : product?.gender == "women"
                      ? womenClothing
                      : kidsClothing
                    : product?.gender == "men"
                    ? menFootwear
                    : product?.gender == "women"
                    ? womenFootwear
                    : kidsFootwear
                }
              />
            </div>
            {/* stock keeping unit  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">STOCK KEEPING UNIT:</p>
              <input
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    stockKeepingUnit: e.target.value,
                  }));
                }}
                value={product?.stockKeepingUnit}
                type="number"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* mrp price   */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">MRP PRICE:</p>
              <input
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    mrpPrice: e.target.value,
                  }));
                }}
                value={product?.mrpPrice}
                type="number"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* selling price   */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">SELLING PRICE:</p>
              <input
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    sellingPrice: e.target.value,
                  }));
                }}
                value={product?.sellingPrice}
                type="number"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>

            {/* stock  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">STOCK:</p>
              <input
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    stock: e.target.value,
                  }));
                }}
                value={product?.stock}
                type="number"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* description  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">DESCRIPTION:</p>
              <textarea
                onChange={(e) => {
                  setselectedEditProduct((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
                value={product?.description}
                rows={5}
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* colors  */}

            <div className="flex justify-between items-center relative">
              <p className="text-sm mb-1  font-semibold">COLORS:</p>
              <div
                onClick={() => setchooseColorOpen(true)}
                className="bg-violet-400 border-2 rounded-sm text-white px-3  hover:bg-white font-semibold hover:border-violet-400 hover:text-violet-400 cursor-pointer "
              >
                Add
              </div>
              {/* absolute box for choose color ......................................................................... */}

              {chooseColorOpen && (
                <div className="absolute overflow-y-scroll hide-scrollbar z-30 w-full h-40 bg-gray-100 shadow-2xl rounded-2xl border border-gray-400">
                  <div className="w-full flex justify-between items-center p-2">
                    <p className="text-xl text-gray-500 font-semibold">
                      Add more colors
                    </p>
                    <RxCross1
                      onClick={() => setchooseColorOpen(false)}
                      className="text-2xl hover:scale-110 hover:text-red-400 m-2 mb-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bgColors.map((c, i) => (
                      <p
                        onClick={() => {
                          const isAlreadyExist =
                            setselectedEditProduct?.colors?.find(
                              (co) => co.color === c.color
                            );

                          alert(isAlreadyExist);
                        }}
                        style={{ backgroundColor: c.color }}
                        key={i}
                        className="h-10 w-10 mb-2 rounded-full"
                      ></p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {product?.colors?.length > 0 && (
              <div className="overflow-x-scroll flex gap-2 hide-scrollbar">
                {product?.colors?.map((c, i) => (
                  <div
                    style={{ backgroundColor: c?.color }}
                    className="h-10 w-10 relative mt-2 rounded-full "
                    key={i}
                  >
                    <RxCross1 className="-top-1 absolute cursor-pointer hover:bg-red-400 -right-1 rounded-full p-1 text-2xl bg-black text-white" />
                  </div>
                ))}
              </div>
            )}
            {/* sizes  */}

            <div className="flex justify-between relative items-center mt-4">
              <p className="text-sm mb-1  font-semibold">SIZE:</p>
              <div
                onClick={() => setchooseSizeOpen(true)}
                className="bg-violet-400 border-2 rounded-sm text-white px-3  hover:bg-white font-semibold hover:border-violet-400 hover:text-violet-400 cursor-pointer "
              >
                Add
              </div>

              {/* absolute box for choose size ......................................................................... */}

              {chooseSizeOpen && (
                <div className="absolute z-30 w-full h-40 bg-gray-100 shadow-2xl rounded-2xl border border-gray-400">
                  <div className="w-full flex justify-end">
                    <RxCross1
                      onClick={() => setchooseSizeOpen(false)}
                      className="text-2xl hover:scale-110 hover:text-red-400 m-2 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
            {product?.sizes?.length > 0 && (
              <div className="overflow-x-scroll flex gap-2 hide-scrollbar">
                {product?.sizes?.map((c, i) => (
                  <div
                    // style={{ backgroundColor: c?.color }}
                    className="h-8 w-12 flex justify-center items-center bg-black text-white py-1 p-3 relative mt-2  "
                    key={i}
                  >
                    {c}
                    <RxCross1 className="-top-1 absolute cursor-pointer hover:bg-red-400 -right-1 rounded-full p-1 text-2xl bg-black text-white" />
                  </div>
                ))}
              </div>
            )}
            {/* material  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">MATERIAL:</p>
              <DropDown
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    material: val.toLowerCase(),
                  }))
                }
                heading={product?.material || "Select Material"}
                items={
                  product?.category == "footwear"
                    ? footwearMaterials
                    : clothingMaterials
                }
              />
            </div>
            {/* material  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">CLOTH PATTERN:</p>
              <DropDown
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    clothPattern: val.toLowerCase(),
                  }))
                }
                heading={product?.clothPattern || "Select Cloth Pattern"}
                items={patterns}
              />
            </div>
            {/* fit type  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">FIT TYPE:</p>
              <DropDown
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    fitType: val.toLowerCase(),
                  }))
                }
                heading={product?.fitType || "Select Cloth Fit Type"}
                items={fitTypes}
              />
            </div>
            {/* sleveve type  */}
            {product?.gender == "women" && (
              <div className="mt-4">
                {" "}
                <p className="text-sm mb-1  font-semibold">SLEEVE TYPE:</p>
                <DropDown
                  heading={product?.sleeveType || "Select Sleeve Type "}
                  onSelect={(val) =>
                    setselectedEditProduct((p) => ({
                      ...p,
                      sleeveType: val.toLowerCase(),
                    }))
                  }
                  items={sleeveTypes}
                />
              </div>
            )}
            {/* nect type  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">NECK TYPE:</p>
              <DropDown
                heading={product?.neckType || "Select Neck Type "}
                onSelect={(val) =>
                  setselectedEditProduct((p) => ({
                    ...p,
                    neckType: val.toLowerCase(),
                  }))
                }
                items={neckStyles}
              />
            </div>

            {/* heel height  */}
            {product?.category == "footwear" && (
              <div className="mt-4">
                {" "}
                <p className="text-sm mb-1  font-semibold">HEEL HEIGHT:</p>
                <input
                  onChange={(e) => {
                    setselectedEditProduct((prev) => ({
                      ...prev,
                      heelHeight: e.target.value,
                    }));
                  }}
                  value={product?.heelHeight}
                  type="number"
                  className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                  placeholder="Enter title"
                />
              </div>
            )}

            <div
              onClick={() => updateProduct()}
              className="h-12 flex cursor-pointer justify-center items-center w-full mt-4 rounded-md bg-violet-500 text-white text-lg font-semibold border-2 hover:bg-white hover:text-violet-500 hover:border-violet-500"
            >
              Update
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditPage;
