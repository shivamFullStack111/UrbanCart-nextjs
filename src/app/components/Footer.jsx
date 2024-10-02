import React from "react";
import { Jersey_25 } from "next/font/google";

const jesy = Jersey_25({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  display: "swap",
});

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-3 py-7">
        <div className={jesy.className}>
          <p className={"text-[50px] text-teal-500"}>Urabn Cart </p>
        </div>
        <div className="flex flex-col 850px:flex-row  max-850px:gap-10 ">
          <div className="w-[33vw] ">
            <h3 className={"text-teal-500 text-lg font-bold"}>
              CUSTOMER SERVICES
            </h3>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Contact us
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Cancel Order
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Return Order
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Track Order
            </p>
            <p className="font-semibold text-red-400 hover:text-gray-400 mt-2 cursor-pointer ">
              7 Day's return policy
            </p>
            <p className="font-semibold text-red-400 hover:text-gray-400 mt-2 cursor-pointer ">
              Cash on Delivery
            </p>
          </div>
          <div className="w-[33vw] ">
            <h3 className={"text-teal-500 text-lg font-bold"}>COMPANY</h3>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              About us
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Term & Conditions
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Privacy Policy
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Register Complaint
            </p>
          </div>
          <div className="w-[33vw] ">
            <h3 className={"text-teal-500 text-lg font-bold"}>SOCIAL MEDIA</h3>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Instagram
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Facebook
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Snapchat
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Twitter
            </p>
            <p className="font-semibold hover:text-gray-400 mt-2 cursor-pointer">
              Linked in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
