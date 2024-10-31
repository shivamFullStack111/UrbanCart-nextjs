import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { allStatus } from "@/app/utils";
import axios from "axios";

const EditOrder = ({
  seteditOpen,
  order,
  setcurrentEditOrder,
  setallorders,
  allorders,
}) => {
  const updateOrder = async () => {
    try {
      const res = await axios.post("/api/update-order", { order });

      if (res.data?.success) {
        toast.success("Order updated successfully");

        const updatedOrders = allorders.map((ordr) => {
          if (ordr._id === order._id) {
            return {
              ...ordr,
              status: order?.status,
            };
          } else {
            return ordr;
          }
        });

        setallorders(updatedOrders);

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
            <p className="text-2xl font-semibold">Order Details</p>
            <RxCross1
              onClick={() => seteditOpen(false)}
              className="text-3xl hover:scale-110 cursor-pointer hover:text-red-400 ml-auto"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">
              Order ID: {order.orderid}
            </h3>
            <p className="mb-4">
              User: {order.user.name} ({order.user.email})
            </p>
            <label className="block mb-2 font-semibold">Order Status</label>
            <select
              value={order?.status}
              onChange={(e) =>
                setcurrentEditOrder((prev) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
              className=" outline-none border-2 focus:border-violet-500 p-2 rounded w-full mb-4"
            >
              {allStatus.map((i) => (
                <option className="" color="#a78bfa" key={i}>
                  {i}
                </option>
              ))}
            </select>

            {/* <label className="block mb-2 font-semibold">
              Cancel Order Message
            </label>
            <textarea
              value={cancelMessage}
              onChange={(e) => setCancelMessage(e.target.value)}
              placeholder="Message to send upon order cancellation..."
              className="border p-2 rounded w-full mb-4"
            />
            <button
              onClick={handleCancelOrder}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Cancel Order
            </button> */}
            <div
              onClick={() => updateOrder()}
              className="flex justify-center items-center py-2 bg-violet-500 cursor-pointer text-white font-semibold"
            >
              Update
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default EditOrder;
