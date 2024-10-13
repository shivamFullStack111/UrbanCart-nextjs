"use client";
import React from "react";

import Head from "next/head"; // Import the Head component
import Header from "./components/Header";
import SaleBanner from "./components/SaleBanner";
import { Quicksand } from "next/font/google";
import LowwersCarousel from "./components/LowwersCarousel";
import Footer from "./components/Footer";
import Image from "next/image";
import { dummyProducts } from "./utils";
import saleImage from "/src/app/images/sale.jpg";
import { useSelector } from "react-redux";
import { addMostRatedProducts } from "@/store/slices/productSlice";
import ProductSkeleton from "./components/ProductSkeleton";
import NewArrival from "./components/NewArrival/page";
import Link from "next/link";

const roboto = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Home = () => {
  const {
    allProducts,
    trendingProducts,
    isLoading,
    mostRatedProducts,
    newArrivalProducts,
  } = useSelector((state) => state.product);
  return (
    <div className={roboto.className}>
      <Head>
        <title>Urban Cart</title>
        <link rel="icon" href="/favicon.ico" /> {/* Updated favicon path */}
      </Head>
      <Header />
      <div className="flex justify-center bg-gray-300">
        <div className="p-3 w-full h-52 550px:h-64  800px:h-80 1000px:w-[1300px] 1000px:h-[600px] relative">
          <Image fill={true} alt="sale" src={saleImage} />
        </div>
      </div>

      {/* gender categories  */}
      <div className="w-full flex justify-center gap-6  mt-10">
        <Link
          href={"/products?gender=kid"}
          className="flex flex-col items-center"
        >
          <div className="600px:h-20 w-16 h-16 600px:w-20 rounded-full  relative cursor-pointer border border-gray-400 overflow-hidden ">
            <Image
              fill={true}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BUd8uQLlgS2gQL5HuyQbmdetie_3wGhDRQ&s"
              }
            />
          </div>
          <p className="font-semibold text-sm">Kids</p>
        </Link>
        <Link
          href={"/products?gender=men"}
          className="flex flex-col items-center"
        >
          <div className="600px:h-20 w-16 h-16 600px:w-20 rounded-full  relative cursor-pointer border border-gray-400 overflow-hidden ">
            <Image
              fill={true}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNlbQrFekf5N4HTy6ahzGyUVhTwjBL0oqPw&s"
              }
            />
          </div>
          <p className="font-semibold text-sm">Men</p>
        </Link>
        <Link
          href={"/products?gender=women"}
          className="flex flex-col items-center"
        >
          <div className="600px:h-20 w-16 h-16 600px:w-20 rounded-full  relative cursor-pointer border border-gray-400 overflow-hidden ">
            <Image
              fill={true}
              src={
                "data:image/jpeg;base64,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"
              }
            />
          </div>
          <p className="font-semibold text-sm">Women</p>
        </Link>
      </div>

      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div>
          {/* tending products  */}
          <trendingProducts />
          {/* <SaleBanner /> */}
          <LowwersCarousel />
          <NewArrival />
        </div>
      )}

      <Footer />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
