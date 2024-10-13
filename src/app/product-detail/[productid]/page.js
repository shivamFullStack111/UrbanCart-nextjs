"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { dummyProduct } from "@/app/utils";
import { getSingleProduct } from "@/functions/productsFunction";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductDetail = () => {
  const { productid } = useParams();
  const [product, setproduct] = useState({});
  const [quantity, setquantity] = useState(1);

  useEffect(async () => {
    const res = await getSingleProduct(productid);
    console.log(res.data);
    setproduct(res?.data?.product);
  }, [productid]);
  return (
    <>
      <Header />
      <div className="800px:flex gap-4 1400px:gap-20 my-6 justify-center">
        {/* left  */}
        <div className="w-full relative gap-10 h-[550px] 600px:h-[700px] 800px:h-[550px] 1050px:h-[700px] 1400px:w-[40vw] 2000px:h-[900px]  bg-gray-200 max-800px:mt-[70px]">
          {product?.images?.length && (
            <Image
              className="z-20"
              src={product?.images[0]}
              alt="product"
              fill={true}
            />
          )}
          <div className=" h-full ml-2 py-9  overflow-y-scroll hide-scrollbar absolute z-30 ">
            {/* more images  */}
            {product?.images?.map((i) => (
              <div key={i} className="w-20 mt-2 h-24 relative">
                <Image
                  alt="product"
                  className={`${i === 1 && "border-2 border-red-500"}`}
                  src={i}
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* right  */}
        <div className={`p-3 1400px:w-[30vw]`}>
          <div className="flex justify-between items-center">
            <p className="text-sm 1200px:text-lg font-bold text-red-400">
              {product?.brand}
            </p>{" "}
            {/*brand name */}
            <p className="text-sm 1200px:text-lg font-bold text-gray-400">
              Ratings ({product?.totalRating})
            </p>
          </div>
          <p className="text-lg 1200px:text-xl font-bold text-gray-600 mt-2">
            {product?.title} {/*title */}
          </p>{" "}
          <div className="flex gap-6">
            {/* price  */}
            <div>
              <p className="text-sm  1200px:text-xl font-bold text-gray-400 mt-3">
                Price:
              </p>
              <div className="text-lg 1200px:text-xl font-bold text-red-400 mt-2">
                ${product?.sellingPrice}{" "}
                <p className="text-sm 1200px:text-lg inline text-gray-400 line-through">
                  {" "}
                  ${product?.mrpPrice}
                </p>
              </div>{" "}
            </div>

            {/* quantity buttons  */}
            <div>
              <p className="text-sm 1200px:text-lg  font-bold text-gray-400 mt-3">
                Quantity:
              </p>
              <div className={"mt-2 flex items-center "}>
                <p
                  onClick={() => setquantity((p) => (p === 1 ? p : p - 1))}
                  className="h-8 w-8 cursor-pointer bg-gray-300 flex justify-center items-center"
                >
                  -
                </p>
                <p className="h-8 w-8 bg-white flex justify-center items-center">
                  {quantity}
                </p>
                <p
                  onClick={() => setquantity((p) => p + 1)}
                  className="h-8 cursor-pointer w-8 bg-gray-300 flex justify-center items-center"
                >
                  +
                </p>
              </div>
            </div>
          </div>
          {/* description  */}
          <p className="text-sm 1200px:text-lg font-bold text-gray-400 mt-6">
            Description:
          </p>
          <p className="text-gray-500 text-sm 1200px:text-lg mt-2 text tracking-tight leading-snug ">
            {product?.description}
          </p>
          {/* add to cart button  */}
          <div className="h-12 mt-6 rounded-xl cursor-pointer w-full gap-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black flex justify-center items-center">
            <FaCartPlus size={26} />
            <p className="font-semibold text-lg">Add To Cart</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
