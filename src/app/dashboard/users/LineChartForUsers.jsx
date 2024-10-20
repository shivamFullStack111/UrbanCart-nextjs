"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartForUser = () => {
  const [responsiveYAxisWidth, setResponsiveYAxisWidth] = useState(30);
  const [chartData, setChartData] = useState([]);

  const { past6data } = useSelector((state) => state.admin);

  useEffect(() => {
    const generateLast6Months = () => {
      const months = [];
      const currentDate = new Date();

      for (let i = 5; i >= 0; i--) {
        const date = new Date();
        date.setMonth(currentDate.getMonth() - i);
        const monthName = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        months.push({ name: `${monthName} ${year}`, count: 0 }); // Initialize count to 0
      }
      return months;
    };

    const countProductsByMonth = (products) => {
      const last6Months = generateLast6Months();

      products.forEach((product) => {
        const productDate = new Date(product.createdAt);
        const monthName = productDate.toLocaleString("default", {
          month: "short",
        });
        const year = productDate.getFullYear();
        const monthYear = `${monthName} ${year}`;

        const monthData = last6Months.find((month) => month.name === monthYear);
        if (monthData) {
          monthData.count += 1; // Increment count for the respective month
        }
      });

      return last6Months;
    };

    if (past6data?.products_6) {
      const formattedData = countProductsByMonth(past6data.user_6);
      setChartData(formattedData);
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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          className="text-[10px] 800px:text-lg "
          width={responsiveYAxisWidth}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#fb923c"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartForUser;
