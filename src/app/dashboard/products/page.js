"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import Image from "next/image";
import { FaPencilAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Line_Chart_Products_Analytics from "./Line_Chart_Products_Analytics";
import axios from "axios";
import { getAllProducts } from "@/functions/productsFunction";
// import Line_Chart_Products_Analytics from "./Line_Chart_Products_Analytics";

const productts = [
  {
    _id: {
      $oid: "67107333c7edd5264a2921a1",
    },
    title: "fdbjf",
    gender: "men",
    category: "clothing",
    brand: "fcdjnk",
    clothType: "sleepwear",
    stockKeepingUnit: 2343,
    mrpPrice: 21,
    sellingPrice: 324,
    stock: 43324,
    totalSale: 0,
    description: "fvdmbfkv",
    images: [
      "data:image/webp;base64,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",
    ],
    totalRating: 0,
    colors: [
      {
        name: "Gold",
        color: "#FFD700",
        _id: {
          $oid: "670bf4cead142dbfc8831324",
        },
      },
      {
        name: "Brown",
        color: "#A52A2A",
        _id: {
          $oid: "670bf4cead142dbfc8831325",
        },
      },
      {
        name: "Slate Gray",
        color: "#708090",
        _id: {
          $oid: "670bf4cead142dbfc8831326",
        },
      },
      {
        name: "Dark Orange",
        color: "#FF8C00",
        _id: {
          $oid: "670bf4cead142dbfc8831327",
        },
      },
    ],
    sizes: ["XXL", "XL"],
    material: "leather",
    clothPattern: "striped",
    fitType: "relaxed fit",
    neckType: "round neck",
    heelHeight: 0,
    soleMaterial: "",
    createdAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    updatedAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67107333c7edd5264a2921a1",
    },
    title: "fdbjf",
    gender: "men",
    category: "clothing",
    brand: "fcdjnk",
    clothType: "sleepwear",
    stockKeepingUnit: 2343,
    mrpPrice: 21,
    sellingPrice: 324,
    stock: 43324,
    totalSale: 0,
    description: "fvdmbfkv",
    images: [
      "data:image/webp;base64,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",
    ],
    totalRating: 0,
    colors: [
      {
        name: "Gold",
        color: "#FFD700",
        _id: {
          $oid: "670bf4cead142dbfc8831324",
        },
      },
      {
        name: "Brown",
        color: "#A52A2A",
        _id: {
          $oid: "670bf4cead142dbfc8831325",
        },
      },
      {
        name: "Slate Gray",
        color: "#708090",
        _id: {
          $oid: "670bf4cead142dbfc8831326",
        },
      },
      {
        name: "Dark Orange",
        color: "#FF8C00",
        _id: {
          $oid: "670bf4cead142dbfc8831327",
        },
      },
    ],
    sizes: ["XXL", "XL"],
    material: "leather",
    clothPattern: "striped",
    fitType: "relaxed fit",
    neckType: "round neck",
    heelHeight: 0,
    soleMaterial: "",
    createdAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    updatedAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67107333c7edd5264a2921a1",
    },
    title: "fdbjf",
    gender: "men",
    category: "clothing",
    brand: "fcdjnk",
    clothType: "sleepwear",
    stockKeepingUnit: 2343,
    mrpPrice: 21,
    sellingPrice: 324,
    stock: 43324,
    totalSale: 0,
    description: "fvdmbfkv",
    images: [
      "data:image/webp;base64,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",
    ],
    totalRating: 0,
    colors: [
      {
        name: "Gold",
        color: "#FFD700",
        _id: {
          $oid: "670bf4cead142dbfc8831324",
        },
      },
      {
        name: "Brown",
        color: "#A52A2A",
        _id: {
          $oid: "670bf4cead142dbfc8831325",
        },
      },
      {
        name: "Slate Gray",
        color: "#708090",
        _id: {
          $oid: "670bf4cead142dbfc8831326",
        },
      },
      {
        name: "Dark Orange",
        color: "#FF8C00",
        _id: {
          $oid: "670bf4cead142dbfc8831327",
        },
      },
    ],
    sizes: ["XXL", "XL"],
    material: "leather",
    clothPattern: "striped",
    fitType: "relaxed fit",
    neckType: "round neck",
    heelHeight: 0,
    soleMaterial: "",
    createdAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    updatedAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67107333c7edd5264a2921a1",
    },
    title: "fdbjf",
    gender: "men",
    category: "clothing",
    brand: "fcdjnk",
    clothType: "sleepwear",
    stockKeepingUnit: 2343,
    mrpPrice: 21,
    sellingPrice: 324,
    stock: 43324,
    totalSale: 0,
    description: "fvdmbfkv",
    images: [
      "data:image/webp;base64,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",
    ],
    totalRating: 0,
    colors: [
      {
        name: "Gold",
        color: "#FFD700",
        _id: {
          $oid: "670bf4cead142dbfc8831324",
        },
      },
      {
        name: "Brown",
        color: "#A52A2A",
        _id: {
          $oid: "670bf4cead142dbfc8831325",
        },
      },
      {
        name: "Slate Gray",
        color: "#708090",
        _id: {
          $oid: "670bf4cead142dbfc8831326",
        },
      },
      {
        name: "Dark Orange",
        color: "#FF8C00",
        _id: {
          $oid: "670bf4cead142dbfc8831327",
        },
      },
    ],
    sizes: ["XXL", "XL"],
    material: "leather",
    clothPattern: "striped",
    fitType: "relaxed fit",
    neckType: "round neck",
    heelHeight: 0,
    soleMaterial: "",
    createdAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    updatedAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "67107333c7edd5264a2921a1",
    },
    title: "fdbjf",
    gender: "men",
    category: "clothing",
    brand: "fcdjnk",
    clothType: "sleepwear",
    stockKeepingUnit: 2343,
    mrpPrice: 21,
    sellingPrice: 324,
    stock: 43324,
    totalSale: 0,
    description: "fvdmbfkv",
    images: [
      "data:image/webp;base64,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",
    ],
    totalRating: 0,
    colors: [
      {
        name: "Gold",
        color: "#FFD700",
        _id: {
          $oid: "670bf4cead142dbfc8831324",
        },
      },
      {
        name: "Brown",
        color: "#A52A2A",
        _id: {
          $oid: "670bf4cead142dbfc8831325",
        },
      },
      {
        name: "Slate Gray",
        color: "#708090",
        _id: {
          $oid: "670bf4cead142dbfc8831326",
        },
      },
      {
        name: "Dark Orange",
        color: "#FF8C00",
        _id: {
          $oid: "670bf4cead142dbfc8831327",
        },
      },
    ],
    sizes: ["XXL", "XL"],
    material: "leather",
    clothPattern: "striped",
    fitType: "relaxed fit",
    neckType: "round neck",
    heelHeight: 0,
    soleMaterial: "",
    createdAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    updatedAt: {
      $date: "2024-10-13T16:26:54.415Z",
    },
    __v: 0,
  },
];

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Products = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [products, setproducts] = useState([]);
  const [totalProducts, settotalProducts] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);

  const getProducts = async (pageNumber) => {
    try {
      const res = await axios.post("/api/all-products", { pageNumber });
      setproducts(res?.data.products);

      console.log(
        res?.data.products,
        "||||||||||||||||||||||||||||||||||||||||||||||||||"
      );

      settotalProducts(res?.data?.totalProducts);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts(1);
  }, []);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(t);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save as Excel file
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "products.xlsx");
  };

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar collapse={collapse} setcollapse={setcollapse} active={3} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <Header collapse={collapse} setcollapse={setcollapse} />

        {/* Right main */}
        <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
          <h1 className=" text-xl m-3 600px:text-2xl 800px:text-3xl font-extrabold text-gray-600">
            Products Analytics
          </h1>

          <div className="flex justify-center mt-6 800px:mt-10 ">
            <div className=" w-[80vw] max-w-[85vw]  h-[60vw]  800px:w-[60vw] 1200px:w-[50vw] 800px:h-[30vw]">
              {/* chart here......  */}
              <Line_Chart_Products_Analytics />
            </div>
          </div>

          {/* map all products list  */}
          <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
            Products
          </h1>
          <div className="overflow-x-scroll p-2 max-w-[85vw]  overflow-visible w-full">
            <table className="w-full">
              <thead className="w-full">
                <tr>
                  <th className="px-2">Name and size</th>
                  <th className="px-2">Price</th>
                  <th className="px-2">Stock</th>
                  <th className="px-2">Category</th>
                  <th className="px-2">Rating</th>
                  <th className="px-2">Action</th>
                </tr>
              </thead>
              <tbody className="w-full  ">
                {products?.map((product, i) => {
                  return (
                    <tr
                      key={i}
                      // className="bg-green-100"
                      className="py-10"
                    >
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-20 rounded-md overflow-hidden bg-green-200 relative  ">
                              <Image fill={true} src={product.images[0]} />
                            </div>
                            <div className="w-32 overflow-hidden">
                              <p>{product?.title}</p>
                              <div className="flex gap-1 items-center">
                                <p className="font-semibold">Size:</p>
                                {product.sizes?.map((size) => (
                                  <p className="mr-1 text-sm" key={size}>
                                    {size}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>${product?.sellingPrice}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{product?.stock}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{product?.category}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center items-center gap-2">
                          <FaStar color="gold" />
                          <p>({product?.totalRating})</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center items-center gap-2">
                          <div className="flex gap-3 ">
                            <div className="px-3 rounded-lg py-1 bg-blue-200">
                              <FaEye
                                size={22}
                                className=" hover:scale-110 cursor-pointer transition-all duration-200 text-gray-500 "
                              />
                            </div>
                            <div className="px-3 rounded-lg py-1 bg-orange-200">
                              <FaPencilAlt
                                size={22}
                                className="hover:scale-110 cursor-pointer transition-all duration-200 text-orange-400           "
                              />
                            </div>
                            <div className="px-3 rounded-lg py-1 bg-red-200">
                              <MdDelete
                                size={22}
                                className=" hover:scale-110 cursor-pointer transition-all duration-200 text-red-400 "
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* prev next button  */}
          </div>
          <div className="w-full  flex justify-end pb-10">
            <div className="ml-auto max-w-48 overflow-x-scroll mr-6 flex ">
              {[
                ...Array(
                  Math.floor(totalProducts / 8) < totalProducts / 8
                    ? Math.floor(totalProducts / 8) + 1
                    : Math.floor(totalProducts / 8)
                ).keys(),
              ].map((i) => (
                <p
                  onClick={() => {
                    setcurrentPage(i + 1);
                    getProducts(i + 1);
                  }}
                  key={i}
                  className={`px-4 py-1   border hover:bg-orange-100 cursor-pointer text-orange-400  ${
                    currentPage == i + 1 && "bg-orange-400 text-white"
                  }`}
                >
                  {i + 1}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
