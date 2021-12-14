import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const pdata = [
  {
    name: "Investimento",
    student: 13,
    fees: 10,
  },
  {
    name: "volume  de negocio",
    student: 15,
    fees: 12,
  },
  {
    name: "Fluxo de caixa ",
    student: 14,
    fees: 10,
  },
  {
    name: "Investimento",
    student: 5,
    fees: 10,
  },
  {
    name: "volume de negocio",
    student: 10,
    fees: 5,
  },
  {
    name: "Fluxo de caixa",
    student: 10,
    fees: 8,
  },
];

const AreChart = () => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
      <AreaChart
        width={500}
        height={300}
        data={pdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="student"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreChart;
