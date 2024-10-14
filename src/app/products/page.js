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
import { BsCart, BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { useSelect } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { IoCart } from "react-icons/io5";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/store/slices/wishlistSlice";
import toast, { Toaster } from "react-hot-toast";
import { addItemToCart } from "@/store/slices/cartSlice";

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

  const getProducts_withFilter = async (filter, pageNumber) => {
    try {
      const res = await axios.post(
        `/api/get-product-by-filter/${pageNumber}`,
        filter
      );
      console.log(res.data?.products?.length);
      setproducts(res.data?.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getProducts_withFilter(
        {
          category,
          sortBy,
          color,
          price,
          ratingAndAbove,
          gender,
        },
        1
      );
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [category, sortBy, color, price, ratingAndAbove, gender]);

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
      {products?.length
        ? products.map((item, i) => <Card item={item} i={i} />)
        : // Skeleton Loader
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[110vw] 300px:h-[64vw] mb-6 animate-pulse 550px:h-[40vw] 800px:h-[30vw] 1200px:h-[27vw] 1800px:h-[22vw]"
            >
              <div className="w-full h-[80%] bg-gray-200"></div>
              <div className="">
                <p className="h-8 bg-gray-200 animate-pulse mt-2"></p>
                <p className="h-8 bg-gray-200 animate-pulse mt-2 "></p>
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

const Card = ({ item, i }) => {
  const [inWishlist, setinWishlist] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const isExist = wishlist.find((w) => w._id === item?._id);
    if (isExist) {
      setinWishlist(true);
    } else {
      setinWishlist(false);
    }
  }, [item, wishlist]);

  const handleAddToCart = () => {
    const isExist = cart.find((w) => w._id === item?._id);

    if (isExist) {
      toast.error("item already in cart");
    } else {
      addItemToCart(item);
      dispatch(addItemToCart(item));
      toast.success("item added to cart");
    }
  };
  const handleAddToWishlist = () => {
    if (!inWishlist) {
      dispatch(addItemToWishlist(item));
      setinWishlist(true);
      toast.success("item added to wishlist");
    } else {
      dispatch(removeItemFromWishlist(item?._id));
      setinWishlist(false);
    }
  };
  return (
    <div
      // href={`/product-detail/${item?._id}`}
      className="w-full cursor-pointer h-[110vw] 300px:h-[64vw] 550px:h-[40vw] 800px:h-[30vw] 1200px:h-[27vw] 1800px:h-[22vw]"
    >
      <Toaster />
      <div className="w-full h-[80%] relative">
        <Image fill={true} src={item?.images[0]} className="z-20  " />
        <IoCart
          onClick={(e) => {
            e.stopPropagation();

            handleAddToCart();
          }}
          className="absolute top-2  hover:scale-105 transition-all text-gray-500 duration-150  right-2 z-30"
          size={24}
        />
        <FaHeart
          onClick={(e) => {
            e.stopPropagation();

            handleAddToWishlist();
          }}
          className={`absolute top-10 hover:scale-105 transition-all duration-150 ${
            inWishlist ? "text-red-500" : "text-gray-600"
          }  right-2 z-30`}
          size={24}
        />
      </div>

      <div className="px-2">
        <p className="text-lg font-semibold text-gray-700">{item?.title}</p>
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
  );
};
