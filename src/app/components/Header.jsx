"use client";
import Image from "next/image";
import React from "react";
import companyLogo from "../images/companyLogo.png";
import { Inter, Roboto_Mono, Roboto, Abril_Fatface } from "next/font/google";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isFousOnSearch, setisFousOnSearch] = useState(false);
  return (
    <>
      <div className="block h-12  800px:h-36">
        <div className="max-800px:hidden fixed z-50 bg-white">
          <div
            className={
              "flex items-center    justify-between   border-b-[1px] border-gray-300 w-[100vw] py-2 h-20"
            }
          >
            <div className="flex items-center text-[160%] font-bold">
              <Image
                height={60}
                width={60}
                alt="logo"
                src={companyLogo}
                className="ml-4 1200px:ml-10"
              />
              <p className={Abril.className}>Urban Cart</p>
            </div>

            <div className="flex max-1000px:hidden gap-5 ">
              <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] ">
                MEN
              </p>
              <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] ">
                WOMEN
              </p>
              <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] ">
                KIDS
              </p>
            </div>

            <div className="flex items-center ">
              <div
                className={`h-9 w-56 bg-gray-200 flex items-center border-2  p-2 ${
                  isFousOnSearch && "rounded-xl border-blue-400 "
                }  gap-2`}
              >
                <CiSearch size={32} className="text-gray-500" />
                <input
                  type="text"
                  className="w-full bg-gray-200 outline-none h-full"
                  placeholder="Search"
                  onFocus={() => setisFousOnSearch(true)}
                  onBlur={() => setisFousOnSearch(false)}
                />
              </div>
              <div className="ml-[3vw] mr-[10vw] gap-3 flex items-center">
                <div className="bg-black border-2 border-black transition-all duration-400 hover:scale-105 text-white px-5 py-1 rounded-lg text-lg font-semibold cursor-pointer hover:bg-white hover:text-black ">
                  Login
                </div>

                <div className="flex flex-col items-center ml-[3vw] text-red-500 cursor-pointer hover hover:text-gray-500">
                  <CiHeart size={30} />
                  <p className="text-sm font-medium">Wishlist</p>
                </div>
                <div className="flex flex-col items-center ml-[1vw] text-black cursor-pointer hover hover:text-gray-500">
                  <GiShoppingBag size={30} />
                  <p className="text-sm font-medium">Cart</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-x-scroll hide-scrollbar p-3 justify-center gap-4 800px:gap-10  bg-white">
            {cat.map((i) => (
              <p className={"bg-black text-white px-6 py-2 rounded-xl"} key={i}>
                {i}
              </p>
            ))}
          </div>
        </div>

        <div className="fixed w-full 800px:hidden z-50">
          <div className=" w-full  z-30 items-center bg-teal-500 text-white p-3 flex shadow-md justify-between   ">
            <IoReorderThreeOutline className="text-[40px]" />

            <div className="flex gap-2 items-center">
              <IoSearchOutline className="text-[28px]" />
              <IoBagHandleSharp className="text-[28px]" />
              <FaRegHeart className="text-[25px] text-red-400" />
            </div>
          </div>

          <div className="flex overflow-x-scroll hide-scrollbar p-3 gap-4  bg-white">
            {cat.map((i) => (
              <p className={"bg-black text-white px-6 py-2 rounded-xl"} key={i}>
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const cat = ["MENS", "WOMENS", "KIDS", "LOWER", "UPPER", "SAREE", "SHOES"];
