import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Green Leaf", value: 20 },
  { name: "Yellow Leaf", value: 15 },
  { name: "Orange Leaf", value: 20 },
  { name: "Red Leaf", value: 25 },
  { name: "Light Orange Leaf", value: 10 },
  { name: "Purple Leaf", value: 10 },
  { name: "Pink Leaf", value: 10 },
];

const DonutChart = () => {
  const COLORS = [
    "#9cd48a",
    "#f9d284",
    "#fb9731",
    "#f15a5f",
    "#ffb462",
    "#6c61f1",
    "#a55af1",
  ];


  return (
    <>
      <div className="h-fit w-full relative z-10">
        
        <div className="w-full h-fit flex justify-center items-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={90}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default DonutChart;
