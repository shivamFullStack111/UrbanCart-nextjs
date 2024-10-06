"use client";
import React, { useState } from "react";
import SideBarOfProfile from "../SideBar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const LiveOrders = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  // Dummy array of orders
  const dummyOrders = [
    {
      id: "ORD123",
      total: 250.0,
      discount: 20.0,
      gst: 18.5,
      delivery: 15.0,
      orderDate: "2024-09-01",
      totalItems: 3,
      buyerName: "John Doe",
      status: "Shipped",
    },
    {
      id: "ORD456",
      total: 520.0,
      discount: 50.0,
      gst: 35.5,
      delivery: 25.0,
      orderDate: "2024-09-02",
      totalItems: 5,
      buyerName: "Jane Smith",
      status: "Delivered",
    },
  ];

  return (
    <>
      <Header />

      <div className="flex flex-col 800px:flex-row min-h-screen">
        <SideBarOfProfile
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          page={5}
        />
        {/* Profile Right */}
        <div className="w-full 800px:pt-4 p-6 flex justify-center bg-gray-100">
          {/* Profile Box */}
          <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Live Orders
            </h2>

            {/* Cards for each order */}
            <div className="space-y-6">
              {dummyOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col space-y-4"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">
                      Order ID: <b>{order.id}</b>
                    </span>
                    <span className="text-gray-600 text-sm">
                      Date:{" "}
                      <b>{new Date(order.orderDate).toLocaleDateString()}</b>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 800px:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700">
                        <b>Total Items:</b> {order.totalItems}
                      </p>
                      <p className="text-gray-700">
                        <b>Buyer Name:</b> {order.buyerName}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <b>Order Total:</b> ${order.total.toFixed(2)}
                      </p>
                      <p className="text-gray-700">
                        <b>Discount:</b> ${order.discount.toFixed(2)}
                      </p>
                      <p className="text-gray-700">
                        <b>GST:</b> ${order.gst.toFixed(2)}
                      </p>
                      <p className="text-gray-700">
                        <b>Delivery Fee:</b> ${order.delivery.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
                      onClick={() => handleTrack(order.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}

              {/* If no orders are available */}
              {dummyOrders.length === 0 && (
                <p className="text-gray-500 text-center">No orders found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Dummy handler function
const handleTrack = (orderId) => {
  alert(`Viewing details for order #${orderId}`);
};

export default LiveOrders;