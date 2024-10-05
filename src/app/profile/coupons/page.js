"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const Coupons = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  // Dummy coupons data
  const dummyCoupons = [
    {
      id: 1,
      title: "20% Off Your Next Purchase",
      code: "SAVE20",
      expiryDate: "2024-12-31",
      description: "Get 20% off on your next order over $100.",
    },
    {
      id: 2,
      title: "Free Shipping",
      code: "FREESHIP",
      expiryDate: "2024-11-30",
      description: "Enjoy free shipping on orders over $50.",
    },
  ];

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
        <div className="w-full 800px:pt-4 p-3 flex justify-center">
          {/* Coupons Box */}
          <div className="grid grid-cols-1 gap-4 max-w-4xl w-full 800px:h-[400px]">
            {dummyCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-4 overflow-hidden"
              >
                <div className="absolute left-0 right-0 top-0 h-4 bg-white rounded-tl-lg rounded-tr-lg"></div>
                <div className="absolute left-0 right-0 bottom-0 h-4 bg-white rounded-bl-lg rounded-br-lg"></div>

                <h3 className="text-lg font-bold">{coupon.title}</h3>
                <p className="mt-2 text-sm">{coupon.description}</p>
                <p className="mt-4 font-semibold">
                  Use Code:{" "}
                  <span className="bg-white text-blue-600 px-2 py-1 rounded">
                    {coupon.code}
                  </span>
                </p>
                <p className="mt-2 text-xs">
                  Expires on: {new Date(coupon.expiryDate).toLocaleDateString()}
                </p>
              </div>
            ))}

            {/* If no coupons are available */}
            {dummyCoupons.length === 0 && (
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
