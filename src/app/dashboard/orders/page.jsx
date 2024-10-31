"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import Image from "next/image";
import { FaBoxes, FaPencilAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
// import Line_Chart_Products_Analytics from "./Line_Chart_for_Orders";
import { TbShoppingCartCancel, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import axios from "axios";
import moment from "moment";
import EditOrder from "./EditOrder";

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Orders = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [orders, setorders] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalOrders, settotalOrders] = useState(1);

  const [editOpen, seteditOpen] = useState(false);
  const [currentEditOrder, setcurrentEditOrder] = useState(null);

  const getOrders = async (pageNumber) => {
    try {
      const res = await axios.post("/api/get-orders-by-pageNumber", {
        pageNumber,
      });
      settotalOrders(res?.data?.totalOrders);
      setorders(res?.data?.orders);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => [getOrders(1)], []);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save as Excel file
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "users.xlsx");
  };

  return (
    <>
      {editOpen && (
        <EditOrder
          setallorders={setorders}
          allorders={orders}
          order={currentEditOrder}
          setcurrentEditOrder={setcurrentEditOrder}
          seteditOpen={seteditOpen}
        ></EditOrder>
      )}
      <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
        {/* Left sidebar */}
        <SideBar collapse={collapse} setcollapse={setcollapse} active={5} />

        <div className="h-full w-full bg-red-400">
          {/* Right header */}
          <Header collapse={collapse} setcollapse={setcollapse} />

          {/* Right main */}
          <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
            {/* boxes  */}
            <div className="grid grid-cols-1 500px:grid-cols-2  1000px:grid-cols-4 pl-10 pr-20 500px:pl-4 500px:pr-14  mt-4">
              {/* box 1  */}
              <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
                <div className="relative h-20 w-20">
                  <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-orange-200">
                    <FaBoxes className="text-gray-600 text-3xl" />
                  </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center">
                  <p className="text-sm ">TOTAL ORDERS</p>
                  <p className="font-semibold">4,832</p>
                </div>
              </div>
              {/* box 1  */}
              <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
                <div className="relative h-20 w-20">
                  <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-green-200">
                    <TbShoppingCartCancel className="text-gray-600 text-3xl" />
                  </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center">
                  <p className="text-sm ">CANCEL ORDERS</p>
                  <p className="font-semibold">4,832</p>
                </div>
              </div>
              {/* box 1  */}

              {/* box 1  */}
              <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
                <div className="relative h-20 w-20">
                  <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-orange-200">
                    <TbTruckDelivery className="text-gray-600 text-3xl" />
                  </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center">
                  <p className="text-sm ">ORDER DELIVERING</p>
                  <p className="font-semibold">4,832</p>
                </div>
              </div>
              {/* box 1  */}
              <div className="flex  m-2 rounded-md h-28  shadow-lg border-[0.4px] overflow-hidden ">
                <div className="relative h-20 w-20">
                  <div className="h-20 w-20 rounded-full absolute -top-3 -left-3 flex items-center justify-center  bg-green-200">
                    <AiOutlineDeliveredProcedure className="text-gray-600 text-3xl" />
                  </div>
                </div>
                <div className="flex flex-col h-full justify-center items-center">
                  <p className="text-sm ">ORDER DELIVERED</p>
                  <p className="font-semibold">4,832</p>
                </div>
              </div>
            </div>
            {/* chat here  */}

            {/* map all users list  */}
            <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
              Users
            </h1>
            <div className="overflow-x-scroll p-2 max-w-[85vw]  overflow-visible w-full">
              <table className="w-full">
                <thead className="w-full">
                  <tr>
                    <th className="px-2">Order Id</th>
                    <th className="px-2">Order On</th>
                    <th className="px-2">Coustomer </th>
                    <th className="px-2">Total</th>
                    <th className="px-2">Payment Type</th>
                    <th className="px-2">Items</th>
                    <th className="px-2">Status</th>
                    <th className="px-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="w-full  ">
                  {orders?.map((order, i) => {
                    return (
                      <tr
                        key={i}
                        // className=""
                        className="py-10"
                      >
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>#{order?._id}</p>
                          </div>
                        </td>
                        <td className="py-2 px-4 min-w-36">
                          <div className="flex justify-center">
                            <p>
                              {moment(new Date(order?.createdAt)).format(
                                "MMM Do YYYY"
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{order?.user?.name}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{order?.subTotal}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{order?.paymentType || "COD"}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{order?.cart?.length}</p>
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{order?.status}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center items-center gap-2">
                            <div className="flex gap-3 ">
                              {/* <div className="px-3 rounded-lg py-1 bg-blue-200">
                                <FaEye
                                  size={22}
                                  className=" hover:scale-110 cursor-pointer transition-all duration-200 text-gray-500 "
                                />
                              </div> */}
                              <div className="px-3 rounded-lg py-1 bg-orange-200">
                                <FaPencilAlt
                                  onClick={() => {
                                    setcurrentEditOrder(order);
                                    seteditOpen(true);
                                  }}
                                  size={22}
                                  className="hover:scale-110 cursor-pointer transition-all duration-200 text-orange-400           "
                                />
                              </div>
                              {/* <div className="px-3 rounded-lg py-1 bg-red-200">
                                <MdDelete
                                  size={22}
                                  className=" hover:scale-110 cursor-pointer transition-all duration-200 text-red-400 "
                                />
                              </div> */}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* prev next button  */}
            </div>
            {/* prev next button  */}
            <div className="w-full  flex justify-end pb-10">
              <div className="ml-auto flex p-3 ">
                {[
                  ...Array(
                    totalOrders / 8 > Math.floor(totalOrders / 8)
                      ? Math.floor(totalOrders / 8) + 1
                      : Math.floor(totalOrders / 8)
                  ).keys(),
                ].map((i) => (
                  <p
                    onClick={() => {
                      setcurrentPage(i + 1);
                      getOrders(i + 1);
                    }}
                    key={i}
                    className={`px-4 py-1   border hover:bg-orange-100 cursor-pointer text-orange-400  ${
                      currentPage == i + 1 && "bg-orange-400 text-white"
                    }`}
                  >
                    {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
