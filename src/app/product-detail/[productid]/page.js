import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { dummyProduct } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="800px:flex gap-4 1400px:gap-20 my-6 justify-center">
        {/* left  */}
        <div className="w-full relative gap-10 h-[550px] 600px:h-[700px] 800px:h-[550px] 1050px:h-[700px] 1400px:w-[40vw] 2000px:h-[900px]  bg-gray-200 max-800px:mt-[70px]">
          <Image
            className="z-20"
            src={dummyProduct}
            alt="product"
            fill={true}
          />
          <div className=" h-full ml-2 py-9  overflow-y-scroll hide-scrollbar absolute z-30 ">
            {/* more images  */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Link
                href={`/product-detail/${i}`}
                key={i}
                className="w-20 mt-2 h-24 relative"
              >
                <Image
                  alt="product"
                  className={`${i === 1 && "border-2 border-red-500"}`}
                  src={dummyProduct}
                  fill={true}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* right  */}
        <div className={`p-3 1400px:w-[30vw]`}>
          <div className="flex justify-between items-center">
            <p className="text-sm 1200px:text-lg font-bold text-red-400">
              Thivi Shirt Col
            </p>{" "}
            {/*brand name */}
            <p className="text-sm 1200px:text-lg font-bold text-gray-400">
              Ratings (4.3)
            </p>
          </div>
          <p className="text-lg 1200px:text-xl font-bold text-gray-600 mt-2">
            Men Spider T-Shirt {/*brand name */}
          </p>{" "}
          <div className="flex gap-6">
            {/* price  */}
            <div>
              <p className="text-sm  1200px:text-xl font-bold text-gray-400 mt-3">
                Price:
              </p>
              <div className="text-lg 1200px:text-xl font-bold text-red-400 mt-2">
                $292{" "}
                <p className="text-sm 1200px:text-lg inline text-gray-400 line-through">
                  {" "}
                  $432
                </p>
              </div>{" "}
            </div>

            {/* quantity buttons  */}
            <div>
              <p className="text-sm 1200px:text-lg  font-bold text-gray-400 mt-3">
                Quantity:
              </p>
              <div className={"mt-2 flex items-center "}>
                <p className="h-8 w-8 bg-gray-300 flex justify-center items-center">
                  -
                </p>
                <p className="h-8 w-8 bg-white flex justify-center items-center">
                  2
                </p>
                <p className="h-8 w-8 bg-gray-300 flex justify-center items-center">
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
            Download this HD photo of clothes, shoes, dress, and fashion by
            Karolina Grabowska (@kaboompics) Published on February 1, 2023
            Licensed under the Unsplash+ License
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
