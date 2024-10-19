"use client";
import { Aref_Ruqaa } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { FaBell, FaSalesforce, FaUsers, FaUsersLine } from "react-icons/fa6";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBoxes, FaTruckLoading } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import { dummyProduct } from "../../utils";
import { useSelector } from "react-redux";
import { PiBagFill } from "react-icons/pi";
import { BsBoxFill } from "react-icons/bs";
import SideBar from "../Sidebar";
import * as XLSX from "xlsx";

import Header from "../Header";
import { saveAs } from "file-saver";
import Bar_chart_sales from "./Bar_chart_sales";

const products = [
  { name: "Product 1", price: 100, category: "Electronics" },
  { name: "Product 2", price: 200, category: "Clothing" },
  { name: "Product 3", price: 150, category: "Accessories" },
];

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Sale_Analytics = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(products);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save as Excel file
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "products.xlsx");
  };

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar collapse={collapse} setcollapse={setcollapse} active={2} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <Header collapse={collapse} setcollapse={setcollapse} />

        {/* Right main */}
        <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
          <h1 className=" text-xl m-3 600px:text-2xl 800px:text-3xl font-extrabold text-gray-600">
            Sale Analytics
          </h1>
          <div className=" w-full mt-8 800px:mt-10 grid grid-cols-3 ">
            <div className="flex   flex-col items-center">
              <div className="py-2 px-2 600px:px-3 800px:px-6 flex flex-col items-center  bg-green-200 rounded-lg">
                <p className="text-[12px] 600px:text-[13px] 800px:text-[14px] 1200px:text-[16px] ">
                  TOTAL ORDERS
                </p>
                <p className="text-[16px] font-semibold 600px:text-[20px] 800px:text-[24px] 1200px:text-[26px] ">
                  3,382
                </p>
              </div>
            </div>
            <div className="flex   flex-col items-center">
              <div className="py-2 px-2 600px:px-3 800px:px-6 flex flex-col items-center  bg-orange-200 rounded-lg">
                <p className="text-[12px] 600px:text-[13px] 800px:text-[14px] 1200px:text-[16px] ">
                  TOTAL SALES
                </p>
                <p className="text-[16px] font-semibold 600px:text-[20px] 800px:text-[24px] 1200px:text-[26px] ">
                  3,382
                </p>
              </div>
            </div>
            <div className="flex   flex-col items-center">
              <div className="py-2 px-2 600px:px-3 800px:px-6 flex flex-col items-center  bg-green-200 rounded-lg">
                <p className="text-[12px] 600px:text-[13px] 800px:text-[14px] 1200px:text-[16px] ">
                  TOTAL USERS
                </p>
                <p className="text-[16px] font-semibold 600px:text-[20px] 800px:text-[24px] 1200px:text-[26px] ">
                  3,382
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 800px:mt-10 ">
            <div className=" w-[85vw] h-[50vw]  800px:w-[60vw] 1200px:w-[50vw] 800px:h-[30vw]">
              <Bar_chart_sales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale_Analytics;
