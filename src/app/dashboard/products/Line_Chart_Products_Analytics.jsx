"use client";

import React, { PureComponent, useEffect, useState } from "react";
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

const data = [
  {
    name: "Page A",
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 3,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 4,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 5,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 6,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 7,
    pv: 4300,
    amt: 2100,
  },
];

const Line_Chart_Products_Analytics = () => {
  const [responsiveYAxisWidth, setResponsiveYAxisWidth] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveYAxisWidth(window.innerWidth > 800 ? 20 : 30);
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
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width={responsiveYAxisWidth} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="amt"
          stroke="#fb923c"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Line_Chart_Products_Analytics;
