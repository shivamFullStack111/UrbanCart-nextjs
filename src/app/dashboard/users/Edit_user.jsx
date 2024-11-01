import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { allStatus } from "@/app/utils";
import axios from "axios";
import { BiRightArrow, BiSolidRightArrowAlt } from "react-icons/bi";
import { PiArrowRight } from "react-icons/pi";

const Edit_user = ({
  seteditOpen,
  user,
  setcurrentSelectedUser,
  alluser,
  setalluser,
}) => {
  const [optionOpen, setoptionOpen] = useState(false);

  const updateUser = async () => {
    try {
      const res = await axios.post("/api/update-user", { user });

      if (res?.data?.success) {
        toast.success(res.data.message);

        const updatedUsers = alluser.map((usrr) => {
          if (usrr?.email == user?.email) {
            if (user.isAdmin) {
              return { ...usrr, isAdmin: true };
            } else {
              return { ...usrr, isAdmin: false };
            }
          } else {
            return usrr;
          }
        });

        setalluser(updatedUsers);

        setTimeout(() => {
          seteditOpen(false);
        }, 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Toaster />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0  left-0 overflow-y-scroll  w-full h-full bg-[#0004] z-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-[95%] border-2   min-h-[30vh] border-violet-500 max-h-[100vh] max-w-lg  p-5 bg-white rounded-lg overflow-y-scroll hide-scrollbar"
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Change Role</p>
            <RxCross1
              onClick={() => seteditOpen(false)}
              className="text-3xl hover:scale-110 cursor-pointer hover:text-red-400 ml-auto"
            />
          </div>
          <div className="mt-4 relative">
            <div
              onClick={() => setoptionOpen((p) => !p)}
              className="flex hover:bg-violet-100 cursor-pointer  w-full relative p-2 text-lg border-2 rounded-lg border-violet-500 items-center font-semibold justify-between"
            >
              <p>{user?.isAdmin ? "Admin" : "User"}</p>
              <PiArrowRight />
            </div>
            {optionOpen && (
              <div className="absolute  bg-white w-full border-2 -bottom-20 left-0 border-gray-300 rounded-lg">
                <p
                  onClick={() => {
                    setcurrentSelectedUser((prev) => ({
                      ...prev,
                      isAdmin: true,
                    }));
                    setoptionOpen(false);
                  }}
                  className="font-semibold p-1 border-b-2  cursor-pointer hover:bg-violet-100"
                >
                  Admin
                </p>
                <p
                  onClick={() => {
                    setcurrentSelectedUser((prev) => ({
                      ...prev,
                      isAdmin: false,
                    }));
                    setoptionOpen(false);
                  }}
                  className="font-semibold p-1  cursor-pointer hover:bg-violet-100"
                >
                  User
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => updateUser()}
            className="flex rounded-md hover:bg-violet-400 mt-6 justify-center items-center py-2 bg-violet-500 cursor-pointer text-white font-semibold"
          >
            Update
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Edit_user;
