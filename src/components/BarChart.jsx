import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Bar tension",
      data: [93, 43, 23, 53, 23, 23, 10],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "gold",
    },
    {
      label: "Bar Easing",
      data: [70, 60, 90, 80, 20, 10, 10],
      // { x: 73, y: 70 },
      // { x: 23, y: 60 },
      // { x: 13, y: 90 },
      // { x: 93, y: 80 },
      // { x: 63, y: 20 },
      // { x: 73, y: 10 },
      // { x: 50, y: 100 },
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "green",
    },
  ],
};

const config = {
  type: "bar",

  numberSteps: 2,
  data: data,
  options: {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    devicePixelRatio: 33,
    interaction: {
      mode: "nearest",
      intersect: true,
      includeInvisible: true,
    },
    onHover: () => {},
    animations: {
      onprogress: (animation) =>
        (ProgressEvent.value =
          animation.currentStep / animation / animation.numberSteps),
      tension: {
        duration: 1000,
        easing: "easeInSine",
        // easing: "easeInBack",
        from: 0,
        to: 1,
        loop: true,
      },
    },
    transitions: {
      active: {
        duration: 4000,
      },
      show: {
        visible: true,
        color: "red",
        properties: [
          {
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "green",
          },
        ],
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        // min: 4,
        max: 300,
      },
    },
  },
};

export function BarChart() {
  return (
    <div
      style={{
        position: "relative ",
        height: "auto",

        width: "35vw",
        alignContent: "center",
        display: "flex",
        paddingTop: "7rem",
      }}
    >
      <Bar config={config} data={data} />;
    </div>
  );
}

// import React from 'react';
// import { mockBarData as data1 } from "../DummyData/mockData";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart - Stacked',
//     },
//   },
//   responsive: true,
//   scales: {
//     x: {
//       stacked: true,
//     },
//     y: {
//       stacked: true,
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       // data:[...data1],
//       label: 'Dataset 1',
//       data: data1.map((faker) => `${faker.id}-${faker.burger}`),
//       backgroundColor: 'rgb(255, 99, 132)',
//     },
//     {
//       label: 'Dataset 2',
//       // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//     {
//       label: 'Dataset 3',
//       // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: 'rgb(53, 162, 235)',
//     },
//   ],
// };
