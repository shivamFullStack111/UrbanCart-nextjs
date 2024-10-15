"use client";
import React, { useState } from "react";
import {
  FaBuilding,
  FaCity,
  FaMap,
  FaPhone,
  FaRegAddressCard,
} from "react-icons/fa6";
import { Country, State } from "country-state-city";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const Address = ({ addressOpen, setaddressOpen }) => {
  const [address, setaddress] = useState({
    addressType: "home",
  });
  const { user } = useSelector((state) => state.user);

  const handleSaveAddress = async () => {
    try {
      const {
        name,
        phoneNumber,
        appartment,
        addressType,
        country,
        state,
        pincode,
      } = address;
      if (
        !name ||
        !phoneNumber ||
        !appartment ||
        !addressType ||
        !country ||
        !state ||
        !pincode
      ) {
        toast.error("please fill all field");
        return;
      }
      const res = await axios.post("/api/save-address", { user, address });

      if (res.data?.success) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Toaster />
      {addressOpen && (
        <div className="w-full h-full bg-[#0006] fixed z-50 flex justify-center items-center">
          <div className=" w-full h-full  justify-center  650px:h-[95vh] 650px:w-[600px]  relative p-2  rounded-xl  flex flex-col items-center">
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{
                width: addressOpen ? "100%" : 0,
                height: addressOpen ? "100%" : 0,
              }}
              className=" w-full h-full  justify-center  650px:h-[95vh] 650px:w-[600px] overflow-y-scroll relative p-2 bg-white rounded-xl  flex flex-col items-center"
            >
              <h3 className="text-xl font-bold text-gray-700">
                Add your address
              </h3>
              <RxCross1
                onClick={() => {
                  setaddressOpen(false);
                }}
                size={28}
                className="absolute cursor-pointer top-3 right-3"
              />

              <div className="w-[90%] flex flex-col gap-3 mt-8 ">
                {/* name  */}
                <div>
                  <p className=" font-semibold">Name:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center gap-2 px-2  h-10">
                    <FaRegAddressCard size={28} className="text-gray-500" />
                    <input
                      onChange={(e) =>
                        setaddress((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Enter address"
                      type="text"
                      className="w-[90%] h-full outline-none  bg-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <p className=" font-semibold">Phone number:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center gap-2 px-2  h-10">
                    <FaPhone size={23} className="text-gray-500" />
                    <input
                      onChange={(e) =>
                        setaddress((p) => ({
                          ...p,
                          phoneNumber: e.target.value,
                        }))
                      }
                      placeholder="Enter phone number"
                      type="text"
                      className="w-[90%] h-full outline-none  bg-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">Appartment,suite,etc:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center gap-2 px-2  h-10">
                    <FaBuilding size={25} className="text-gray-500" />
                    <input
                      onChange={(e) =>
                        setaddress((p) => ({
                          ...p,
                          appartment: e.target.value,
                        }))
                      }
                      placeholder="Enter appartment"
                      type="text"
                      className="w-[90%] h-full outline-none  bg-gray-100"
                    />
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">Country:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center relative gap-2 px-2  h-10">
                    <FaMap size={25} className="text-gray-500" />
                    <select
                      onChange={(e) =>
                        setaddress((p) => ({ ...p, country: e.target.value }))
                      }
                      className="outline-none w-full h-full bg-gray-100"
                    >
                      {Country?.getAllCountries().map((country, i) => (
                        <option value={country?.isoCode} key={i}>
                          {country?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <p className=" font-semibold">City:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center relative gap-2 px-2  h-10">
                    <FaCity size={25} className="text-gray-500" />
                    <select
                      onChange={(e) =>
                        setaddress((p) => ({ ...p, state: e.target.value }))
                      }
                      className="outline-none w-full h-full bg-gray-100"
                    >
                      {State?.getStatesOfCountry(address?.country)?.map(
                        (country, i) => (
                          <option value={country?.isoCode} key={i}>
                            {country?.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* pincode  */}
                <div>
                  <p className=" font-semibold">Pincode:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center gap-2 px-2  h-10">
                    <TbBrandGoogleMaps size={23} className="text-gray-500" />
                    <input
                      onChange={(e) =>
                        setaddress((p) => ({ ...p, pincode: e.target.value }))
                      }
                      placeholder="Enter pincode"
                      type="text"
                      className="w-[90%] h-full outline-none  bg-gray-100"
                    />
                  </div>
                </div>

                {/* type  */}
                <div>
                  <p className=" font-semibold">Address type:</p>
                  <div className=" flex bg-gray-100 rounded-md items-center relative gap-2 px-2  h-10">
                    <GiDeliveryDrone size={25} className="text-gray-500" />
                    <select
                      onChange={(e) =>
                        setaddress((p) => ({
                          ...p,
                          addressType: e.target.value,
                        }))
                      }
                      className="outline-none w-full h-full bg-gray-100"
                    >
                      <option value={"home"}>Home </option>
                      <option value={"work"}>Work </option>
                      <option value={"office"}>Office </option>
                      <option value={"shop"}>Shop </option>
                    </select>
                  </div>
                  <div
                    onClick={handleSaveAddress}
                    className="w-full h-10 rounded-md cursor-pointer mt-6 flex justify-center gap-2 items-center bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg"
                  >
                    <p> Save Address</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Address;
