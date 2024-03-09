import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { mockLineData as DataLine } from "../DummyData/mockData";
import token from '../theme'
import { useTheme } from "@mui/material";






Chart.register();

const data = {
  labels: [
    "bus",
    "plane",
    "helicopter",
    "boat",
    "train",
    "subway",
    "bus",
    "car",
    "moto",
    "bicycle",
    "horse",
    "skateboard",
    "others",
  ],
  datasets: [
    {
      label: "Looping tension",
      data: [
        {
          x: 30,
          y: 175,
        },
        {
          x: 40,
          y: 212,
        },
        {
          x: 50,
          y: 190,
        },
        {
          x: 60,
          y: 270,
        },
        {
          x: 70,
          y: 9,
        },
        {
          x: 60,
          y: 75,
        },
        {
          x: 90,
          y: 175,
        },
        {
          x: 100,
          y: 33,
        },
        {
          x: 101,
          y: 189,
        },
        {
          x: 130,
          y: 97,
        },
        {
          x: 150,
          y: 87,
        },
        {
          x: 190,
          y: 299,
        },
        {
          x: 180,
          y: 251,
        },

        // { x: 93, y: 70 },
        // { x: 43, y: 60 },
        // { x: 23, y: 10 },
        // { x: 53, y: 80 },
        // { x: 23, y: 10 },
        // { x: 23, y: 10 },
        // { x: 10, y: 100 },
      ],
      fill: true,
      borderColor: "rgb(20, 188, 144",
      backgroundColor: "rgb(25, 112, 142)",
    },
    {
      label: "Looping Easing",
      data: [
        //     { x: 73, y: 70 },
        //     { x: 23, y: 60 },
        //     { x: 13, y: 90 },
        //     { x: 93, y: 80 },
        //     { x: 63, y: 20 },
        //     { x: 73, y: 10 },
        //     { x: 50, y: 100 },
        {
          x: 190,
          y: 191,
        },
        {
          x: 100,
          y: 136,
        },
        {
          x: 90,
          y: 91,
        },
        {
          x: 170,
          y: 190,
        },
        {
          x: 69,
          y: 211,
        },
        {
          x: 88,
          y: 152,
        },
        {
          x: 90,
          y: 189,
        },
        {
          x: 146,
          y: 152,
        },
        {
          x: 42,
          y: 8,
        },
        {
          x: 99,
          y: 197,
        },
        {
          x: 77,
          y: 107,
        },
        {
          x: 97,
          y: 170,
        },
      ],
      fill: true,
      borderColor: "rgb(25, 102, 162)",
      backgroundColor: "rgba(88, 10, 212,0.9)",
    },
  ],
};

const config = {
  type: "line",
  chart: Chart,
  currentStep: 3,
  initial: true,
  numberSteps: 2,
  data: data,
  options: {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    devicePixelRatio: 44,
    interaction: {
      mode: "x",
      intersect: true,
      includeInvisible: true,
    },
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
            backgroundColor: "indigo",
          },
        ],
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 4,
        max: 100,
      },
    },
  },
};

const LineChart = () => {


  return (
    <div
      class="chart-container"
      style={{
        position: "relative",
        marginRight:"3rem",
        marginBottom:"0",
        height: "50vh",
        // width: "30vw",
        paddingTop:"4rem",
        alignContent: "center",
        display: "flex",
        flexWrap:"nowrap",
        // flex: "1 1 20rem",
        marginTop: "2rem",
        left: "0",
      }}
    >
      <Line data={data} config={config} />
    </div>
  );
};

export default LineChart;
