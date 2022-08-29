import React from 'react'
import { NavLink } from "react-router-dom"
import { ScorecardLogo } from "."
import { landingNavbarData } from "./data"

type LandingPageNavbarProps = {}

const LandingPageNavbar = (props: LandingPageNavbarProps) => {
 return (
  <nav style={{ display: 'flex', border: '1px solid #E5E5E5', boxShadow: '0 1px grey', background: '#FFFFFF', padding: '0.8rem', height: '4rem' }}>
   <div style={{ flex: '4', margin: '0 1rem', alignContent: 'space-between'}}>
    <ScorecardLogo />
   </div>
   <div style={{ flex: '8' }}>
      <ul>
    {
     landingNavbarData.map((el, index) => {
      return (
        <li key={el.id} style={{display: 'inline', marginLeft: '5rem'}}>
         <NavLink to={el.link} style={{paddingRight: '4rem'}}>{el.name}</NavLink>
        </li>
      )
     })
    }
    </ul>
   </div>
  </nav>
 )
}

export default LandingPageNavbar