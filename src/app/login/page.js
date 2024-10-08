import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
const Login = () => {
  return (
    <>
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
          <p className="text-lg font-bold text-gray-600 ">Login to account</p>
          <p className="font-semibold text-[14px] text-gray-500">
            Enter your credential to access your account
          </p>
          <div className="w-[90%] flex flex-col items-center gap-3 mt-6">
            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Email</p>

              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <IoMail className="text-gray-500 text-lg " />
                <input
                  placeholder="enter your email"
                  required
                  type="email"
                  className={"w-full h-full bg-gray-100 outline-none"}
                />
              </div>
            </div>

            <div className="w-full">
              <p className="font-semibold text-gray-600 ">Password</p>

              <div className="flex items-center w-full gap-2 border bg-gray-100 border-gray-300 p-2 rounded-lg ">
                <TbPasswordFingerprint className="text-gray-500 text-lg " />
                <input
                  placeholder="enter your password"
                  maxLength={10}
                  required
                  type="password"
                  className={"w-full h-full  bg-gray-100 outline-none"}
                />
              </div>
            </div>
            {error && (
              <p className="font-semibold text-red-400 test-sm mt-1">{error}</p>
            )}

            <div className="flex font-semibold justify-center items-center mt-3 transition-all duration-200 hover:translate-y-2 hover:scale-105  cursor-pointer text-lg bg-gradient-to-r  from-blue-400 to-blue-700  text-white py-2 w-full rounded-lg ">
              Login
            </div>

            <div className="flex gap-1 text-gray-500 font-semibold ">
              <p>Not have an account? </p>
              <p className="cursor-pointer text-blue-400">Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
