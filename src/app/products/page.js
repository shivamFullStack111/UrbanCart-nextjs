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

const sand = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Products = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className={sand.className}>
        <Header />
        <div className={"800px:flex max-800px:pt-20"}>
          <SideBar />
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsContent />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;

const ProductsContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDummyProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res?.data?.products);
      console.log(products);
    };

    getDummyProducts();
  }, []);

  return (
    <div className="flex mt-2 flex-wrap justify-center 800px:max-w-[70%] 800px:w-[70%] 1200px:min-w-[77%] 1200px:max-w-[77%]">
      {products?.map((item, i) => (
        <Link
          href={`/product-detail/${i}`}
          key={i}
          className="h-64 bg-gray-100 border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[45%] 900px:h-72 1050px:w-[32%] 1300px:h-[360px] 1500px:w-[25%] 1500px:h-80 1750px:h-[370px] 1950px:h-[400px]"
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
            <p className="text-sm font-semibold text-gray-500">{item?.title}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="text-sm 800px:text-lg font-semibold">
                  ${item?.price}
                </p>
                <p className="text-sm font-semibold line-through">4839</p>
              </div>
              <p className="bg-green-500 px-2 py-1 text-sm 1000px:text-lg rounded-xl text-white animate-bounce">
                13% off
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const generateMetaData = ({ params }) => {
  return {
    title: "products",
  };
};
