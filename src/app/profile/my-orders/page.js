"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { dummyProducts } from "@/app/utils";
import { useSelector } from "react-redux";
import axios from "axios";
import CanceledOrders from "../cancel-orders/page";
import { IoTrash } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";

const MyOrders = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [myOrders, setmyOrders] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [cacelOrderOpen, setcacelOrderOpen] = useState(false);

  const getAllOrdersOfUser = async () => {
    try {
      const res = await axios.post("/api/user-all-orders", { user });

      console.log(res.data);

      if (res?.data?.success) {
        setmyOrders(res?.data?.orders);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getAllOrdersOfUser();
    }
  }, [user]);

  return (
    <>
      <Header />
      <Toaster />
      <div className="flex flex-col 800px:flex-row min-h-screen">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={2}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 p-6 flex justify-center bg-gray-100">
          {/* Profile Box */}
          <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              My Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {myOrders?.map((order, i) => (
                    <>
                      {cacelOrderOpen && (
                        <CancelOrderModal
                          key={i}
                          setcacelOrderOpen={setcacelOrderOpen}
                          order={order}
                        />
                      )}
                      <tr key={order?._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          #{i + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {new Date(order?.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          ${order?.subTotal?.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order?.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order?.status === "Shipped"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order?.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          {order?.status !== "cancel" && (
                            <button
                              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              onClick={() => handleTrack(order?._id)}
                            >
                              Track
                            </button>
                          )}
                          {order?.status !== "cancel" && (
                            <button
                              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                              onClick={() => setcacelOrderOpen(true)}
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    </>
                  ))}
                  {myOrders?.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                      >
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;

const CancelOrderModal = ({ setcacelOrderOpen, order }) => {
  const [reason, setreason] = useState("");

  const handleCancelOrder = async () => {
    if (reason?.length < 10) {
      return toast.error("please write valid reason");
    }
    try {
      const res = await axios.post("/api/cancel-order", {
        orderid: order?._id,
        reason,
      });

      if (res?.data?.success) {
        toast.success(res.data?.message);
      } else {
        toast.error(res.data?.message);
      }

      console.log(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#0004] w-full h-full flex justify-center items-center fixed z-40 top-0 left-0 ">
      <div className="w-full relative 600px:w-[600px] p-2 600px:p-4 rounded-lg bg-white ">
        <RxCross1
          onClick={() => setcacelOrderOpen(false)}
          size={25}
          className="hover:scale-105 hover:text-red-500 cursor-pointer absolute top-2 right-2"
        />
        <div>
          <p className="font-semibold text-lg text-gray-600">
            Write your reason for canceling a order.
          </p>
          <textarea
            onChange={(e) => setreason(e.target.value)}
            placeholder="write your reason..."
            rows={5}
            className="bg-gray-100 p-1 rounded-md w-full outline-none mt-3 border-2 border-gray-300 focus:border-red-500"
          ></textarea>
        </div>

        <div
          onClick={() => handleCancelOrder()}
          className="flex gap-2 rounded-md cursor-pointer py-2 w-full bg-red-500 hover:bg-red-400 text-white font-semibold text-lg justify-center items-center "
        >
          <IoTrash size={25} /> <p>Cancel</p>
        </div>
      </div>
    </div>
  );
};
