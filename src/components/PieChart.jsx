import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { mockPieData as dataPie } from "../DummyData/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],

  options: {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },

  datasets: [
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(45, 192, 192, 1)",
        "rgba(153, 102, 100, 1)",
        "rgba(155, 159, 64, 1)",
      ],
      borderWidth: 10,
    },
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(45, 192, 192, 1)",
        "rgba(153, 102, 100, 1)",
        "rgba(155, 159, 64, 1)",
      ],
      borderWidth: 10,
    },
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(255,215,0, 1)",
      ],
      borderWidth: 10,
    },
  ],
};

export function PieChart() {
  return (
    <div
      class="chart-container"
      style={{
        // display:"flex",
        position: "absolute",
        objectFit:"contain",
        width:"40vw"
        // top:"-4.9rem"
      }}
    >
      <Doughnut data={data} id={data.id} value={data.value} />
    </div>
  );
}
