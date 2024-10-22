"use client";

import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { dummyProduct } from "../utils";
import Image from "next/image";

const Header = ({ collapse, setcollapse }) => {
  const [user, setuser] = useState();
  const [settingOpen, setsettingOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          collapse ? "h-16" : "h-24"
        } w-full flex items-center justify-between px-4 bg-slate-800`}
      >
        {/* left header  */}
        <IoReorderThreeOutline
          onClick={() => {
            if (window.innerWidth < 1000) return;
            setcollapse((p) => !p);
          }}
          size={40}
          className="text-white hover:scale-105 cursor-pointer"
        />
        {/* right header part  */}
        <div className="flex gap-3  items-center  duration-300 ">
          <div className="relative">
            <FaBell
              size={24}
              className="text-white hover:scale-105 cursor-pointer"
            />
            <p className="w-5 h-5 rounded-full flex justify-center items-center bg-orange-400 text-white absolute -top-2 -right-2">
              <p>3</p>
            </p>
          </div>
          <div className="relative group ">
            {settingOpen ? (
              <RxCrossCircled
                onClick={() => setsettingOpen((p) => !p)}
                size={28}
                className="text-white"
              />
            ) : (
              <IoMdSettings
                onClick={() => setsettingOpen((p) => !p)}
                size={28}
                className="text-white"
              />
            )}

            {settingOpen && (
              <div className="absolute flex z-50  bg-white p-2 rounded-md h-32 w-56 -bottom-40 shadow-xl border-[0.2px] right-0">
                <div className="flex gap-3 ">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    {" "}
                    <Image src={dummyProduct} fill={true} alt="profile" />
                  </div>
                  <div className="">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="font-semibold - text-sm text-gray-500">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="w-full h-ful relative  flex justify-end items-end">
                  <div>
                    <MdLogout
                      size={26}
                      className="text-gray-700 group mt-auto ml-auto cursor-pointer"
                    />
                    <p className="hidden w-20 absolute font-semibold group-hover:block -right-7 -bottom-10">
                      Log Out
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
