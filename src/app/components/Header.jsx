"use client";
import Image from "next/image";
import React from "react";
import companyLogo from "../images/companyLogo.png";
import { Inter, Roboto_Mono, Roboto, Abril_Fatface } from "next/font/google";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import {
  IoBagHandle,
  IoLogOutOutline,
  IoLogOutSharp,
  IoReorderThreeOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleSharp } from "react-icons/io5";
import {
  FaArrowRight,
  FaChevronRight,
  FaHome,
  FaRegHeart,
  FaUser,
} from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsHearts } from "react-icons/bs";

const Abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isFousOnSearch, setisFousOnSearch] = useState(false);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const [isWishlistOpen, setisWishlistOpen] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{
            x: isWishlistOpen ? 0 : 1000,
            opacity: isWishlistOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="h-full w-full 500px:w-[500px] z-50  bg-white fixed top-0 right-0"
        >
          <RxCross1
            onClick={() => setisWishlistOpen(false)}
            size={30}
            className="m-4 cursor-pointer hover:scale-105 "
          />
        </motion.div>

        {/* mobile animated slider of side bar */}
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: isSideBarOpen ? 0 : -500 }}
          transition={{ duration: 0.3 }}
          className={`fixed w-full h-full z-50   bg-white top-0 max-w-[500px] left-0`}
        >
          <RxCross1
            size={30}
            onClick={() => setisSideBarOpen(false)}
            className="ml-auto m-3 cursor-pointer"
          />

          {/* user profile  */}
          <div className="flex gap-3 items-center mx-4  border-b-2 pb-5">
            <div className="w-20 h-20  relative rounded-full">
              <Image
                fill={true}
                alt="profile"
                className="bg-cyan-200 rounded-full"
                // src={"j"}
              ></Image>
            </div>
            <div>
              <p className="text-lg font-semibold ">Shivam</p>
              <p className="text-sm text-gray-500">shivam@gmail.com</p>
            </div>
          </div>

          {/* navigation and functionality of side bar */}

          <div className="flex flex-col p-2 gap-1 px-3  ">
            {navigations?.map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-gray-200"
              >
                <div className="flex gap-2 items-center  ">
                  {i?.icon}
                  <p className="font-semibold">{i?.title}</p>
                </div>

                <FaChevronRight />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="block h-12  800px:h-16">
          {/* desktop header  */}
          <div className="max-800px:hidden fixed z-40 bg-white">
            <div
              className={
                "flex items-center    justify-between   border-b-[1px] border-gray-300 w-[100vw] py-2 h-20"
              }
            >
              <Link
                href="/"
                className="flex items-center text-[160%] font-bold"
              >
                <Image
                  height={60}
                  width={60}
                  alt="logo"
                  src={companyLogo}
                  className="ml-4 1200px:ml-10"
                />
                <p className={Abril.className}>Urban Cart</p>
              </Link>

              <div className="flex max-1000px:hidden gap-5 ">
                <Link
                  href="/products?c=MEN"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] "
                >
                  MEN
                </Link>
                <Link
                  href="/products?c=WOMEN"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] "
                >
                  WOMEN
                </Link>
                <Link
                  href="/products?c=KIDS"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[16px] "
                >
                  KIDS
                </Link>
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
                  <div className="bg-black border-2 border-black transition-all duration-400 hover:scale-105 text-white px-5 py-1 rounded-lg text-sm 1000px:text-lg font-semibold cursor-pointer hover:bg-white hover:text-black ">
                    Login
                  </div>

                  <div
                    onClick={() => setisWishlistOpen(true)}
                    className="flex flex-col items-center ml-[3vw] text-red-500 cursor-pointer hover hover:text-gray-500"
                  >
                    <CiHeart size={30} />
                    <p className="text-sm font-medium">Wishlist</p>
                  </div>
                  <Link
                    href={"/cart"}
                    className="flex flex-col items-center ml-[1vw] text-black cursor-pointer hover hover:text-gray-500"
                  >
                    <GiShoppingBag size={30} />
                    <p className="text-sm font-medium">Cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* mobile header  */}
          <div className="fixed w-full 800px:hidden bg-white z-40">
            <div className=" w-full  z-30 items-center   text-gray-500 p-3 flex shadow-md justify-between   ">
              <IoReorderThreeOutline
                onClick={() => setisSideBarOpen(true)}
                className="text-[40px] cursor-pointer hover:text-gray-300"
              />

              <div className="flex gap-3 items-center">
                <IoSearchOutline className="text-[25px]" />
                <Link href="/cart">
                  <IoBagHandleSharp className="text-[25px]" />
                </Link>
                <FaRegHeart className="text-[23px] text-gray-500" />
              </div>
            </div>

            <div className="flex overflow-x-scroll hide-scrollbar p-3 gap-4  bg-white">
              {cat.map((i) => (
                <Link
                  href={`/products?c=${i}`}
                  className={
                    "bg-gray-200 shadow-xl  font-semibold text-black px-4 800px:px-6 py-1 800px:py-2 rounded-xl hover:bg-black hover:text-white text-sm 800px:text-lg transition-all duration-150"
                  }
                  key={i}
                >
                  {i}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const cat = ["MENS", "WOMENS", "KIDS", "LOWER", "UPPER", "SAREE", "SHOES"];
const navigations = [
  {
    title: "Home",
    icon: <FaHome size={30} className="text-red-500" />,
  },
  {
    title: "Products",
    icon: <IoBagHandle size={30} className="text-red-500" />,
  },
  {
    title: "Wishlist",
    icon: <BsHearts size={30} className="text-red-500" />,
  },
  {
    title: "My Orders",
    icon: <FaBoxesPacking size={30} className="text-red-500" />,
  },
  {
    title: "My Cart",
    icon: <IoBagHandle size={30} className="text-red-500" />,
  },
  {
    title: "Profile",
    icon: <FaUser size={30} className="text-red-500" />,
  },
  {
    title: "Log Out",
    icon: <IoLogOutSharp size={30} className="text-red-500" />,
  },
];
