"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { dummyProducts } from "../utils";
import { useEffect } from "react";
import { addItemToCart } from "@/store/slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { removeItemFromWishlist } from "@/store/slices/wishlistSlice";
import { FaBagShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = ({ setisWishlistOpen, isWishlistOpen }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item?._id === product?._id);

    if (isExist) {
      toast.error("item already in cart");
    } else {
      dispatch(addItemToCart(product));

      toast.success("item added to cart");
    }
  };

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
      <Toaster />
      <div className="w-full   px-3">
        <p className="p-6 text-xl  font-semibold">
          My Wishlist has ({wishlist?.length}) items
        </p>
        <p className="bg-yellow-200 mx-3 flex font-semibold justify-center items-center py-2 rounded-lg">
          why are you waiting?
        </p>

        {wishlist?.length > 0 ? (
          <div>
            {" "}
            {wishlist?.map((item, i) => (
              <div
                key={i}
                className={
                  "h-44  1400px:h-62  gap-3 w-full flex hap-3 mt-9 rounded-xl shadow-lg relative"
                }
              >
                <RxCross1
                  onClick={() => {
                    dispatch(removeItemFromWishlist(item?._id));
                  }}
                  className=" text-lg 800px:text-3xl right-5 top-5 absolute hover:text-red-500 cursor-pointer"
                />
                <div className="w-[150px] h-full relative">
                  <Image alt="product" fill={true} src={item?.images[0]} />
                </div>
                <div className={"flex flex-col mt-3  "}>
                  <p className="text-yellow-400 font-semibold text-sm 800px:text-md 1000px:text-lg">
                    {item?.brand}
                  </p>
                  <p className="text-gray-700 font-bold text-[15px] 800px:text-lg 1000px:text-xl">
                    {item?.title}
                  </p>
                  <p className="text-gray-500 font-semibold text-[16px] 800px:text-lg">
                    FREE SHIPPING
                  </p>
                  <div className={"flex gap-2 800px:gap-4 flex-col  "}>
                    <div className="flex gap-2 800px:gap-5 items-center">
                      <p className="text-gray-900  font-semibold text-[16px] 800px:text-lg 1000px:text-xl">
                        ${item?.sellingPrice}
                      </p>
                      <p className="text-gray-400 line-through font-semibold  800px:text-lg">
                        ${item?.mrpPrice}
                      </p>
                    </div>
                    <div
                      onClick={() => handleAddToCart()}
                      className="w-28 h-9 ml-auto  bg-violet-400 text-white cursor-pointer hover:-translate-y-2 transition-all duration-150  justify-center items-center flex rounded-md"
                    >
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[500px] w-full flex justify-center items-center">
            <div className="flex text-lg 800px:text-lg 1000px:text-xl 1200px:text-2xl font-semibold  flex-col items-center py-6 px-10 800px:py-10 800px:px-16 rounded-xl  shadow-2xl">
              {" "}
              <FaBagShopping />
              <p>Wishlist has (0) items</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
