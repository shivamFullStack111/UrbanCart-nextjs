"use client";
import Image from "next/image";
import React from "react";
import companyLogo from "../images/companyLogo.png";
import { Inter, Roboto_Mono, Roboto, Abril_Fatface } from "next/font/google";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";

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
      <div
        className={
          "flex items-center justify-between  border-b-[1px] border-black w-[100vw]"
        }
      >
        <div className="flex items-center text-[170%] font-bold">
          <Image
            height={70}
            width={70}
            alt="logo"
            src={companyLogo}
            className="ml-20"
          />
          <p className={Abril.className}>Urban Cart</p>
        </div>

        <div className="flex gap-5 ml-[10vw] ">
          <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-lg ">
            MEN
          </p>
          <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-lg ">
            WOMEN
          </p>
          <p className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-lg ">
            KIDS
          </p>
        </div>

        <div className="flex items-center ">
          <div
            className={`h-11 w-60 bg-gray-200 flex items-center border-2  p-2 ${
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
            <div className="bg-black border-2 border-black transition-all duration-400 hover:scale-105 text-white px-6 py-2 rounded-lg text-lg font-semibold cursor-pointer hover:bg-white hover:text-black ">
              Login
            </div>

            <div className="flex flex-col items-center ml-[3vw] text-red-500 cursor-pointer hover hover:text-gray-500">
              <CiHeart size={36} />
              <p className="text-sm font-medium">Wishlist</p>
            </div>
            <div className="flex flex-col items-center ml-[1vw] text-black cursor-pointer hover hover:text-gray-500">
              <GiShoppingBag size={36} />
              <p className="text-sm font-medium">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
