"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { dummyProduct, dummyProducts } from "../utils";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { FaBagShopping } from "react-icons/fa6";
import { removeItemFromCart } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";
import Address from "./Address";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [totalPrice, settotalPrice] = useState("");
  const router = useRouter();
  const [addressOpen, setaddressOpen] = useState(false);

  useEffect(() => {
    if (cart?.length) {
      const total = cart.reduce((total, a) => total + a?.sellingPrice, 0);
      settotalPrice(total);
    }
  }, [cart]);

  const handleNextStep = () => {
    let order = {
      cart,
      discount: totalPrice * 0.03,
      delivery: 0,
      itemsTotalPrice: totalPrice,
      subTotal: totalPrice + totalPrice * 0.07,
      user,
    };
    localStorage.setItem("latestOrder_urbancart", JSON.stringify(order));

    setaddressOpen(true);
  };
  return (
    <>
      <Address addressOpen={addressOpen} setaddressOpen={setaddressOpen} />
      <Header />
      <div className="h-full w-full flex flex-col 950px:flex-row  mt-14 gap-3  items-center  ">
        <div className="w-full 700px:w-[80%]  1400px:w-[60%] flex justify-center">
          <div className="w-full   1400px:w-[70%]  px-3">
            <p className="p-6 text-xl 800px:text-3xl font-semibold">
              My bag has ({cart?.length}) items
            </p>
            <p className="bg-yellow-200 mx-3 flex font-semibold justify-center items-center py-2 rounded-lg">
              Yay! you have free delivery
            </p>

            {cart?.length > 0 ? (
              <div>
                {" "}
                {cart?.map((item, i) => (
                  <div
                    key={i}
                    className={
                      "h-44 800px:h-52 1400px:h-62 gap-3  w-full flex hap-3 mt-9  rounded-xl shadow-xl relative"
                    }
                  >
                    <RxCross1
                      onClick={() => dispatch(removeItemFromCart(item?._id))}
                      className=" text-lg 800px:text-3xl right-5 top-5 absolute hover:text-red-500 cursor-pointer"
                    />
                    <div className="w-[150px] h-full relative">
                      <Image alt="product" fill={true} src={item?.images[0]} />
                    </div>
                    <div
                      className={"flex flex-col mt-3 800px:mt-6   800px:gap-1"}
                    >
                      <p className="text-yellow-400 font-semibold 800px:text-lg">
                        {item?.brand}
                      </p>
                      <p className="text-gray-700 font-bold text-sm 800px:text-lg 1000px:text-xl">
                        {item?.title}
                      </p>
                      <p className="text-gray-500 font-semibold text-[16px] 800px:text-lg">
                        FREE SHIPPING
                      </p>
                      <div className={"flex gap-4 "}>
                        <p className="text-gray-600  font-semibold text-lg 800px:text-xl">
                          ${item?.sellingPrice}
                        </p>
                        <p className="text-gray-400 line-through font-semibold  800px:text-2xl">
                          ${item?.mrpPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[500px] w-full flex justify-center items-center">
                <div className="flex text-lg 800px:text-xl 1000px:text-2xl 1200px:text-3xl font-semibold  flex-col items-center py-6 px-10 800px:py-10 800px:px-16 rounded-xl  shadow-2xl">
                  {" "}
                  <FaBagShopping />
                  <p>Cart has (0) items</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {cart?.length > 0 && (
          <div className="w-full 800px:w-[40%] mt-6 800px:mt-20 flex flex-col items-center  gap-3">
            <div className="p-3 shadow-lg rounded-lg w-[90%] 1400px:w-[80%]">
              <p className="font-semibold test-gray-600 ">Coupons & Offers</p>
              <div className="flex gap-2 items-center">
                <Image
                  width={30}
                  height={30}
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
                <div className={"mt-3"}>
                  <p className="text-lg font-serif ">
                    {" "}
                    Apply Coupon / Gift Card
                  </p>
                  <p className=" font-serif text-gray-500 ">
                    {" "}
                    Crazy deals and other amazing offers
                  </p>
                </div>

                <p className={"text-blue-400 underline text-lg ml-auto "}>
                  view
                </p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg p-3  w-[90%]  1400px:w-[80%]">
              <p
                className={
                  "text-lg font-serif tracking-widest mb-4 font-semibold text-black"
                }
              >
                Payment details
              </p>

              <div className="justify-between flex ">
                <p className={"text-xl font-semibold text-gray-600"}>
                  Total MRP (Incl. of taxes)
                </p>
                <p className={" font-semibold text-gray-500 text-lg"}>
                  ${totalPrice + totalPrice * 0.1}
                </p>
              </div>
              <div className="justify-between flex mt-2 ">
                <p className={"text-xl font-semibold text-gray-600"}>
                  Total items
                </p>
                <p className={" font-semibold text-gray-500 text-lg"}>
                  {cart?.length}
                </p>
              </div>
              <div className="justify-between flex mt-2">
                <p className={"text-xl font-semibold text-gray-600"}>
                  Discount
                </p>
                <p className={" font-semibold text-green-500 text-lg"}>
                  -${totalPrice * 0.03}
                </p>
              </div>
              <div className="justify-between flex mt-2">
                <p className={"text-xl font-semibold text-green-500"}>
                  Delivery
                </p>
                <p className={" font-semibold text-green-500 text-lg"}>FREE</p>
              </div>

              <p className="w-full h-1 border-b-2 border-dashed  border-gray-400 my-4"></p>

              <div className="justify-between flex mt-2">
                <p className={"text-2xl font-bold text-black"}>Subtotal</p>
                <p className={" font-semibold text-gray-700 text-xl"}>
                  {totalPrice + totalPrice * 0.07}
                </p>
              </div>

              <p className="bg-green-200 my-3 flex font-semibold justify-center items-center py-2 rounded-lg">
                You are saving a total of {totalPrice * 0.03} on this order
              </p>
              {/* ₹ */}
              <p
                onClick={handleNextStep}
                className="bg-violet-400 cursor-pointer my-3 flex font-bold text-white text-xl justify-center items-center py-3 rounded-xl"
              >
                Procced
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
