"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";
import { Quicksand } from "next/font/google";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const sand = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Products = () => {
  const [category, setcategory] = useState("");
  const [sortBy, setsortBy] = useState("");
  const [color, setcolor] = useState("");
  const [price, setprice] = useState({
    from: "",
    to: "",
  });
  const [ratingAndAbove, setratingAndAbove] = useState("");
  const [gender, setgender] = useState("");
  const [isRequesting, setisRequesting] = useState(false);
  const [products, setproducts] = useState([]);

  // Suspense Boundary ke andar useSearchParams ko wrap karein
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper setgender={setgender} />
      <Head>
        <title>My page title</title>
      </Head>
      <div className={sand.className}>
        <Header />
        <div className={"800px:flex max-800px:pt-20"}>
          <SideBar
            category={category}
            setcategory={setcategory}
            sortBy={sortBy}
            setsortBy={setsortBy}
            color={color}
            setcolor={setcolor}
            price={price}
            setprice={setprice}
            ratingAndAbove={ratingAndAbove}
            setratingAndAbove={setratingAndAbove}
            gender={gender}
            setgender={setgender}
          />
          <ProductsContent products={products} />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

const SearchParamsWrapper = ({ setgender }) => {
  const param = useSearchParams();

  useEffect(() => {
    let gen = param.get("gender");

    if (gen) {
      setgender(gen?.toLocaleLowerCase());
    }
  }, [param]);

  return null; // Yeh component sirf gender set karne ke liye hai
};

const ProductsContent = ({ products }) => {
  return (
    <div className="w-full h-full p-2 gap-1 grid grid-cols-1 300px:grid-cols-2 550px:grid-cols-3 1200px:grid-cols-4 1800px:grid-cols-5">
      {products
        ? products.map((item, i) => (
            <div
              key={i}
              className="w-full h-[110vw] 300px:h-[64vw] 550px:h-[40vw] 800px:h-[30vw] 1200px:h-[27vw] 1800px:h-[22vw]"
            >
              <div className="w-full h-[80%] relative">
                <Image fill={true} src={item?.images[0]} className="" />
              </div>

              <div className="px-2">
                <p className="text-lg font-semibold text-gray-700">
                  {item?.tittle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <p className="text-sm 800px:text-lg font-semibold">
                      ${item?.sellingPrice}
                    </p>
                    <p className="text-sm font-semibold line-through">
                      {item?.mrpPrice}
                    </p>
                  </div>
                  <p className="bg-green-500 px-2 py-[2px] text-[10px] 1000px:text-sm rounded-sm text-white ">
                    13% off
                  </p>
                </div>
              </div>
            </div>
          ))
        : // Skeleton Loader
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[110vw] 300px:h-[64vw] bg-gray-400 animate-pulse 550px:h-[40vw] 800px:h-[30vw] 1200px:h-[27vw] 1800px:h-[22vw]"
            >
              <div className="w-full h-[80%] bg-gray-300"></div>
              <div className="px-2">
                <p className="h-4 bg-gray-300 animate-pulse rounded-md"></p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-2">
                    <p className="h-4 bg-gray-300 animate-pulse rounded-md w-12"></p>
                    <p className="h-4 bg-gray-300 animate-pulse rounded-md w-12"></p>
                  </div>
                  <p className="bg-green-500 px-2 py-[2px] text-[10px] rounded-sm text-white animate-pulse">
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export const generateMetaData = ({ params }) => {
  return {
    title: "products",
  };
};

export default Products;
