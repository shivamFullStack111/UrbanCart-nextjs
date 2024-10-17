"use client";
import { Aref_Ruqaa } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { FaSalesforce, FaUsers } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBoxes, FaTruckLoading } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";

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
  const [collapse, setcollapse] = useState(true);
  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <div
        className={`h-full ${
          !collapse && "w-[270px] 1400px:w-[340px]"
        } bg-slate-700 overflow-y-scroll hide-scrollbar`}
      >
        {!collapse && (
          <p
            className={`font-bold text-white  flex justify-center items-center`}
          >
            URBAN CART
          </p>
        )}

        {/* Navigations */}
        <div className={`w-full flex ${collapse && "mt-16"} flex-col`}>
          {navigation.map((nav, i) => {
            const Icon = nav.icon; // Use the icon component
            const isActive = active === i + 1; // Check if the current item is active
            return (
              <Link
                key={i}
                href={nav.to}
                className={`flex gap-2 text-gray-400 ${
                  collapse ? "p-2" : "pl-6"
                } border-l-4 p-2 ${
                  isActive ? "border-orange-400" : "border-slate-700"
                } cursor-pointer hover:text-white items-center`}
              >
                <Icon
                  className={`text-lg ${isActive ? "text-orange-400" : ""}`}
                />
                {!collapse && (
                  <p className={`${isActive && "text-white"} `}>{nav.name}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <div
          className={`${collapse ? "h-16" : "h-24"} w-full bg-slate-800`}
        ></div>

        {/* Right main */}
        <div className="h-full bg-white overflow-y-scroll"></div>
      </div>
    </div>
  );
};

export default Dashboard;
