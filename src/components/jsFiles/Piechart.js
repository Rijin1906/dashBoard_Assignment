import React from 'react'
import"../css/piechart.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Pie } from "react-chartjs-2";

import { fakePieData } from "./Data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

const options={};

export default function pieChart() {
  return (
    <div className='piechart-parent-div'>
      <div className='piechart-first-child'><b>Portion of Sales <InfoOutlinedIcon/></b></div>
      <div className='piechart-second-child'><Pie options={options} data={fakePieData}/></div>
    </div>
  )
}
