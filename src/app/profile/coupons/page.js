"use client";
import React, { useEffect, useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { RxCross1, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { dummyProduct } from "@/app/utils";
import { CiDiscount1 } from "react-icons/ci";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { isNextUIEl } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Coupons = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [allCoupons, setallCoupons] = useState([]);
  const { user } = useSelector((state) => state.user);

  const getAllCoupon = async () => {
    try {
      const res = await axios.get("/api/get-all-coupons");
      console.log(res.data);
      setallCoupons(res?.data?.coupons);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCoupon();
  }, [user]);

  // Dummy coupons data

  return (
    <>
      <Header />

      <div className="flex flex-col 800px:flex-row">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={3}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 overflow-y-scroll p-3 flex justify-center">
          {/* Coupons Box */}
          <div className="grid grid-cols-1 gap-4 max-w-4xl w-full 800px:h-[400px]">
            {allCoupons.map((coupon) => (
              <div
                key={coupon?._id}
                className="relative bg-gradient-to-r min-h-48 from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-4  overflow-hidden"
              >
                <div className="absolute left-0 right-0 top-0 h-4 bg-white rounded-tl-lg rounded-tr-lg"></div>
                <div className="absolute left-0 right-0 bottom-0 h-4 bg-white rounded-bl-lg rounded-br-lg"></div>

                <h3 className="text-lg font-bold">{coupon?.title}</h3>
                <p className="mt-2 text-sm">{coupon?.description}</p>
                <p className="mt-4 font-semibold">
                  Use Code:{" "}
                  <span className="bg-white text-blue-600 px-2 py-1 rounded">
                    {coupon?.code || "save 20"}
                  </span>
                </p>
                <p className="mt-2 text-xs">
                  Expires on: {new Date(coupon.expiryDate).toLocaleDateString()}
                </p>
              </div>
            ))}
            {/* If no coupons are available */}
            {allCoupons?.length === 0 && (
              <p className="text-gray-500 text-center">No coupons available.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Coupons;
