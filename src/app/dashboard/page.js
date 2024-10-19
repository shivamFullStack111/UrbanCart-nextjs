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
import { useSelector } from "react-redux";
import { PiBagFill } from "react-icons/pi";
import { BsBoxFill } from "react-icons/bs";
import Header from "./Header";
import SideBar from "./Sidebar";

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const navigation = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    to: "/dashboard",
  },
  {
    name: "Sale Analytics",
    icon: BiSolidPurchaseTag,
    to: "/dashboard/sale-analytics",
  },
  {
    name: "Products",
    icon: FaBoxes,
    to: "/dashboard/products",
  },
  {
    name: "Users",
    icon: FaUsers,
    to: "/dashboard/users",
  },
  {
    name: "Orders",
    icon: FaTruckLoading,
    to: "/dashboard/orders",
  },
  {
    name: "Coupons",
    icon: RiCoupon3Fill,
    to: "/dashboard/coupons",
  },
];

const Dashboard = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const [settingOpen, setsettingOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar active={1} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <Header />

        {/* Right main */}
        <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
          {/* circles  */}
          <div className="w-full justify-center flex mt-6 gap-3 800px:gap-[7vw]  ">
            <div className="flex flex-col items-center">
              <div className="w-24 border-2 flex justify-center items-center border-green-400 h-24 rounded-full bg-gradient-to-br from-orange-400 via-orange-200 to-white">
                $9543
              </div>
              <p>Total Orders Cost</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 border-2 flex justify-center items-center border-green-400 h-24 rounded-full bg-gradient-to-br from-orange-400 via-orange-200 to-white">
                $8938
              </div>
              <p>Total Sales</p>
            </div>
          </div>

          {/* total orders and total users  */}
          <div className="grid grid-cols-1 850px:grid-cols-2 w-full px-3 500px:px-7 800px:px-10 1400px:px-16 mt-8 gap-4">
            <div className="bg-white rounded-lg shadow-xl border-[0.3px] ">
              <div className="flex justify-between m-6">
                <PiBagFill
                  size={52}
                  className="text-orange-400 bg-orange-200 p-2
                   rounded-md "
                />
                <div className="flex flex-col items-center">
                  <p className="text-[12px]">TOTAL ORDERS</p>
                  <p className="text-lg">1,390</p>
                </div>
              </div>
              <div className="h-10 bg-green-100 px-6 cursor-pointer  w-full flex justify-between items-center">
                <p></p>
                <p className="text-green-500 underline text-[12px] hover:scale-110 font-bold">
                  View
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl border-[0.3px] ">
              <div className="flex justify-between m-6">
                <FaUsersLine
                  size={52}
                  className="text-orange-400 bg-orange-200 p-2
                   rounded-md "
                />
                <div className="flex flex-col items-center">
                  <p className="text-[12px]">TOTAL USERS</p>
                  <p className="text-lg">583</p>
                </div>
              </div>
              <div className="h-10 bg-green-100 px-6 cursor-pointer  w-full flex justify-between items-center">
                <p></p>
                <p className="text-green-500 underline text-[12px] hover:scale-110 font-bold">
                  View
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 850px:grid-cols-2 w-full px-3 500px:px-7 800px:px-10 1400px:px-16 mt-8 gap-4">
            <div className="bg-white rounded-lg shadow-xl border-[0.3px] ">
              <div className="flex justify-between m-6">
                <BsBoxFill
                  size={52}
                  className="text-orange-400 bg-orange-200 p-2
                   rounded-md "
                />
                <div className="flex flex-col items-center">
                  <p className="text-[12px]">TOTAL PRODUCTS</p>
                  <p className="text-lg">1,390</p>
                </div>
              </div>
              <div className="h-10 bg-green-100 px-6 cursor-pointer  w-full flex justify-between items-center">
                <p></p>
                <p className="text-green-500 underline text-[12px] hover:scale-110 font-bold">
                  View
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl border-[0.3px] ">
              <div className="flex justify-between m-6">
                <RiCoupon3Fill
                  size={52}
                  className="text-orange-400 bg-orange-200 p-2
                   rounded-md "
                />
                <div className="flex flex-col items-center">
                  <p className="text-[12px]">TOTAL COUPONS</p>
                  <p className="text-lg">3</p>
                </div>
              </div>
              <div className="h-10 bg-green-100 px-6 cursor-pointer  w-full flex justify-between items-center">
                <p></p>
                <p className="text-green-500 underline text-[12px] hover:scale-110 font-bold">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
