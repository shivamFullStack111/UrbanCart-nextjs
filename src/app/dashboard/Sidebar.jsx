"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBoxes, FaTruckLoading } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

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

const SideBar = ({ active, collapse, setcollapse }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div
        className={`h-full min-w-[45px] ${
          !collapse && "min-w-[270px] max-w-[270px] 1400px:w-[340px]"
        } bg-slate-700 overflow-y-scroll hide-scrollbar`}
      >
        {!collapse && (
          <p
            className={`font-bold text-white h-24  flex justify-center items-center`}
          >
            URBAN CART
          </p>
        )}

        {/* Navigations */}
        <div className={`w-full flex ${collapse && "mt-16"} flex-col gap-3`}>
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
                  active === i + 1 ? "border-orange-400" : "border-slate-700"
                } cursor-pointer hover:text-white items-center`}
              >
                <Icon
                  className={`text-[30px] ${
                    active === i + 1 ? "text-orange-400" : ""
                  }`}
                />
                {!collapse && (
                  <p className={`${active === i + 1 && "text-white"} `}>
                    {nav.name}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
