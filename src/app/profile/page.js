"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { dummyProduct } from "../utils";
import { useState } from "react";
import SideBarOfProfile from "./SideBar";

const Profile = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  return (
    <>
      <Header />

      <div className=" flex flex-col 800px:flex-row ">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={1}
        />
        {/* profile  right  */}
        <div className="w-full   800px:pt-4  p-3  flex justify-center ">
          {/* profile box  */}
          <div className=" w-[90%] 1000px:w-[600px] 1200px:w-[700px]  flex flex-col items-center  ">
            {/* image  */}
            <div className="h-24 w-24 800px:mt-16 relative rounded-full">
              <Image className="rounded-full" src={dummyProduct} fill={true} />
            </div>

            {/* inputs  */}
            <div className="flex w-full mt-4 items-center flex-col">
              {/* 2 input in 1 box  */}
              <div className="flex gap-4 w-full  flex-col 1200px:flex-row ">
                <div className="w-full">
                  Name:
                  <div className="w-full p-2 mt-2 bg-gray-100 rounded-lg shadow-md">
                    <input
                      className="bg-gray-100 w-full outline-none"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  Email:
                  <div className="w-full p-2 mt-2 bg-gray-100 rounded-lg shadow-md">
                    <input
                      className="bg-gray-100 w-full outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              {/* 2 input in 1 box  */}
              <div className="flex gap-4 w-full mt-3  flex-col 1200px:flex-row ">
                <div className="w-full">
                  Phone number:
                  <div className="w-full p-2 mt-2 bg-gray-100 rounded-lg shadow-md">
                    <input
                      className="bg-gray-100 w-full outline-none"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="w-full">
                  Email:
                  <div className="w-full p-2 mt-2 bg-gray-100 rounded-lg shadow-md">
                    <input
                      className="bg-gray-100 w-full outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              {/* botton  */}

              <div className="w-full bg-violet-400 rounded-xl hover:translate-y-3 text-white hover:scale-105 transition-all duration-200 cursor-pointer font-bold hover:bg-violet-600 mt-5 mb-5  text-lg   800px:text-xl p-3 flex justify-center items-center">
                <p>Update Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
