"use client";
import { Aref_Ruqaa } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import SideBar from "../Sidebar";
import Header from "../Header";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import moment from "moment";
import Edit_Coupon from "./Edit_Coupon";
import CreateCoupon from "./CreateCoupon";

const ared = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Coupons = () => {
  const [collapse, setcollapse] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [coupons, setcoupons] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalcoupons, settotalcoupons] = useState(1);
  const [createCouponOpen, setcreateCouponOpen] = useState(false);

  const [currentEditCoupon, setcurrentEditCoupon] = useState(null);

  const [editOpen, seteditOpen] = useState(false);

  const getCoupons = async (pageNumber) => {
    try {
      const res = await axios.post("/api/get-coupons-by-pageNumber", {
        pageNumber,
      });
      settotalcoupons(res?.data?.totalCoupons);
      setcoupons(res?.data?.coupons);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCoupons(1);
  }, []);

  const handleExport = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    const worksheet = XLSX.utils.json_to_sheet(coupons);

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
      {createCouponOpen && (
        <CreateCoupon setcreateCouponsOpen={setcreateCouponOpen} />
      )}
      {editOpen && (
        <Edit_Coupon
          coupon={currentEditCoupon}
          setcurrentEditCoupon={setcurrentEditCoupon}
          seteditOpen={seteditOpen}
        />
      )}

      <div className={`flex h-[100vh] overflow-hidden ${ared.className}`}>
        {/* Left sidebar */}
        <SideBar collapse={collapse} setcollapse={setcollapse} active={6} />

        <div className="h-full w-full bg-white">
          {/* Right header */}
          <Header collapse={collapse} setcollapse={setcollapse} />

          {/* Right main */}
          <div className="h-full pb-20 bg-no-repeat  bg-center bg-cover  overflow-y-scroll">
            {/* map all users list  */}

            <div className="flex justify-between items-center ">
              <h1 className=" text-lg m-3 600px:text-xl 800px:text-xl font-bold text-gray-600">
                Coupons
              </h1>
              <div
                onClick={() => setcreateCouponOpen(true)}
                className="flex justify-center items-center px-5 py-[5px] hover:bg-orange-400 cursor-pointer rounded-md   bg-orange-500 text-white font-semiboldn text-lg"
              >
                Create Coupon
              </div>
            </div>
            <div className="overflow-x-scroll p-2 max-w-[85vw]  overflow-visible w-full">
              <table className="w-full">
                <thead className="w-full">
                  <tr>
                    <th className="px-2">Coupons Id</th>
                    <th className="px-2">Created date</th>
                    <th className="px-2">Title</th>
                    <th className="px-2">Description </th>
                    <th className="px-2">Min-value</th>
                    <th className="px-2">Max-value</th>
                    <th className="px-2">Products</th>
                  </tr>
                </thead>
                <tbody className="w-full  ">
                  {coupons?.map((coupon, i) => {
                    return (
                      <tr
                        key={i}
                        // className=""
                        className="py-10"
                      >
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>#{coupon?._id}</p>
                          </div>
                        </td>
                        <td className="py-2 px-4 min-w-36">
                          <div className="flex justify-center">
                            <p>
                              {moment(new Date(coupon?.createdAt)).format(
                                "MMM Do YYYY"
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{coupon?.title}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{coupon?.description}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{coupon?.minValue || "COD"}</p>
                          </div>
                        </td>

                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{coupon?.maxValue}</p>
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex justify-center">
                            <p>{coupon?.productsId?.length}</p>
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
                                  onClick={() => {
                                    setcurrentEditCoupon(coupon);
                                    seteditOpen(true);
                                  }}
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
              <div className="ml-auto flex p-3 ">
                {[
                  ...Array(
                    totalcoupons / 8 > Math.floor(totalcoupons / 8)
                      ? Math.floor(totalcoupons / 8) + 1
                      : Math.floor(totalcoupons / 8)
                  ).keys(),
                ].map((i) => (
                  <p
                    onClick={() => {
                      setcurrentPage(i + 1);
                      getCoupons(i + 1);
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

export default Coupons;
