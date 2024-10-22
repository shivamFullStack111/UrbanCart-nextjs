"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import Image from "next/image";
import { FaPencilAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Line_Chart_Products_Analytics from "../orders/products/Line_Chart_Products_Analytics";
// import Line_Chart_Products_Analytics from "./Line_Chart_Products_Analytics";

const users = [
  {
    _id: {
      $oid: "670e4c455cf0a637610b7575",
    },
    name: "karan",
    email: "karan@gmail.com",
    phoneNumber: 3988347945,
    password: "$2b$10$GGYMwUJvADFwToUwqzKOp.7ofivxfn8Uc0NgBNn1RiAU.9TswxOsu",
    isAdmin: false,
    addresses: [],
    createdAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    updatedAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "670e4c455cf0a637610b7575",
    },
    name: "karan",
    email: "karan@gmail.com",
    phoneNumber: 3988347945,
    password: "$2b$10$GGYMwUJvADFwToUwqzKOp.7ofivxfn8Uc0NgBNn1RiAU.9TswxOsu",
    isAdmin: false,
    addresses: [],
    createdAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    updatedAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "670e4c455cf0a637610b7575",
    },
    name: "karan",
    email: "karan@gmail.com",
    phoneNumber: 3988347945,
    password: "$2b$10$GGYMwUJvADFwToUwqzKOp.7ofivxfn8Uc0NgBNn1RiAU.9TswxOsu",
    isAdmin: false,
    addresses: [],
    createdAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    updatedAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "670e4c455cf0a637610b7575",
    },
    name: "karan",
    email: "karan@gmail.com",
    phoneNumber: 3988347945,
    password: "$2b$10$GGYMwUJvADFwToUwqzKOp.7ofivxfn8Uc0NgBNn1RiAU.9TswxOsu",
    isAdmin: false,
    addresses: [],
    createdAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    updatedAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "670e4c455cf0a637610b7575",
    },
    name: "karan",
    email: "karan@gmail.com",
    phoneNumber: 3988347945,
    password: "$2b$10$GGYMwUJvADFwToUwqzKOp.7ofivxfn8Uc0NgBNn1RiAU.9TswxOsu",
    isAdmin: false,
    addresses: [],
    createdAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    updatedAt: {
      $date: "2024-10-15T11:04:37.648Z",
    },
    __v: 0,
  },
];

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Coupons = ({ active = 1 }) => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(users);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save as Excel file
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "users.xlsx");
  };

  return (
    <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
      {/* Left sidebar */}
      <SideBar collapse={collapse} setcollapse={setcollapse} active={4} />

      <div className="h-full w-full bg-red-400">
        {/* Right header */}
        <Header collapse={collapse} setcollapse={setcollapse} />

        {/* Right main */}
        <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover bg-white overflow-y-scroll">
          <h1 className=" text-xl m-3 600px:text-2xl 800px:text-3xl font-extrabold text-gray-600">
            Users Analytics
          </h1>

          <div className="flex justify-center mt-6 800px:mt-10 ">
            <div className=" w-[80vw] max-w-[85vw]  h-[60vw]  800px:w-[60vw] 1200px:w-[50vw] 800px:h-[30vw]">
              {/* chart here......  */}
              <Line_Chart_Products_Analytics />
            </div>
          </div>

          {/* map all users list  */}
          <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
            Users
          </h1>
          <div className="overflow-x-scroll p-2 max-w-[85vw]  overflow-visible w-full">
            <table className="w-full">
              <thead className="w-full">
                <tr>
                  <th className="px-2">Name and Email</th>
                  <th className="px-2">Phone number</th>
                  <th className="px-2">Role</th>
                  <th className="px-2">Total Orders</th>
                  <th className="px-2">Action</th>
                </tr>
              </thead>
              <tbody className="w-full  ">
                {users?.map((user, i) => {
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
                              {/* <Image fill={true} src={user.images[0]} /> */}
                            </div>
                            <div>
                              <p>{user?.name}</p>
                              <p>{user?.email}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>_{user?.phoneNumber}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>{user?.isAdmin ? "Admin" : "User"}</p>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center">
                          <p>98</p>
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
          </div>
          {/* prev next button  */}
          <div className="w-full  flex justify-end">
            <div className="ml-auto flex ">
              <p className="px-4 py-1 bg-orange-400 border hover:bg-orange-100 cursor-pointer text-white">
                1
              </p>
              {[1, 2, 3, 4].map((i) => (
                <p
                  key={i}
                  className="px-4 py-1  border hover:bg-orange-100 cursor-pointer text-orange-400"
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

export default Coupons;
