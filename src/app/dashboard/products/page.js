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
import ProductEditPage from "./ProductEditPage";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import CreateProductModal from "./CreateProductModal";
// import Line_Chart_Products_Analytics from "./Line_Chart_Products_Analytics";

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Products = () => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [products, setproducts] = useState([]);
  const [totalProducts, settotalProducts] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [createProductOpen, setcreateProductOpen] = useState(true);

  const [editOpen, seteditOpen] = useState(false);
  const [selectedEditProduct, setselectedEditProduct] = useState(null);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const getProducts = async (pageNumber) => {
    try {
      const res = await axios.post("/api/all-products", { pageNumber });
      setproducts(res?.data.products);

      settotalProducts(res?.data?.totalProducts);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts(1);
  }, []);

  const handleDelete = async (productid) => {
    try {
      const res = await axios.post("/api/delete-product", { productid });

      if (res.data?.success) {
        toast.success(res.data.message);
        settotalProducts((p) => p - 1);
        const updatedProducts = products?.filter(
          (product) => product._id !== productid
        );
        setproducts(updatedProducts);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    <>
      {createProductOpen && <CreateProductModal />}
      <Toaster />
      {editOpen && (
        <ProductEditPage
          product={selectedEditProduct}
          setproducts={setproducts}
          allproducts={products}
          seteditOpen={seteditOpen}
          setselectedEditProduct={setselectedEditProduct}
        />
      )}
      <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
        {/* edit page open  */}
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
            <div className="w-full flex justify-between items-center">
              <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
                Products
              </h1>
              <div
                onClick={() => setcreateProductOpen(true)}
                className="cursor-pointer px-4 py-1 items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-lg font-semibold"
              >
                Create product
              </div>
            </div>
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
                              <Link
                                href={`/product-detail/${product?._id}`}
                                className="px-3 rounded-lg py-1 bg-blue-200"
                              >
                                <FaEye
                                  size={22}
                                  className=" hover:scale-110 cursor-pointer transition-all duration-200 text-gray-500 "
                                />
                              </Link>
                              <div className="px-3 rounded-lg py-1 bg-orange-200">
                                <FaPencilAlt
                                  onClick={() => {
                                    seteditOpen(true);
                                    setselectedEditProduct(product);
                                  }}
                                  size={22}
                                  className="hover:scale-110 cursor-pointer transition-all duration-200 text-orange-400           "
                                />
                              </div>
                              <div
                                onClick={() => handleDelete(product._id)}
                                className="px-3 rounded-lg py-1 bg-red-200"
                              >
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
    </>
  );
};

export default Products;
