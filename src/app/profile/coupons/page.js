"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import { dummyProduct } from "@/app/utils";
import { CiDiscount1 } from "react-icons/ci";

const Coupons = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [createCouponsOpen, setcreateCouponsOpen] = useState(false);

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
      {createCouponsOpen && (
        <CreateCoupon setcreateCouponsOpen={setcreateCouponsOpen} />
      )}

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
            <div className="w-full flex justify-end mt-2 800px:mt-4">
              <p
                onClick={() => setcreateCouponsOpen(true)}
                className="flex gap-2 py-1 px-3 cursor-pointer  100px:px-4 rounded-md  items-center text-white font-semibold text-lg bg-blue-500 hover:bg-blue-400"
              >
                <BsPlusCircle />
                <p>Create coupon</p>
              </p>
            </div>
            {dummyCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-4  overflow-hidden"
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

const CreateCoupon = ({ setcreateCouponsOpen }) => {
  const [active, setactive] = useState(0);
  const [productsId, setproductsId] = useState([]);

  return (
    <div className=" fixed top-0 left-0 w-full h-full z-30 bg-[#0005] flex justify-center items-center ">
      <div className="bg-white relative rounded-lg p-2 800px:p-4 w-[95%] 600px:w-[580px]  ">
        <p className="text-xl 1000px:text-2xl font-semibold 800px:text-bold text-gray-600">
          Create Coupon
        </p>

        <RxCross1
          onClick={() => setcreateCouponsOpen(false)}
          className="absolute top-2 text-2xl hover:scale-110 hover:text-red-500 cursor-pointer right-2 "
        />
        {/* search product  */}
        <div
          className={`flex border-2  ${
            active === 1 ? "border-blue-500" : "border-gray-400"
          }  mt-2 items-center gap-2 bg-gray-200 rounded-md p-2`}
        >
          <BsSearch className="text-gray-600" size={25} />
          <input
            onFocus={() => setactive(1)}
            onBlur={() => setactive(0)}
            type="text"
            className="w-full h-full bg-gray-200 outline-none"
            placeholder="Search product"
          ></input>
        </div>
        {/* <div className="flex flex-col gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div
              key={i}
              className="rounded-md p-1 overflow-hidden border flex gap-3"
            >
              <div className="relative w-[60px]  h-[70px]">
                <Image src={dummyProduct} fill={true} />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-yellow-400">
                  MEN Clothing Brand T-shirt
                </p>
                <p className="font-semibold text-gray-400">$234</p>
                <p className="text-sm text-gray-400">
                  fhjbjr rfhcjbrjk frukichrnc rfuinrvi ruifnirv
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="  ">
          <p className="font-semibold mt-4 text-gray-500">Title:</p>
          <input
            type="text"
            placeholder="Enter title"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <p className="font-semibold mt-2 text-gray-500">Description:</p>
          <textarea
            rows={4}
            // placeholder="Enter description"
            className=" rounded-md p-2 outline-none w-full bg-gray-100 border-2 focus:border-yellow-300 "
          ></textarea>

          <p className="font-semibold mt-2 text-gray-500">Discount percent:</p>
          <input
            type="number"
            placeholder="Enter discounnt percentage"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Minimum price:</p>
          <input
            type="number"
            placeholder="Enter minimum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Maximum price:</p>
          <input
            type="number"
            placeholder="Enter maximum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <div className="bg-yellow-400 gap-2 hover:bg-yellow-300 text-white rounded-md font-semibold text-xl flex justify-center items-center mt-4 py-2">
            <CiDiscount1 size={25} /> Create
          </div>
        </div>
      </div>
    </div>
  );
};
