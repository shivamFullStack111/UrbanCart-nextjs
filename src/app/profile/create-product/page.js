"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const CreateProduct = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  // Dummy array of orders
  const dummyOrders = [
    {
      id: "ORD123",
      total: 250.0,
      discount: 20.0,
      gst: 18.5,
      delivery: 15.0,
      orderDate: "2024-09-01",
      totalItems: 3,
      buyerName: "John Doe",
      status: "Shipped",
    },
    {
      id: "ORD456",
      total: 520.0,
      discount: 50.0,
      gst: 35.5,
      delivery: 25.0,
      orderDate: "2024-09-02",
      totalItems: 5,
      buyerName: "Jane Smith",
      status: "Delivered",
    },
  ];

  return (
    <>
      <Header />

      <div className="flex flex-col 800px:flex-row min-h-screen">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={6}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 1000px:p-6 flex justify-center bg-gray-100">
          <div className="w-[97%] 500px:w-[90%] mt-6 bg-white rounded-lg shadow-lg ">
            {/* process  */}
            <div className="m-2 rounded-t-lg flex p-1 900px:p-3 items-center">
              <p className="bg-gradient-to-tr from-red-300 to-violet-500 bg-clip-text text-transparent font-semibold text-xl  1000px:text-3xl">
                Create Product
              </p>
            </div>

            <div className="flex flex-col w-full items-center">
              <div className="flex justify-center w-full mt-3 items-center">
                <div className="flex flex-col items-center">
                  <p className="h-5 w-5 rounded-full border bg-red-400 text-white flex justify-center items-center">
                    1
                  </p>
                </div>
                <p className="w-[20%] h-1 bg-gray-300"></p>
                <p className="h-5 w-5 rounded-full border bg-gray-300  text-white flex justify-center items-center">
                  2
                </p>
                <p className="w-[20%] h-1 bg-gray-300"></p>
                <p className="h-5 w-5 rounded-full border bg-gray-300 text-white flex justify-center items-center">
                  3
                </p>
              </div>

              <div
                className="flex items-center justify-center gap-[5vw] 450px:gap-[7.5vw] 600px:gap-[10vw] 700px:gap-[11vw] 800px:gap-[5.5vw] 900px:gap-[6vw] 950px:gap-[6.5vw] 1100px:gap-[8vw]
              1200px:gap-[8.5vw] 1300px:gap-[9vw] 1400px:gap-[9.6vw] 1500px:gap-[10.3vw] 2000px:gap-[12vw]
              w-full"
              >
                <p className="text-[10px] text-gray-500">Products Details</p>

                <p className="text-[10px] text-gray-500">Products Details</p>

                <p className="text-[10px] text-gray-500">Products Details</p>
              </div>
            </div>

            {/* 1 st  */}
            <div className="p-2">
              <p className=" text-lg 900px:text-xl font-semibold text-gray-600">
                Product Details
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Dummy handler function
const handleTrack = (orderId) => {
  alert(`Viewing details for order #${orderId}`);
};

export default CreateProduct;
