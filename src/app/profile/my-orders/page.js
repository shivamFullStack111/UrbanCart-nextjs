"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { dummyProducts } from "@/app/utils";

const MyOrders = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="flex flex-col 800px:flex-row min-h-screen">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={2}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 p-6 flex justify-center bg-gray-100">
          {/* Profile Box */}
          <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              My Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dummyProducts.map((order) => (
                    <tr key={order?.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        #{order?.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(order?.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        ${order?.total?.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order?.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order?.status === "Shipped"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order?.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <button
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onClick={() => handleTrack(order?.id)}
                        >
                          Track
                        </button>
                        <button
                          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                          onClick={() => handleCancel(order?.id)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                  {dummyProducts.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                      >
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Dummy handler functions
const handleTrack = (orderId) => {
  // Implement track functionality here
  alert(`Tracking order #${orderId}`);
};

const handleCancel = (orderId) => {
  // Implement cancel functionality here
  alert(`Canceling order #${orderId}`);
};

export default MyOrders;
