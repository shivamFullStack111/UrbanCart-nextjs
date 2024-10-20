"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

const Example = () => {
  const [responsiveYAxisWidth, setResponsiveYAxisWidth] = useState(30);
  const [data, setData] = useState([]);

  // Access past6data from Redux
  const { past6data } = useSelector((state) => state.admin);

  // Prepare the data for the chart
  useEffect(() => {
    const generatePast6Months = () => {
      const months = [];
      const currentDate = new Date();
      for (let i = 5; i >= 0; i--) {
        const date = new Date();
        date.setMonth(currentDate.getMonth() - i);
        const monthName = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        months.push({ name: `${monthName} ${year}`, subTotal: 0 });
      }
      return months;
    };

    const calculateSubTotalByMonth = (orders) => {
      const past6Months = generatePast6Months();

      orders.forEach((order) => {
        const orderDate = new Date(order.createdAt);
        const monthName = orderDate.toLocaleString("default", {
          month: "short",
        });
        const year = orderDate.getFullYear();
        const monthYear = `${monthName} ${year}`;

        const monthData = past6Months.find((month) => month.name === monthYear);
        if (monthData) {
          const orderSubTotal = parseFloat(order.subTotal) || 0; // Ensure subTotal is a valid number
          monthData.subTotal += orderSubTotal;
        }
      });

      return past6Months;
    };

    if (past6data?.orders_6) {
      const formattedData = calculateSubTotalByMonth(past6data.orders_6);
      setData(formattedData);
    }
  }, [past6data]);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveYAxisWidth(window.innerWidth > 800 ? 60 : 30);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart data={data || []}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="text-gray-500 text-[12px]" dataKey="name" />
        <YAxis
          width={responsiveYAxisWidth}
          className="text-gray-500 text-[10px] 800px:text-lg"
        />
        <Tooltip />
        <Bar dataKey="subTotal" fill="#fb923c">
          <LabelList
            dataKey="subTotal"
            position="top"
            className="text-[12px]"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
