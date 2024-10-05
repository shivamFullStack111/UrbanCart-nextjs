"use client";
import React from "react";

import Head from "next/head"; // Import the Head component
import Header from "./components/Header";
import CarOusal from "./components/Carousal";
import SaleBanner from "./components/SaleBanner";
import Banner from "./components/Banner";
import { Roboto, ABeeZee, Quicksand } from "next/font/google";
import LowwersCarousel from "./components/LowwersCarousel";
import Footer from "./components/Footer";
import Image from "next/image";
import { dummyProducts } from "./utils";
import saleImage from "/src/app/images/sale.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const roboto = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Home = () => {
  return (
    <div className={roboto.className}>
      <Head>
        <title>Urban Cart</title>
        <link rel="icon" href="/favicon.ico" /> {/* Updated favicon path */}
      </Head>
      <Header />
      {/* <Banner /> */}

      {/* banners slae  */}

      {/* tending products  */}
      <div className="max-800px:pt-12  ">
        <div className="flex justify-center bg-gray-300">
          <div className="p-3 w-full h-52 550px:h-64  800px:h-80 1000px:w-[1300px] 1000px:h-[600px] relative">
            <Image fill={true} alt="sale" src={saleImage} />
          </div>
        </div>
        <p className="text-xl 800px:text-2xl font-bold text-gray-600 px-3 mt-4 mb-2 800px:p-7 animate-pulse">
          Trending
        </p>
        <div className="flex mt-2 flex-wrap justify-center w-full">
          {dummyProducts.slice(0, 6)?.map((item, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[37%] 900px:w-[30%] 900px:h-72 1050px:w-[32%] 1050px:h-80 1300px:h-[400px] 1500px:w-[25%]  1750px:h-[420] 1950px:h-[440] 2000px:h-[460px]"
            >
              <div className="w-full h-[70%] 800px:h-[80%] relative">
                <Image
                  lazy="true"
                  alt="Product image"
                  src={item?.images[0]}
                  fill="true"
                />
              </div>
              <div className="px-2">
                <p className="text-sm font-semibold text-gray-500">
                  {item?.title}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <p className="text-sm 800px:text-lg font-semibold">
                      ${item?.price}
                    </p>
                    <p className="text-sm font-semibold line-through">
                      ${Math.floor(item?.price * (1 + Math.random()))}
                    </p>
                  </div>
                  <p className="bg-green-500 px-2 py-1 text-sm 1000px:text-lg rounded-xl text-white animate-bounce">
                    13% off
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SaleBanner />

      <LowwersCarousel />
      <p className="text-xl 800px:text-2xl font-bold text-gray-600 px-3 mb-2 800px:p-7 pt-1 animate-pulse">
        New Arrival
      </p>
      <div className="flex mt-2 flex-wrap justify-center w-full">
        {dummyProducts.slice(6, 12)?.map((item, i) => (
          <div
            key={i}
            className="h-64 bg-gray-200 border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[37%] 900px:w-[30%] 900px:h-72 1050px:w-[32%] 1050px:h-80 1300px:h-[400px] 1500px:w-[25%]  1750px:h-[420] 1950px:h-[440] 2000px:h-[460px]"
          >
            <div className="w-full h-[70%] 800px:h-[80%] relative">
              <Image
                lazy="true"
                alt="Product image"
                src={item?.images[0]}
                fill="true"
              />
            </div>
            <div className="px-2">
              <p className="text-sm font-semibold text-gray-500">
                {item?.title}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <p className="text-sm 800px:text-lg font-semibold">
                    ${item?.price}
                  </p>
                  <p className="text-sm font-semibold line-through">
                    ${Math.floor(item?.price * (1 + Math.random()))}
                  </p>
                </div>
                <p className="bg-green-500 px-2 py-1 text-sm 1000px:text-lg rounded-xl text-white animate-bounce">
                  13% off
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default Home;
