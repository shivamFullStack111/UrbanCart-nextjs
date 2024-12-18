"use client";
import Image from "next/image";
import React from "react";
import companyLogo from "../images/companyLogo.png";
import { Abril_Fatface } from "next/font/google";
import { CiHeart, CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import {
  IoBagHandle,
  IoLogOutSharp,
  IoReorderThreeOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaChevronRight, FaHome, FaRegHeart, FaUser } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsHearts } from "react-icons/bs";
import { dummyProduct } from "../utils";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addItemToWishlist } from "@/store/slices/wishlistSlice";
import { setUser } from "@/store/slices/userSlice";
import Cookies from "js-cookie";
import { MdDashboard } from "react-icons/md";

const Wishlist = dynamic(() => import("./Wishlist"), {
  ssr: false, // Isko server side render nahi karna chahte
});

const Abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Header = ({ active }) => {
  const [isFousOnSearch, setisFousOnSearch] = useState(false);
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isWishlistOpen, setisWishlistOpen] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        {/* wishlist  */}
        <Wishlist
          isWishlistOpen={isWishlistOpen}
          setisWishlistOpen={setisWishlistOpen}
        />

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
                src={dummyProduct}
              ></Image>
            </div>
            <div>
              <p className="text-lg font-semibold ">Shivam</p>
              <p className="text-sm text-gray-500">shivam@gmail.com</p>
            </div>
          </div>

          {/* navigation and functionality of side bar */}

          <div className="flex flex-col p-2 gap-1 px-3  ">
            {navigations?.map((item, i) => (
              <Link
                href={item?.to}
                key={i}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer  ${
                  active === i + 1 && "bg-red-200"
                }`}
              >
                <div className="flex gap-2 items-center  ">
                  {item?.icon}
                  <p className="font-semibold">{item?.title}</p>
                </div>

                <FaChevronRight />
              </Link>
            ))}

            <div
              onClick={() => {
                dispatch(setUser(null));
                Cookies.remove("token_urbancart");
                window.location.reload();
              }}
              className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-gray-200"
            >
              <div className="flex gap-2 items-center  ">
                <IoLogOutSharp size={30} className="text-red-500" />
                <p className="font-semibold">Log Out </p>
              </div>

              <FaChevronRight />
            </div>
          </div>
        </motion.div>
        <div className="block h-12  800px:h-16">
          {/* desktop header  */}
          <div className="max-800px:hidden fixed z-40 bg-white">
            <div
              className={
                "flex items-center    justify-between   border-b-[1px] border-gray-300 w-[100vw] py-2 h-[70px]"
              }
            >
              <Link
                href="/"
                className="flex items-center text-[140%] font-bold"
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
                  href="/products?gender=MEN"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[14px] "
                >
                  MEN
                </Link>
                <Link
                  href="/products?gender=WOMEN"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[14px] "
                >
                  WOMEN
                </Link>
                <Link
                  href="/products?gender=KID"
                  className="border-b-2 border-b-white hover:border-b-black cursor-pointer font-semibold text-[14px] "
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
                <div className="ml-[3vw] mr-[5vw] gap-4 flex items-center">
                  {user?.isAdmin ? (
                    <Link href={"/dashboard"}>
                      <MdDashboard className="text-2xl text-gray-400" />
                    </Link>
                  ) : (
                    <>
                      {" "}
                      <div
                        onClick={() => setisWishlistOpen(true)}
                        className="flex flex-col items-center ml-[3vw] text-gray-500 cursor-pointer hover hover:text-gray-600"
                      >
                        <CiHeart size={25} />
                        <p className="text-sm font-medium">Wishlist</p>
                      </div>
                      <Link
                        href={"/cart"}
                        className="flex flex-col items-center ml-[1vw] text-gray-500 cursor-pointer hover hover:text-gray-600"
                      >
                        <GiShoppingBag size={25} />
                        <p className="text-sm font-medium">Cart</p>
                      </Link>
                    </>
                  )}

                  {!user && (
                    <Link
                      href={"/login"}
                      className="font-semibold underline hover:scale-105 transition-all duration-200"
                    >
                      Login
                    </Link>
                  )}

                  {user && (
                    <Link href="/profile" className={""}>
                      <div className="w-10 h-10 rounded-full text-3xl text-white bg-pink-400 flex justify-center ">
                        {user?.name?.slice(0, 1)}
                      </div>
                    </Link>
                  )}
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
                <FaRegHeart
                  onClick={() => setisWishlistOpen(true)}
                  className="text-[23px] cursor-pointer text-gray-500"
                />
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

    to: "/",
    icon: <FaHome size={30} className="text-red-500" />,
  },
  {
    title: "Products",

    to: "/products",
    icon: <IoBagHandle size={30} className="text-red-500" />,
  },
  {
    title: "My Orders",

    to: "/profile/my-orders",
    icon: <FaBoxesPacking size={30} className="text-red-500" />,
  },
  {
    title: "My Cart",

    to: "/cart",
    icon: <IoBagHandle size={30} className="text-red-500" />,
  },
  {
    title: "Profile",

    to: "/profile",
    icon: <FaUser size={30} className="text-red-500" />,
  },
];
