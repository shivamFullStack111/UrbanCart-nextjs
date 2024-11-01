import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { allStatus } from "@/app/utils";
import axios from "axios";

const Edit_Coupon = ({ seteditOpen, setcurrentEditCoupon, coupon }) => {
  // const updateOrder = async () => {
  //   try {
  //     const res = await axios.post("/api/update-order", { order });

  //     if (res.data?.success) {
  //       toast.success("Order updated successfully");

  //       const updatedOrders = allorders.map((ordr) => {
  //         if (ordr._id === order._id) {
  //           return {
  //             ...ordr,
  //             status: order?.status,
  //           };
  //         } else {
  //           return ordr;
  //         }
  //       });

  //       setallorders(updatedOrders);

  //       setTimeout(() => {
  //         seteditOpen(false);
  //       }, 500);
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-[#0004] z-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] border-2 border-violet-500 max-w-lg  p-5 bg-white rounded-lg overflow-y-scroll hide-scrollbar"
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Update Coupon</p>
            <RxCross1
              onClick={() => seteditOpen(false)}
              className="text-3xl hover:scale-110 cursor-pointer hover:text-red-400 ml-auto"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-center items-center py-2 bg-violet-500 cursor-pointer text-white font-semibold">
              Update
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Edit_Coupon;
