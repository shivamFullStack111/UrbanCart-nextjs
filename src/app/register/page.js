"use client";
import React from "react";

import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    seterror("");
    const { name, email, phoneNumber, password } = data;
    if (!name || !email || !phoneNumber || !password) {
      return seterror("Please fill all the fields");
    }

    try {
      const res = await axios.post("/api/register", data);
      console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        toast.success(res.data.message);
        dispatch(setUser(res.data?.user));
        localStorage.setItem("token_urbancart", res.data?.token);
        router.push("/");
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
      <div
        className={
          "flex justify-center items-center bg-gradient-to-r  from-blue-400 to-blue-700 w-full min-h-[100vh]"
        }
      >
        <div
          className={
            " h-full bg-white py-10 rounded-xl w-[90%] 450px:w-[400px]    flex flex-col items-center "
          }
        >
          <p className="text-lg font-bold text-gray-600 ">Create an account</p>
          <p className="font-semibold text-gray-500 text-[14px]">
            Create an account so you can be our member
          </p>
          <div className="w-[90%] flex flex-col items-center gap-3 mt-6">
            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Name</p>
              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <FaUser className="text-gray-500 text-lg " />
                <input
                  onChange={(e) =>
                    setdata((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  type="text"
                  placeholder="enter your name"
                  className={"w-full h-full bg-gray-100 outline-none"}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Email</p>

              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <IoMail className="text-gray-500 text-lg " />
                <input
                  onChange={(e) =>
                    setdata((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="enter your email"
                  required
                  type="email"
                  className={"w-full h-full bg-gray-100 outline-none"}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Phone number</p>

              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <FaPhoneAlt className="text-gray-500 text-lg " />
                <input
                  value={data.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Check if the length is less than or equal to 10 and only digits are allowed
                    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
                      setdata((prevData) => ({
                        ...prevData,
                        phoneNumber: value,
                      }));
                    }
                  }}
                  placeholder="Enter your phone number"
                  required
                  type="text" // Change to text to avoid showing the number input spinner
                  className="w-full inputremove h-full bg-gray-100 outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Password</p>

              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <TbPasswordFingerprint className="text-gray-500 text-lg " />
                <input
                  onChange={(e) =>
                    setdata((p) => ({ ...data, password: e.target.value }))
                  }
                  placeholder="enter your password"
                  maxLength={10}
                  required
                  type="password"
                  className={"w-full h-full  bg-gray-100 outline-none"}
                />
              </div>
              {error && (
                <p className="font-semibold text-red-400 test-sm mt-1">
                  {error}
                </p>
              )}
            </div>

            <div
              onClick={handleSubmit}
              className="flex font-semibold justify-center items-center mt-3 transition-all duration-200 hover:translate-y-2 hover:scale-105  cursor-pointer text-lg bg-gradient-to-r  from-blue-400 to-blue-700  text-white py-2 w-full rounded-lg "
            >
              Register
            </div>
            <div className="flex gap-1 text-gray-500 font-semibold ">
              <p>Already have an account? </p>
              <Link href={"/login"} className="cursor-pointer text-blue-400">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
