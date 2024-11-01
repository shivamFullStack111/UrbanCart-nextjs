import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { allStatus } from "@/app/utils";
import axios from "axios";
import { BiRightArrow } from "react-icons/bi";

const Edit_Coupon = ({
  seteditOpen,
  setcurrentEditCoupon,
  coupon,
  allcoupons,
  setallcoupons,
}) => {
  const [productListOpen, setproductListOpen] = useState(true);

  console.log(coupon);
  const updateCoupon = async () => {
    try {
      const res = await axios.post("/api/update-coupon", { coupon });

      if (res?.data?.success) {
        toast.success(res.data.message);

        const updatedCoupons = allcoupons.map((copn) => {
          if (copn._id === coupon._id) {
            return coupon;
          } else {
            return copn;
          }
        });

        setallcoupons(updatedCoupons);

        setTimeout(() => {
          seteditOpen(false);
        }, 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 overflow-y-scroll  w-full h-full bg-[#0004] z-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] border-2 border-violet-500 max-h-[100vh] max-w-lg  p-5 bg-white rounded-lg overflow-y-scroll hide-scrollbar"
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Update Coupon</p>
            <RxCross1
              onClick={() => seteditOpen(false)}
              className="text-3xl hover:scale-110 cursor-pointer hover:text-red-400 ml-auto"
            />
          </div>
          <div className="mt-4">
            <div
              className={`  py-1 px-2 font-semibold ${
                productListOpen && "border-violet-400"
              } text-gray-600 rounded-md border-2 `}
            >
              <div
                onClick={() => setproductListOpen((p) => !p)}
                className={`flex cursor-pointer   items-center justify-between`}
              >
                <p>Products</p>
                <BiRightArrow
                  className={`text-xl transition-all duration-200  ${
                    productListOpen ? "rotate-90 text-violet-500" : "rotate-0"
                  }`}
                />
              </div>

              {/* product list box  */}
              <div
                className={` overflow-hidden ${
                  productListOpen ? "h-auto" : "h-0"
                } transition-all duration-1000`}
              >
                {coupon?.productsId?.map((id) => (
                  <div className="mt-1 text-gray-500" key={id}>
                    #{id}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div>
                <p className="text-sm font-bold text-gray-500 ml-1 ">TITLE </p>
                <input
                  onChange={(e) =>
                    setcurrentEditCoupon((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  value={coupon?.title}
                  className=" border-2 outline-none w-full rounded-md  focus:border-violet-400 py-1 px-2"
                  placeholder="Enter title"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-500 ml-1 ">
                  DESCRIPTION{" "}
                </p>
                <textarea
                  onChange={(e) =>
                    setcurrentEditCoupon((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  value={coupon?.description}
                  rows={5}
                  className=" border-2 outline-none w-full rounded-md  focus:border-violet-400 py-1 px-2"
                  placeholder="Enter description"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-500 ml-1 ">
                  MIN VALUE{" "}
                </p>
                <input
                  onChange={(e) =>
                    setcurrentEditCoupon((prev) => ({
                      ...prev,
                      minValue: e.target.value,
                    }))
                  }
                  value={coupon?.minValue}
                  className=" border-2 outline-none w-full rounded-md  focus:border-violet-400 py-1 px-2"
                  placeholder="Enter Minimum value"
                  type="number"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-500 ml-1 ">
                  MAX VALUE{" "}
                </p>
                <input
                  onChange={(e) =>
                    setcurrentEditCoupon((prev) => ({
                      ...prev,
                      maxValue: e.target.value,
                    }))
                  }
                  value={coupon?.maxValue}
                  className=" border-2 outline-none w-full rounded-md  focus:border-violet-400 py-1 px-2"
                  placeholder="Enter Maximum value"
                  type="number"
                />
              </div>
            </div>
            <div
              onClick={() => updateCoupon()}
              className="flex rounded-md hover:bg-violet-400 mt-6 justify-center items-center py-2 bg-violet-500 cursor-pointer text-white font-semibold"
            >
              Update
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Edit_Coupon;
