import React from "react";
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

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Example = () => {
  const responsiveYAxisWidth = window.innerWidth > 800 ? 20 : 30;
  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis className="text-gray-500 text-[12px] " dataKey="name" />
        <YAxis
          width={responsiveYAxisWidth}
          className="text-gray-500 text-[12px]"
        />
        <Tooltip />
        <Bar dataKey="uv" fill="#fb923c">
          <LabelList dataKey="uv" position="top" className=" text-[12px]" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
