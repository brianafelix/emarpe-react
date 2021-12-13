import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
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

const LineCh = () => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
          <h1 className="chart-heading"> </h1>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
              data={pdata}
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 300,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                interval={"preserveStartEnd"}
                tickFormatter={(Value) => Value + "Programming"}
              />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
              <Legend />
              <Line
                type="monotone"
                dataKey="student"
                stroke="red"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="fees"
                stroke="green"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default LineCh;
