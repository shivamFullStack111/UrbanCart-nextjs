"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DropDown from "./DropDown";
import { Textarea } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";

const CreateProduct = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

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
          <div className="w-[97%] 500px:w-[90%] mt-6 bg-white 600px:w-[550px] rounded-lg shadow-lg ">
            {/* process  */}
            <div className="m-2 rounded-t-lg flex p-1 900px:p-3 items-center">
              <p className="bg-gradient-to-tr from-red-300 to-violet-500 bg-clip-text text-transparent font-semibold text-xl  1000px:text-3xl">
                Create Product
              </p>
            </div>

            <div className="flex flex-col w-full items-center">
              <div className="flex justify-center w-full mt-3 items-center">
                <div className="flex flex-col items-center">
                  <p className="h-5 w-5 rounded-full border bg-red-400 text-white flex justify-center items-center">
                    1
                  </p>
                </div>
                <p className="w-[20%] h-1 bg-gray-300"></p>
                <p className="h-5 w-5 rounded-full border bg-gray-300  text-white flex justify-center items-center">
                  2
                </p>
                <p className="w-[20%] h-1 bg-gray-300"></p>
                <p className="h-5 w-5 rounded-full border bg-gray-300 text-white flex justify-center items-center">
                  3
                </p>
              </div>

              <div
                className="flex items-center justify-center gap-[5vw] 450px:gap-[7.5vw] 600px:gap-[10vw] 700px:gap-[11vw] 800px:gap-[5.5vw] 900px:gap-[6vw] 950px:gap-[6.5vw] 1100px:gap-[8vw]
              1200px:gap-[8.5vw] 1300px:gap-[9vw] 1400px:gap-[9.6vw] 1500px:gap-[10.3vw] 2000px:gap-[12vw]
              w-full"
              >
                <p className="text-[10px] text-gray-500">Products Details</p>

                <p className="text-[10px] text-gray-500">Products Details</p>

                <p className="text-[10px] text-gray-500">Products Details</p>
              </div>
            </div>

            {/* 1 st  */}
            <div className="p-1 mt-4 ">
              <div className=" border-2 p-1 border-gray-300  rounded-lg">
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
                    <p className="text-[16px] font-bold text-gray-500">Brand</p>
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
                    <p className="text-[16px] font-bold text-gray-500">Stock</p>
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
                  <div className="text-white  font-bold text-lg bg-violet-400 cursor-pointer transition-all duration-200 hover:bg-white border-2 border-violet-400 rounded-lg  hover:text-gray-600  py-1 flex justify-center items-center">
                    Next
                  </div>
                </div>
              </div>
            </div>
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
