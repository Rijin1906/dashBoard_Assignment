import React from 'react'
import "../css/menu.css"
import SidebarData from "./SidebarData"

// import { sidebarData } from './SidebarData';

export default function Menu() {
  return (
    <div className='menu-align'>
      {/* <h2>I am menu division..</h2> */}
      <SidebarData/>
    </div>
  )
}
