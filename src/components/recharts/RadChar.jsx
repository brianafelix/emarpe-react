import React from "react";

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const pdata = [
  {
    name: "Investimento",
    student: 13,
    fees: 10,
  },
  {
    name: "Dispesas",
    student: 15,
    fees: 12,
  },
  {
    name: "Fluxo de caixa ",
    student: 14,
    fees: 10,
  },
  {
    name: "Volume de negocio",
    student: 5,
    fees: 10,
  },
  {
    name: "financiamento",
    student: 10,
    fees: 5,
  },
  {
    name: "Liquedez",
    student: 10,
    fees: 8,
  },
];

const RadChar = () => {
  return (
    <div>
      <h1 className="chart-heading"></h1>
      <ResponsiveContainer width="60%" aspect={3}>
        <BarChart
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
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RadChar;
