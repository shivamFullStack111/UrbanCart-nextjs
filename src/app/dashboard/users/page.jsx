"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import LineChartForUser from "./LineChartForUsers";
import axios from "axios";
import userProfile from "../../images/user.png";
import Edit_user from "./Edit_user";
import toast, { Toaster } from "react-hot-toast";

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Users = () => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [users, setusers] = useState([]);
  const [totalUsers, settotalUsers] = useState(0);

  const [currentPage, setcurrentPage] = useState(1);
  const [editOpen, seteditOpen] = useState(false);
  const [currentSelectedUser, setcurrentSelectedUser] = useState(null);

  const getUsers = async (pageNumber) => {
    try {
      const res = await axios.post("/api/get-user-by-pageNumber", {
        pageNumber,
      });
      setusers(res?.data?.users);
      settotalUsers(res?.data?.totalUsers);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (userid) => {
    try {
      const res = await axios.post("/api/delete-user", { userid });

      if (res.data.success) {
        const updatedUsers = users?.filter((usr) => usr?._id !== userid);
        setusers(updatedUsers);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers(1);
  }, []);

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
    <>
      <Toaster />
      {editOpen && (
        <Edit_user
          alluser={users}
          setalluser={setusers}
          user={currentSelectedUser}
          setcurrentSelectedUser={setcurrentSelectedUser}
          seteditOpen={seteditOpen}
        />
      )}
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
                <LineChartForUser />
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
                  {users?.map((usr, i) => {
                    if (user?.email !== usr?.email)
                      return (
                        <tr
                          key={i}
                          // className="bg-green-100"
                          className="py-10"
                        >
                          <td className="py-2 px-4">
                            <div className="flex  ">
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 relative  ">
                                  <Image
                                    fill={true}
                                    src={usr?.url || userProfile}
                                    alt="profile"
                                  />
                                </div>
                                <div>
                                  <p>{usr?.name}</p>
                                  <p>{usr?.email}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2 px-4">
                            <div className="flex justify-center">
                              <p>_{usr?.phoneNumber}</p>
                            </div>
                          </td>
                          <td className="py-2 px-4">
                            <div className="flex justify-center">
                              <p>{usr?.isAdmin ? "Admin" : "User"}</p>
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
                                <div className="px-3 rounded-lg py-1 bg-orange-200">
                                  <FaPencilAlt
                                    onClick={() => {
                                      setcurrentSelectedUser(usr);
                                      seteditOpen(true);
                                    }}
                                    size={22}
                                    className="hover:scale-110 cursor-pointer transition-all duration-200 text-orange-400           "
                                  />
                                </div>
                                <div className="px-3 rounded-lg py-1 bg-red-200">
                                  <MdDelete
                                    onClick={() => handleDelete(usr?._id)}
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
              <div className="w-full  flex justify-end">
                <div className="ml-auto flex ">
                  {[
                    ...Array(
                      Math.floor(totalUsers / 8) < totalUsers / 8
                        ? Math.floor(totalUsers / 8) + 1
                        : Math.floor(totalUsers / 8)
                    ).keys(),
                  ].map((i) => (
                    <p
                      onClick={() => {
                        setcurrentPage(i + 1);
                        getUsers(i + 1);
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
      </div>
    </>
  );
};

export default Users;
