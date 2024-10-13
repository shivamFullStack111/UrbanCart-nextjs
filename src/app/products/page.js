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
  const param = useSearchParams();
  const [isRequesting, setisRequesting] = useState(false);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    let gen = param.get("gender");

    if (gen) {
      setgender(gen?.toLocaleLowerCase());
    }
  }, [param]);

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

  return (
    <>
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
          <Suspense fallback={<div>Loading...</div>}>
            <ProductsContent products={products} />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;

const ProductsContent = ({ products }) => {
  return (
    <div className="w-full h-full  p-2 gap-1  grid  grid-cols-1 300px:grid-cols-2 550px:grid-cols-3 1200px:grid-cols-4 1800px:grid-cols-5 ">
      {products?.map((item, i) => (
        <div
          key={i}
          className="w-full h-[110vw] 300px:h-[64vw] 550px:h-[40vw] 800px:h-[30vw] 1200px:h-[27vw] 1800px:h-[22vw] "
        >
          <div className="w-full h-[80%] relative">
            <Image fill={true} src={item?.images[0]} className=""></Image>
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
      ))}
    </div>
  );
};

export const generateMetaData = ({ params }) => {
  return {
    title: "products",
  };
};

// const ProductsContent = ({ products }) => {
//   console.log(products);
//   // useEffect(() => {
//   //   const getDummyProducts = async () => {
//   //     const res = await axios.get("https://dummyjson.com/products");
//   //     setProducts(res?.data?.products);
//   //     console.log(products);
//   //   };

//   //   getDummyProducts();
//   // }, []);

//   return (
//     <div className="flex mt-2  justify-center 800px:max-w-[70%] 800px:w-[70%] 1200px:min-w-[77%] 1200px:max-w-[77%]">
//       {products?.map((item, i) => (
//         <Link
//           href={`/product-detail/${i}`}
//           key={i}
//           className="h-64 bg-gray-100 border-2 border-white w-[48%] 500px:h-72 600px:h-68 600px:w-[32%] 800px:w-[45%] 900px:h-72 1050px:w-[32%] 1300px:h-[360px] 1500px:w-[25%] 1500px:h-80 1750px:h-[370px] 1950px:h-[400px]"
//         >
//           <div className="w-full h-[70%] 800px:h-[80%] relative">
//             {item?.images?.length && (
//               <Image
//                 lazy="true"
//                 alt="Product image"
//                 src={item?.images[0]}
//                 fill="true"
//               />
//             )}
//           </div>
//           <div className="px-2">
//             <p className="text-sm font-semibold text-gray-500">
//               {item?.tittle}
//             </p>
//             <div className="flex items-center justify-between">
//               <div className="flex gap-2">
//                 <p className="text-sm 800px:text-lg font-semibold">
//                   ${item?.sellingPrice}
//                 </p>
//                 <p className="text-sm font-semibold line-through">
//                   {item?.mrpPrice}
//                 </p>
//               </div>
//               <p className="bg-green-500 px-2 py-1 text-sm 1000px:text-lg rounded-xl text-white animate-bounce">
//                 13% off
//               </p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };
