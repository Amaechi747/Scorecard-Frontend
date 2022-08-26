import React from 'react'
import { Link } from "react-router-dom"
import { sideBarData } from "../component/data"
import { Logout } from "../component"


type SideBarProps = {}

const SideBar = (props: SideBarProps) => {
  return (
    <div style={{ height: '100vh', background: '#FFFFFF', width: '23%', padding: '2rem' }}>
      <div style={{ flexDirection: 'column' }}>
        {
          sideBarData.map(el => {
            return (
                <div className="sidebar_data" style={{ display: 'flex', alignItems: 'center', padding: '0.4rem', fontSize: '16px', color: '#FFFFFF', lineHeight: '19px', fontWeight: '400' }}>
                  <Link className="sidebar-link" to={el.link}>
                    <span style={{ flex: '0.5', paddingRight: '3rem' }}>
                      {el.icon}
                    </span>
                    <span style={{ flex: '0.5', paddingRight: '3rem' }}>
                      {el.name}
                    </span>

                  </Link>

                </div>

                
            )
          })
        }
        <div style={{marginTop: '100%', background: 'rgba(20, 168, 0, 0.05)'}}>
          <Logout />
        </div>
      </div>


    </div>
  )
}

export default SideBar