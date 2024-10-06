"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { dummyProducts } from "../utils";
import { useEffect } from "react";

const Wishlist = ({ setisWishlistOpen, isWishlistOpen }) => {
  useEffect(() => {
    console.log("isWishlistOpen:", isWishlistOpen);
  }, []);
  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{
        x: isWishlistOpen ? 0 : 3000,
        // opacity: isWishlistOpen ? 1 : 0,
      }}
      transition={{ duration: 0.4 }}
      className="h-full w-full 550px:w-[550px] overflow-y-auto hide-scrollbar pb-6  z-50  bg-white fixed top-0 right-0"
    >
      <RxCross1
        onClick={() => setisWishlistOpen(false)}
        size={30}
        className="m-4 cursor-pointer hover:scale-105 "
      />
      <div className="w-full   px-3">
        <p className="p-6 text-xl  font-semibold">My Cart has (3) items</p>
        <p className="bg-yellow-200 mx-3 flex font-semibold justify-center items-center py-2 rounded-lg">
          why are you waiting?
        </p>

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={
              "h-44  1400px:h-62  w-full flex hap-3 mt-9 items-center rounded-xl shadow-lg relative"
            }
          >
            <RxCross1 className=" text-lg 800px:text-3xl right-5 top-5 absolute hover:text-red-500 cursor-pointer" />
            <div className="w-[170px] h-full relative">
              <Image
                alt="product"
                fill={true}
                src={dummyProducts[0].images[0]}
              />
            </div>
            <div className={"flex flex-col  800px:gap-2"}>
              <p className="text-yellow-400 font-semibold text-lg">Bewakoof</p>
              <p className="text-gray-700 font-bold text-lg 800px:text-xl">
                Men Black Denim Jean Free style
              </p>
              <p className="text-gray-500 font-semibold 800px:text-lg">
                FREE SHIPPING
              </p>
              <div className={"flex gap-4 "}>
                <p className="text-gray-900  font-semibold text-lg 800px:text-xl">
                  $83
                </p>
                <p className="text-gray-400 line-through font-semibold  800px:text-2xl">
                  $129
                </p>
                <div className="w-28 h-9 ml-auto  bg-violet-400 text-white cursor-pointer hover:-translate-y-2 transition-all duration-150  justify-center items-center flex rounded-md">
                  Add To Cart
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Wishlist;
