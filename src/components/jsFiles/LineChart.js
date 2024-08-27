import React from "react";
import "../css/linechart.css";

import { fakeData } from "./Data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options={};
export default function LineChart() {
  return (
    <div className="linechart-parent-div">
      <div className="linechart-first-child">
        <b>
          Sales vs Orders <InfoOutlinedIcon />{" "}
        </b>
      </div>
      <div className="linechart-second-child"><Line options={options} data={fakeData} / > </div>
    </div>
  );
}
