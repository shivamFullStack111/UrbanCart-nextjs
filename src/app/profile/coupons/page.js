"use client";
import React, { useEffect, useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { RxCross1, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { dummyProduct } from "@/app/utils";
import { CiDiscount1 } from "react-icons/ci";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { isNextUIEl } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

const Coupons = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [createCouponsOpen, setcreateCouponsOpen] = useState(false);

  // Dummy coupons data
  const dummyCoupons = [
    {
      id: 1,
      title: "20% Off Your Next Purchase",
      code: "SAVE20",
      expiryDate: "2024-12-31",
      description: "Get 20% off on your next order over $100.",
    },
    {
      id: 2,
      title: "Free Shipping",
      code: "FREESHIP",
      expiryDate: "2024-11-30",
      description: "Enjoy free shipping on orders over $50.",
    },
  ];

  return (
    <>
      <Header />
      {createCouponsOpen && (
        <CreateCoupon setcreateCouponsOpen={setcreateCouponsOpen} />
      )}

      <div className="flex flex-col 800px:flex-row">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={3}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 p-3 flex justify-center">
          {/* Coupons Box */}
          <div className="grid grid-cols-1 gap-4 max-w-4xl w-full 800px:h-[400px]">
            <div className="w-full flex justify-end mt-2 800px:mt-4">
              <p
                onClick={() => setcreateCouponsOpen(true)}
                className="flex gap-2 py-1 px-3 cursor-pointer  100px:px-4 rounded-md  items-center text-white font-semibold text-lg bg-blue-500 hover:bg-blue-400"
              >
                <BsPlusCircle />
                <p>Create coupon</p>
              </p>
            </div>
            {dummyCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-4  overflow-hidden"
              >
                <div className="absolute left-0 right-0 top-0 h-4 bg-white rounded-tl-lg rounded-tr-lg"></div>
                <div className="absolute left-0 right-0 bottom-0 h-4 bg-white rounded-bl-lg rounded-br-lg"></div>

                <h3 className="text-lg font-bold">{coupon.title}</h3>
                <p className="mt-2 text-sm">{coupon.description}</p>
                <p className="mt-4 font-semibold">
                  Use Code:{" "}
                  <span className="bg-white text-blue-600 px-2 py-1 rounded">
                    {coupon.code}
                  </span>
                </p>
                <p className="mt-2 text-xs">
                  Expires on: {new Date(coupon.expiryDate).toLocaleDateString()}
                </p>
              </div>
            ))}
            {/* If no coupons are available */}
            {dummyCoupons.length === 0 && (
              <p className="text-gray-500 text-center">No coupons available.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Coupons;

const CreateCoupon = ({ setcreateCouponsOpen }) => {
  const [active, setactive] = useState(0);
  const [productsId, setproductsId] = useState([]);
  const [value, setvalue] = useState("");
  const [products, setproducts] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [data, setdata] = useState({});

  const getProducts = async () => {
    try {
      const res = await axios.post("/api/get-products-by-search", {
        value,
        pageNumber,
      });
      if (res?.data?.success) {
        setproducts(res?.data?.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (value?.length === 0) {
      setproducts([]);
      return;
    }
    const time = setTimeout(() => {
      getProducts();
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [value, pageNumber]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/create-coupon", {
        data: { ...data, productsId: productsId },
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setcreateCouponsOpen(false);
      } else {
        toast.error(res.data?.message);
      }

      console.log(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50 bg-[#0005] flex justify-center items-center ">
      <Toaster />
      <div className="bg-white overflow-y-scroll max-h-[100vh] 800px:max-h-[90vh] relative rounded-lg p-2 800px:p-4 w-[95%] 600px:w-[580px]  ">
        <p className="text-xl 1000px:text-2xl font-semibold 800px:text-bold text-gray-600">
          Create Coupon
        </p>

        <RxCross1
          onClick={() => setcreateCouponsOpen(false)}
          className="absolute top-2 text-2xl hover:scale-110 hover:text-red-500 cursor-pointer right-2 "
        />
        {/* search product  */}
        <div
          className={`flex border-2  ${
            active === 1 ? "border-blue-500" : "border-gray-400"
          }  mt-2 items-center gap-2 bg-gray-200 rounded-md p-2`}
        >
          <BsSearch className="text-gray-600" size={25} />
          <input
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            onFocus={() => setactive(1)}
            onBlur={() => setactive(0)}
            type="text"
            className="w-full h-full bg-gray-200 outline-none"
            placeholder="Search product"
          ></input>
          <RxCross2
            onClick={() => setvalue("")}
            className="text-2xl cursor-pointer text-gray-600 hover:scale-110 "
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-3 text-lg items-center font-semibold">
            <p className="rounded-full px-2 text-white bg-yellow-400">
              {" "}
              {productsId?.length}
            </p>
            <p>Porducts selected</p>
          </div>
          {products?.map((item, i) => (
            <div
              onClick={() => {
                const isExist = productsId?.find((id) => id === item?._id);
                if (!isExist) {
                  setproductsId((p) => [...p, item?._id]);
                }
              }}
              key={i}
              className="rounded-md hover:bg-yellow-200 cursor-pointer p-1 overflow-hidden border flex gap-3"
            >
              <div className="relative w-[60px]  h-[70px]">
                <Image src={item?.images[0]} fill={true} />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-yellow-400">
                  {item?.title}
                </p>
                <p className="font-semibold text-gray-400">${item?.price}</p>
                <p className="text-sm text-gray-400">
                  {item?.description?.slice(0, 15)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="  ">
          <p className="font-semibold mt-4 text-gray-500">Title:</p>
          <input
            onChange={(e) => setdata((p) => ({ ...p, title: e.target.value }))}
            type="text"
            placeholder="Enter title"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <p className="font-semibold mt-2 text-gray-500">Description:</p>
          <textarea
            onChange={(e) =>
              setdata((p) => ({ ...p, description: e.target.value }))
            }
            rows={4}
            // placeholder="Enter description"
            className=" rounded-md p-2 outline-none w-full bg-gray-100 border-2 focus:border-yellow-300 "
          ></textarea>

          <p className="font-semibold mt-2 text-gray-500">Discount percent:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, discount: e.target.value }))
            }
            type="number"
            placeholder="Enter discounnt percentage"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Minimum price:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, minValue: e.target.value }))
            }
            type="number"
            placeholder="Enter minimum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />
          <p className="font-semibold mt-2 text-gray-500">Maximum price:</p>
          <input
            onChange={(e) =>
              setdata((p) => ({ ...p, maxValue: e.target.value }))
            }
            type="number"
            placeholder="Enter maximum price of product applicable"
            className=" rounded-md p-2 outline-none h-10 w-full bg-gray-100 border-2 focus:border-yellow-300 "
          />

          <div
            onClick={handleSubmit}
            className="bg-yellow-400 gap-2 hover:bg-yellow-300 text-white rounded-md font-semibold text-xl flex justify-center items-center mt-4 py-2"
          >
            <CiDiscount1 size={25} /> Create
          </div>
        </div>
      </div>
    </div>
  );
};
