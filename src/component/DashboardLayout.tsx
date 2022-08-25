import React from 'react'
import { NavBar, SideBar } from "."

type Props = {
  children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
  return (
    <div>
      <NavBar />
      <SideBar />
      {props.children}
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