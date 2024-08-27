import React from 'react'
import "../css/content.css"

import Dashboard from './Dashboard'
import LineChart from './LineChart'
import Piechart from "./Piechart";

export default function Content() {
  return (
    <div className='content-align'>
     <div> <Dashboard/></div>
     <div className='content-parent-div'>
      <div className='content-child-one'><LineChart/></div>
      <div className='content-child-two'><Piechart/></div>
     </div>
    </div>
  )
}
