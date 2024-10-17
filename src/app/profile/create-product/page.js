"use client";
import React, { useEffect, useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DropDown from "./DropDown";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import axios from "axios";
import {
  bgColors,
  clothingMaterials,
  fitTypes,
  footwearMaterials,
  kidsClothing,
  kidsFootwear,
  menClothing,
  menFootwear,
  neckStyles,
  patterns,
  sleeveTypes,
  soleMaterials,
  womenClothing,
  womenFootwear,
} from "@/app/utils";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ProductDetails from "./ProductDetails";
import ProductSpecifications from "./ProductSpecifications";
import ProductOverview from "./ProductOverview";
import ProcessSteps from "./ProcessStep";
import AdminProtectedRoute from "@/app/components/Admin_Protected_Route";
const CreateProduct = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [pageNo, setpageNo] = useState(1);
  const [productDetails, setproductDetails] = useState({
    images: [""],
  });
  const [productSpecifications, setproductSpecifications] = useState({});

  useEffect(() => {
    console.log(productSpecifications?.sizes);
  }, [productSpecifications]);
  // Dummy array of orders
  const dummyOrders = [
    {
      id: "ORD123",
      total: 250.0,
      discount: 20.0,
      gst: 18.5,
      delivery: 15.0,
      orderDate: "2024-09-01",
      totalItems: 3,
      buyerName: "John Doe",
      status: "Shipped",
    },
    {
      id: "ORD456",
      total: 520.0,
      discount: 50.0,
      gst: 35.5,
      delivery: 25.0,
      orderDate: "2024-09-02",
      totalItems: 5,
      buyerName: "Jane Smith",
      status: "Delivered",
    },
  ];

  const handleCreateProduct = async () => {
    try {
      console.log(productSpecifications, productDetails);
      const res = await axios.post("/api/create-product", {
        ...productDetails,
        ...productSpecifications,
      });

      console.log(res.data);
      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <AdminProtectedRoute>
        <Header />
        <Toaster />
        <div className="flex flex-col 800px:flex-row min-h-screen">
          <SideBarOfProfile
            isSideBarOpen={isSideBarOpen}
            setisSideBarOpen={setisSideBarOpen}
            page={6}
          />
          {/* Profile Right */}
          <div className="w-full 800px:pt-4 1000px:p-6 flex justify-center bg-gray-100">
            <div className="w-[97%] 500px:w-[90%] mt-6 bg-white 600px:w-[550px] 800px:w-[450px] 1000px:w-[550px] rounded-lg shadow-lg ">
              <div className="m-2 rounded-t-lg flex p-1 900px:p-3 items-center">
                <p className="bg-gradient-to-tr from-red-300 to-violet-500 bg-clip-text text-transparent font-semibold text-xl  1000px:text-3xl">
                  Create Product
                </p>
              </div>

              {/* process step */}
              <ProcessSteps pageNo={pageNo} />

              {/* 1 st  */}
              {pageNo == 1 && (
                <ProductDetails
                  setpageNo={setpageNo}
                  setproductDetails={setproductDetails}
                  productDetails={productDetails}
                />
              )}
              {pageNo == 2 && (
                <ProductSpecifications
                  setpageNo={setpageNo}
                  setproductSpecifications={setproductSpecifications}
                  productSpecifications={productSpecifications}
                  productDetails={productDetails}
                />
              )}
              {pageNo == 3 && (
                <ProductOverview
                  productDetails={productDetails}
                  productSpecifications={productSpecifications}
                  setpageNo={setpageNo}
                  handleCreateProduct={handleCreateProduct}
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </AdminProtectedRoute>
    </>
  );
};

// Dummy handler function
const handleTrack = (orderId) => {
  alert(`Viewing details for order #${orderId}`);
};

export default CreateProduct;
