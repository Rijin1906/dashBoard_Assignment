import * as React from 'react';
// import { Button, IconButton } from '@mui/material';
// import { AddCircle} from '@mui/icons-material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CalculateIcon from '@mui/icons-material/Calculate';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/sidebar.css"



 const data = [
    { key: 1, icon: <ShowChartIcon />, name: "Dashboard", down: <ExpandMoreIcon/>},
    {key:2, icon:<InventoryIcon/>, name:"Inventory",down: <ExpandMoreIcon/> },
    {key:3, icon:<BorderStyleIcon/>, name:"Order", down: <ExpandMoreIcon/>},
    {key:4, icon:<AssignmentReturnIcon/>, name: "Returns", down: <ExpandMoreIcon/>},
    {key:5, icon:<Diversity1Icon/>, name:"Customers",down: <ExpandMoreIcon/> },
    {key:6, icon:<LocalShippingIcon/>, name:"Shipping", down: <ExpandMoreIcon/>},
    {key:7, icon:<StorefrontIcon/>, name:"Channel",down: <ExpandMoreIcon/> },
    {key:8, icon:<IntegrationInstructionsIcon/>, name:"Integrations",down: <ExpandMoreIcon/> },
    {key:9, icon:<CalculateIcon/>, name:"Calculator", down: <ExpandMoreIcon/>},
    {key:10, icon:<SummarizeIcon/>, name:"Reports",down: <ExpandMoreIcon/> },
    {key:11, icon:<SettingsIcon/>, name:"Accounts", down: <ExpandMoreIcon/>},
    

];


function clickHandler(){
  console.log("I got clicked");
}

export default function SidebarData() {
  return (
    <div>

      {data.map((item) => (
        <div key={item.key} onClick={clickHandler} className='sidebar-parent-div'> {/* Add a key for each item */}
          <span className='sidebar-span'>{item.icon}</span>  {/* Wrap icon in a span */}
          <div className='sidebar-child-div'><div>{item.name}</div>
          <div className='sidebar-downarrow'>{item.key>8? item.down:" "}</div></div>
          
          </div>
      ))}
    </div>
  )
}
