"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DropDown from "./DropDown";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const CreateProduct = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [pageNo, setpageNo] = useState(1);

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

  return (
    <>
      <Header />

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
            <div className="flex flex-col w-full items-center">
              <div className="w-[300px] ">
                <div className="flex justify-center w-[300px] mt-3 items-center">
                  {/* Step 1 */}
                  <p
                    className={`h-5 w-5 rounded-full border ${
                      pageNo === 1
                        ? "bg-red-400"
                        : pageNo > 1
                        ? "bg-green-400"
                        : "bg-gray-300"
                    } text-white flex justify-center items-center`}
                  >
                    {pageNo > 1 ? <TiTick /> : 1}
                  </p>

                  {/* Line between step 1 and step 2 */}
                  <p
                    className={`w-[44%] h-1 bg-gray-300 ${
                      pageNo > 1 ? "bg-green-400" : "bg-gray-300"
                    }`}
                  ></p>

                  {/* Step 2 */}
                  <p
                    className={`h-5 w-5 rounded-full border ${
                      pageNo === 2
                        ? "bg-red-400"
                        : pageNo > 2
                        ? "bg-green-400"
                        : "bg-gray-300"
                    } text-white flex justify-center items-center`}
                  >
                    {pageNo > 2 ? <TiTick /> : 2}
                  </p>

                  {/* Line between step 2 and step 3 */}
                  <p
                    className={`w-[44%] h-1 bg-gray-300 ${
                      pageNo > 2 ? "bg-green-400" : "bg-gray-300"
                    }`}
                  ></p>

                  {/* Step 3 */}
                  <p
                    className={`h-5 w-5 rounded-full border ${
                      pageNo === 3
                        ? "bg-red-400"
                        : pageNo > 3
                        ? "bg-green-400"
                        : "bg-gray-300"
                    } text-white flex justify-center items-center`}
                  >
                    {pageNo > 3 ? <TiTick /> : 3}
                  </p>
                </div>

                <div className="flex justify-center relative items-center">
                  <p className="text-[12px] absolute left-[-30px] font-semibold text-gray-600">
                    Product details
                  </p>
                  <p className="text-[12px] font-semibold text-gray-600">
                    Product Specifications
                  </p>
                  <p className="text-[12px] absolute -right-9 font-semibold text-gray-600">
                    Product Overview
                  </p>
                </div>
              </div>
            </div>

            {/* 1 st  */}
            {pageNo == 1 && (
              <div className="p-1 mt-4 ">
                <div className=" border-2 p-4 border-gray-300  rounded-lg">
                  <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
                    Product Details
                  </p>

                  {/* form  */}
                  <div className="flex flex-col mt-4 gap-2">
                    {/* title  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Tittle
                      </p>
                      <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input>
                    </div>

                    {/* category wear type  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Category
                      </p>
                      <DropDown
                        heading={"Select category"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>

                    {/* 
sub category  

For Clothing:
Men
Women
Kids
For Footwear:
Men
Women
Kids */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Sub-Category
                      </p>
                      <DropDown
                        heading={"Select sub-category"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>

                    {/*cloth type 
Type: Dropdown
Options (dependent on selected subcategory):
Men:
T-Shirts
Shirts
Jeans
Trousers
Shorts
Jackets
Activewear
Women:
T-Shirts
Tops
Dresses
Skirts
Jeans
Trousers
Activewear
Kids (Boys):
T-Shirts
Shorts
Jeans
Jackets
Kids (Girls):
T-Shirts
Dresses
Skirts
Leggings

 */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Cloth Type
                      </p>
                      <DropDown
                        heading={"Select Cloth Type"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>

                    {/* brand  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Brand
                      </p>
                      <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input>
                    </div>

                    {/* sku  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Stock Keeping Unit
                      </p>
                      <input
                        placeholder="Enter SKU"
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>
                    {/* mrp  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        (MRP) Price
                      </p>
                      <input
                        placeholder="Enter MRP* Price"
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>
                    {/*seliing price  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Selling Price
                      </p>
                      <input
                        placeholder="Enter Selling price"
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>
                    {/* stock  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Stock
                      </p>
                      <input
                        placeholder="Enter Stock Quantity"
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>
                    {/* description  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Description
                      </p>
                      <textarea
                        placeholder="Enter Description"
                        className="w-full p-1 py-2 resize min-h-56  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></textarea>
                    </div>
                    {/* image url  */}
                    <div className="p-1">
                      <div className="flex justify-between items-center">
                        <p className="text-[16px] font-bold text-gray-500">
                          Image Urls
                        </p>
                        <FaPlus className="text-gray-500" size={25} />
                      </div>
                      <input
                        placeholder="http://example.png"
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>

                    {/* next button  */}
                    <div
                      onClick={() => {
                        setpageNo(2);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="text-white  mt-6 font-bold text-lg bg-violet-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-violet-400 rounded-lg  hover:text-gray-600  py-1 flex justify-center items-center"
                    >
                      Next
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pageNo == 2 && (
              <div className="p-1 mt-4 ">
                <div className=" border-2 p-4 border-gray-300  rounded-lg">
                  <FaArrowCircleLeft
                    onClick={() => setpageNo((p) => p - 1)}
                    className="text-gray-500 text-2xl cursor-pointer mb-2 hover:text-red-400"
                  />

                  <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
                    Product Specifications and Variations
                  </p>

                  {/* form  */}
                  <div className="flex flex-col mt-4 gap-2">
                    {/* size  */}

                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Chosse Size
                      </p>

                      <div className="flex flex-wrap gap-2 items-center ">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className={`py- px-3 cursor-pointer hover:scale-105 transition-all duration-200  border-violet-500 border-2 text-violet-500 hover:bg-violet-500 hover:text-white font-semibold text-lg`}
                          >
                            S
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* colors  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Chosse Color
                      </p>

                      <div className="flex flex-wrap gap-2 items-center ">
                        {["red", "green", "blue", "pink", "purple"].map((i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: i,
                            }}
                            className={`py- px-3 h-8 w-8 cursor-pointer rounded-full hover:scale-105 transition-all duration-200   border-2 text-violet-500  hover:text-white font-semibold text-lg`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* material  different for both cloth and footwear */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Material
                      </p>
                      <DropDown
                        heading={"Select Material"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>
                    {/* cloth pattern  for cloth  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Cloth Pattern
                      </p>
                      <DropDown
                        heading={"Select Cloth Pattern"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>
                    {/*  fti type  Pattern for cloth  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Fit Type
                      </p>
                      <DropDown
                        heading={"Select Cloth Fit Type"}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>
                    {/*  Sleeve Type (for tops)  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Sleeve Type
                      </p>
                      <DropDown
                        heading={"Select  Sleeve Type "}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>
                    {/*  Sleeve Type (for top and cloth)  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Neck Type
                      </p>
                      <DropDown
                        heading={"Select Neck Type "}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>

                    {/* Heel Height for heel  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Heel Height
                      </p>
                      <input
                        placeholder={"Enter Heel Height"}
                        className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"
                      ></input>
                    </div>

                    {/* sole material for footwear  */}
                    <div className="p-1">
                      <p className="text-[16px] font-bold text-gray-500">
                        Sole Material
                      </p>
                      <DropDown
                        heading={"Select Sole Material "}
                        items={[
                          {
                            key: "Clothing",
                            label: "Clothing",
                          },
                          {
                            key: "Wearing",
                            label: "Wearing",
                          },
                        ]}
                      />
                      {/* <input className="w-full p-1 py-2  outline-none border-2 rounded-md focus:border-violet-400 bg-gray-100"></input> */}
                    </div>

                    {/* next button  */}
                    <div
                      onClick={() => {
                        setpageNo(3);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="text-white  mt-6 font-bold text-lg bg-violet-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-violet-400 rounded-lg  hover:text-gray-600  py-1 flex justify-center items-center"
                    >
                      Next
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pageNo == 3 && (
              <div className="p-1 mt-4 ">
                <div className=" border-2 p-4 border-gray-300  rounded-lg">
                  <FaArrowCircleLeft
                    onClick={() => setpageNo((p) => p - 1)}
                    className="text-gray-500 text-2xl cursor-pointer mb-2 hover:text-red-400"
                  />
                  {/* Header */}

                  <p className=" text-lg  border-b-2 border-gray-300 pb-1 900px:text-xl font-semibold text-gray-600">
                    Product Overview
                  </p>

                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Product Name */}
                    <div>
                      <p className="text-gray-500 font-medium">Product Name</p>
                      <p className="text-gray-700">Men's T-shirt</p>
                    </div>

                    {/* Category */}
                    <div>
                      <p className="text-gray-500 font-medium">Category</p>
                      <p className="text-gray-700">Men's Clothing</p>
                    </div>

                    {/* Type */}
                    <div>
                      <p className="text-gray-500 font-medium">Type</p>
                      <p className="text-gray-700">T-Shirt</p>
                    </div>

                    {/* Size */}
                    <div>
                      <p className="text-gray-500 font-medium">Size</p>
                      <p className="text-gray-700">L</p>
                    </div>

                    {/* Color */}
                    <div>
                      <p className="text-gray-500 font-medium">Color</p>
                      <p className="text-gray-700">Blue</p>
                    </div>

                    {/* Material */}
                    <div>
                      <p className="text-gray-500 font-medium">Material</p>
                      <p className="text-gray-700">Cotton</p>
                    </div>

                    {/* Fit Type */}
                    <div>
                      <p className="text-gray-500 font-medium">Fit Type</p>
                      <p className="text-gray-700">Regular Fit</p>
                    </div>

                    {/* Pattern */}
                    <div>
                      <p className="text-gray-500 font-medium">Pattern</p>
                      <p className="text-gray-700">Solid</p>
                    </div>

                    {/* Sleeve Type */}
                    <div>
                      <p className="text-gray-500 font-medium">Sleeve Type</p>
                      <p className="text-gray-700">Full Sleeve</p>
                    </div>

                    {/* Neck Style */}
                    <div>
                      <p className="text-gray-500 font-medium">Neck Style</p>
                      <p className="text-gray-700">Round Neck</p>
                    </div>
                  </div>

                  {/* Product Images */}
                  <div className="mt-6">
                    <p className="text-gray-500 font-medium">Product Images</p>
                    <div className="flex space-x-4 mt-3">
                      <img
                        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                        src="https://via.placeholder.com/150"
                        alt="Product Image 1"
                      />
                      <img
                        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                        src="https://via.placeholder.com/150"
                        alt="Product Image 2"
                      />
                      <img
                        className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                        src="https://via.placeholder.com/150"
                        alt="Product Image 3"
                      />
                    </div>
                    <div
                      onClick={() => setpageNo(4)}
                      className="text-white  mt-6 font-bold text-lg bg-green-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-green-400 rounded-lg  hover:text-green-600  py-1 flex justify-center items-center"
                    >
                      Create Product
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Dummy handler function
const handleTrack = (orderId) => {
  alert(`Viewing details for order #${orderId}`);
};

export default CreateProduct;
