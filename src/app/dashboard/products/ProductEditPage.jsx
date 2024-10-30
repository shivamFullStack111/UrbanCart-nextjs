import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import DropDown from "@/app/profile/create-product/DropDown";
const ProductEditPage = ({ seteditOpen, product }) => {
  const [active, setactive] = useState(0);
  return (
    <>
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
                  <RxCross1 className="absolute right-1 cursor-pointer top-1 text-white bg-black hover:bg-red-400 text-xl z-40" />
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
                type="text"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* gender  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">GENDER:</p>
              <input
                value={product?.gender}
                type="text"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* category  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">CATEGORY:</p>
              <input
                value={product?.category}
                type="text"
                className="w-full text-lg p-2 rounded-md outline-none focus:border-violet-400 bg-white border-2 "
                placeholder="Enter title"
              />
            </div>
            {/* brand  */}
            <div className="mt-4">
              {" "}
              <p className="text-sm mb-1  font-semibold">BRAND:</p>
              <input
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
                heading={product?.clothType || "Select Cloth type"}
                onSelect={
                  (val) => console.log(val)
                  // setproductDetails((p) => ({
                  //   ...p,
                  //   gender: val.toLowerCase(),
                  // }))
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditPage;
