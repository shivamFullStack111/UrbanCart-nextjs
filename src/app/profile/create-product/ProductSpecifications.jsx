import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import DropDown from "./DropDown";
import { bgColors } from "@/app/utils";
import {
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

const ProductSpecifications = ({
  setproductSpecifications,
  setpageNo,
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

          <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
            Product Specifications and Variations
          </p>

          {/* form  */}
          <div className="flex flex-col mt-4 gap-2">
            {/* size  */}

            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Chosse Size</p>

              <div className="flex flex-wrap gap-2 items-center ">
                {["S", "M", "L", "XL", "XXL", "XXXL"].map((i) => (
                  <SizeCard
                    setproductSpecifications={setproductSpecifications}
                    productSpecifications={productSpecifications || []}
                    key={i}
                    size={i}
                  />
                ))}
              </div>
            </div>

            {/* colors  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">
                Chosse Color
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                {[
                  { name: "Red-Orange", color: "#FF5733" },
                  { name: "Lime Green", color: "#33FF57" },
                  { name: "Blue", color: "#3357FF" },
                  { name: "Khaki", color: "#F0E68C" },
                  { name: "Gold", color: "#FFD700" },
                  { name: "Hot Pink", color: "#FF69B4" },
                  { name: "Blue Violet", color: "#8A2BE2" },
                  { name: "Chartreuse", color: "#7FFF00" },
                  { name: "Orange Red", color: "#FF4500" },
                  { name: "Sea Green", color: "#2E8B57" },
                  { name: "Steel Blue", color: "#4682B4" },
                  { name: "Firebrick", color: "#B22222" },
                  { name: "Cadet Blue", color: "#5F9EA0" },
                  { name: "Medium Spring Green", color: "#00FA9A" },
                  { name: "Chocolate", color: "#D2691E" },
                  { name: "Dark Turquoise", color: "#00CED1" },
                  { name: "Tomato", color: "#FF6347" },
                  { name: "Slate Blue", color: "#6A5ACD" },
                  { name: "Pale Violet Red", color: "#DB7093" },
                  { name: "Light Sea Green", color: "#20B2AA" },
                  { name: "Light Salmon", color: "#FFA07A" },
                  { name: "Medium Violet Red", color: "#C71585" },
                  { name: "Turquoise", color: "#40E0D0" },
                  { name: "Maroon", color: "#800000" },
                  { name: "Powder Blue", color: "#B0E0E6" },
                  { name: "Medium Slate Blue", color: "#7B68EE" },
                  { name: "Dark Orange", color: "#FF8C00" },
                  { name: "Slate Gray", color: "#708090" },
                  { name: "Brown", color: "#A52A2A" },
                  { name: "Medium Purple", color: "#9370DB" },
                  { name: "Saddle Brown", color: "#8B4513" },
                  { name: "Peach Puff", color: "#FFDAB9" },
                  { name: "Forest Green", color: "#228B22" },
                  { name: "Plum", color: "#DDA0DD" },
                  { name: "Dodger Blue", color: "#1E90FF" },
                  { name: "Yellow Green", color: "#9ACD32" },
                  { name: "Cornflower Blue", color: "#6495ED" },
                  { name: "Deep Pink", color: "#FF1493" },
                  { name: "Medium Aquamarine", color: "#66CDAA" },
                  { name: "Light Pink", color: "#FFB6C1" },
                ]?.map((item, i) => (
                  <ColorCard
                    setproductSpecifications={setproductSpecifications}
                    productSpecifications={productSpecifications}
                    key={i}
                    i={item}
                  />
                ))}
              </div>
            </div>

            {/* material  different for both cloth and footwear */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Material</p>
              <DropDown
                onSelect={(val) =>
                  setproductSpecifications((p) => ({
                    ...p,
                    material: val.toLowerCase(),
                  }))
                }
                heading={productSpecifications?.material || "Select Material"}
                items={
                  productDetails?.category == "footwear"
                    ? footwearMaterials
                    : clothingMaterials
                }
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>
            {/* cloth pattern  for cloth  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">
                Cloth Pattern
              </p>
              <DropDown
                onSelect={(val) =>
                  setproductSpecifications((p) => ({
                    ...p,
                    clothPattern: val.toLowerCase(),
                  }))
                }
                heading={
                  productSpecifications?.clothPattern || "Select Cloth Pattern"
                }
                items={patterns}
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>
            {/*  fti type  Pattern for cloth  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Fit Type</p>
              <DropDown
                onSelect={(val) =>
                  setproductSpecifications((p) => ({
                    ...p,
                    fitType: val.toLowerCase(),
                  }))
                }
                heading={
                  productSpecifications?.fitType || "Select Cloth Fit Type"
                }
                items={fitTypes}
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>
            {/*  Sleeve Type (for tops)  */}
            {productDetails?.gender == "women" && (
              <div className="p-1">
                <p className="text-[16px] font-bold text-gray-500">
                  Sleeve Type
                </p>
                <DropDown
                  heading={
                    productSpecifications?.sleeveType || "Select Sleeve Type "
                  }
                  onSelect={(val) =>
                    setproductSpecifications((p) => ({
                      ...p,
                      sleeveType: val.toLowerCase(),
                    }))
                  }
                  items={sleeveTypes}
                />
                {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
              </div>
            )}
            {/*  Sleeve Type (for top and cloth)  */}
            <div className="p-1">
              <p className="text-[16px] font-bold text-gray-500">Neck Type</p>
              <DropDown
                heading={productSpecifications?.neckType || "Select Neck Type "}
                onSelect={(val) =>
                  setproductSpecifications((p) => ({
                    ...p,
                    neckType: val.toLowerCase(),
                  }))
                }
                items={neckStyles}
              />
              {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
            </div>

            {/* Heel Height for heel  */}
            {productDetails?.category == "footwear" && (
              <div className="p-1">
                <p className="text-[16px] font-bold text-gray-500">
                  Heel Height
                </p>
                <input
                  placeholder={"Enter Heel Height"}
                  onChange={(e) =>
                    setproductSpecifications((p) => ({
                      ...p,
                      heelHeight: e.target.value,
                    }))
                  }
                  className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                ></input>
              </div>
            )}

            {/* sole material for footwear  */}
            {productDetails.category == "footwear" && (
              <div className="p-1">
                <p className="text-[16px] font-bold text-gray-500">
                  Sole Material
                </p>
                <DropDown
                  onSelect={(val) =>
                    setproductSpecifications((p) => ({
                      ...p,
                      soleMaterial: val.toLowerCase(),
                    }))
                  }
                  heading={
                    productSpecifications?.soleMaterial ||
                    "Select Sole Material "
                  }
                  items={soleMaterials}
                />
                {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
              </div>
            )}

            {/* next button  */}
            <div
              onClick={() => {
                console.log(productSpecifications);
                setpageNo(3);
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

export default ProductSpecifications;

const SizeCard = ({
  setproductSpecifications,
  productSpecifications,
  size,
}) => {
  const [active, setactive] = useState(false);

  useEffect(() => {
    const isActive = productSpecifications?.sizes?.find((p) => p === size);
    if (isActive) {
      setactive(true);
    }
  }, []);

  const handleAddSize = (siz) => {
    const isExist = productSpecifications?.sizes?.find((p) => p === size);
    if (!isExist) {
      setproductSpecifications((p) => ({
        ...p,
        sizes: [...(p.sizes || []), siz],
      }));

      setactive(true);
    } else {
      setproductSpecifications((p) => ({
        ...p,
        sizes: p?.sizes?.filter((s) => s !== siz),
      }));
      setactive(false);
    }
  };
  return (
    <div
      onClick={() => handleAddSize(size)}
      className={` px-3 cursor-pointer hover:scale-105 transition-all duration-200 border-2 border-black hover:bg-black hover:text-white
${active && "bg-black text-white border-2 border-white"}
          font-semibold text-lg`}
    >
      {size}
    </div>
  );
};

const ColorCard = ({ i, productSpecifications, setproductSpecifications }) => {
  useEffect(() => {
    console.log(productSpecifications);
  }, [productSpecifications]);

  const handleAddColor = (item) => {
    const isExist = productSpecifications.colors?.find(
      (c) => c?.color == item?.color
    );

    if (!isExist) {
      setproductSpecifications((p) => ({
        ...p,
        colors: [...(p?.colors || []), item],
      }));
    } else {
      setproductSpecifications((s) => ({
        ...s,
        colors: s.colors.filter((c) => c.color !== item.color),
      }));
    }

    return console.log(productSpecifications?.colors);
  };

  return (
    <div
      key={i.color}
      onClick={() => handleAddColor(i)}
      style={{
        backgroundColor: i.color,
      }}
      className="py- px-3 h-8 w-8 cursor-pointer rounded-full hover:scale-105 transition-all duration-200 border-2 text-violet-500 hover:text-white font-semibold text-lg"
    ></div>
  );
};
