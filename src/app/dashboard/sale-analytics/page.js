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

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Dashboard = ({ active = 1 }) => {
  const [collapse, setcollapse] = useSyncExternalStore(false);
  const [settingOpen, setsettingOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar active={3} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <div
          className={`${
            collapse ? "h-16" : "h-24"
          } w-full flex items-center justify-between px-4 bg-slate-800`}
        >
          {/* left header  */}
          <IoReorderThreeOutline
            onClick={() => setcollapse((p) => !p)}
            size={40}
            className="text-white hover:scale-105 cursor-pointer"
          />
          {/* right header part  */}
          <div className="flex gap-3  items-center  duration-300 ">
            <div className="relative">
              <FaBell
                size={24}
                className="text-white hover:scale-105 cursor-pointer"
              />
              <p className="w-5 h-5 rounded-full flex justify-center items-center bg-orange-400 text-white absolute -top-2 -right-2">
                <p>3</p>
              </p>
            </div>
            <div className="relative group ">
              {settingOpen ? (
                <RxCrossCircled
                  onClick={() => setsettingOpen((p) => !p)}
                  size={28}
                  className="text-white"
                />
              ) : (
                <IoMdSettings
                  onClick={() => setsettingOpen((p) => !p)}
                  size={28}
                  className="text-white"
                />
              )}

              {settingOpen && (
                <div className="absolute flex  bg-white p-2 rounded-md h-32 w-56 -bottom-40 shadow-xl border-[0.2px] right-0">
                  <div className="flex gap-3 ">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      {" "}
                      <Image src={dummyProduct} fill={true} alt="profile" />
                    </div>
                    <div className="">
                      <p className="font-semibold">{user?.name}</p>
                      <p className="font-semibold - text-sm text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-ful relative  flex justify-end items-end">
                    <div>
                      <MdLogout
                        size={26}
                        className="text-gray-700 group mt-auto ml-auto cursor-pointer"
                      />
                      <p className="hidden w-20 absolute font-semibold group-hover:block -right-7 -bottom-10">
                        Log Out
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

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
