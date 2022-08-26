import React from 'react'
import { NavBar, SideBar } from "."
import classes from './AdminDashboard.module.css'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
  return (
    <div className={classes.admin_wapper}>
      <div>
      <NavBar />
      </div>
      <div className={classes.admin_dashboard_container}>
      <SideBar />
      <div>{props.children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout

// function DashboardLayout(props:any): JSX.Element {

//     return (
//       <div className="App">

//         <nav></nav>
//         <div></div>
//         <div>{props.children}</div>
//       </div>
//     );
//   }

//   export default DashboardLayout;