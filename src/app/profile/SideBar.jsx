import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PiCardsFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { dummyProduct } from "../utils";
import Link from "next/link";

const navigations = [
  {
    name: "Profile",
    icon: <PiCardsFill />,
    to: "/profile",
  },
  {
    name: "My Orders",
    icon: <PiCardsFill />,
    to: "/profile/my-orders",
  },
  {
    name: "Coupons",
    icon: <PiCardsFill />,
    to: "/profile/coupons",
  },
  {
    name: "Cancel Orders",
    icon: <PiCardsFill />,
    to: "/profile/cancel-orders",
  },
  {
    name: "Live Orders",
    icon: <PiCardsFill />,
    to: "/profile/live-orders",
  },
  {
    name: "Create Product",
    icon: <PiCardsFill />,
    to: "/profile/create-product",
  },
];

const SideBarOfProfile = ({ isSideBarOpen, setisSideBarOpen, page }) => {
  return (
    <>
      {/* mobile side bar in top headder button */}
      <div
        onClick={() => setisSideBarOpen((p) => !p)}
        className={` 800px:hidden ${
          isSideBarOpen ? "translate-y-2 bg-green-200" : "bg-white"
        }   cursor-pointer hover:translate-y-2 transition-all duration-150 mt-20 flex items-center p-4 justify-between`}
      >
        <p className="text-xl 500px:text-2xl  font-semibold ">Profile </p>
        <p>
          {isSideBarOpen ? (
            <RxCross1 className="text-gray-600" size={32} />
          ) : (
            <PiCardsFill className="text-gray-600" size={32} />
          )}
        </p>
      </div>

      {/* mobile side bar in top animated */}
      <motion.div
        initial={{ height: 0, paddingTop: 0 }}
        animate={{
          height: isSideBarOpen ? "70vh" : 0,
          paddingTop: isSideBarOpen ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
        className=" block  h-[70vh] overflow-hidden 800px:hidden w-full px-3 400px:px-10 600px:px-20   bg-green-200  "
      >
        {/* profile  */}
        <div className="flex mt-4 items-center bg-white py-2 px-2 rounded-xl gap-3">
          <div className=" relative  h-[70px] w-[70px] rounded-full">
            <Image className="rounded-full" fill={true} src={dummyProduct} />
          </div>
          <div>
            <p className="text-xl font-bold">John Doe</p>
            <p className=" text-gray-400 font-semibold">John Doe@gmail.com</p>
          </div>
        </div>

        <div className="gap-3 font-sans flex flex-col mt-8">
          {navigations.map((item, i) => (
            <Link
              href={item.to}
              key={i}
              className={`text-lg py-2 bg-white text-gray-700 hover:bg-yellow-200 cursor-pointer hover:translate-x-2 transition-all duration-150 rounded-xl px-2 font-semibold ${
                page === i + 1 && "bg-yellow-200 translate-x-2 "
              } `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/*desktop side bar  */}
      <div className="w-full 500px:w-[500px] hidden 800px:block pt-20  min-h-[80vh]  bg-green-200 p-4 ">
        {/* profile  */}
        <div className="flex items-center bg-white py-2 px-2 rounded-xl gap-3">
          <div className=" relative  h-[70px] w-[70px] rounded-full">
            <Image className="rounded-full" fill={true} src={dummyProduct} />
          </div>
          <div>
            <p className="text-xl font-bold">John Doe</p>
            <p className=" text-gray-400 font-semibold">John Doe@gmail.com</p>
          </div>
        </div>

        <div className="gap-3 font-sans flex flex-col mt-8">
          {navigations.map((item, i) => (
            <Link
              href={item.to}
              key={i}
              className={`text-lg py-2 bg-white text-gray-700 hover:bg-yellow-200 cursor-pointer hover:translate-x-2 transition-all duration-150 rounded-xl px-2 font-semibold ${
                page == i + 1 && "bg-yellow-200 translate-x-2 "
              } `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBarOfProfile;
