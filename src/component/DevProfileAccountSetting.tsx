import React, { useState, MouseEvent, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import photo from './images/placeholder-img.png'
import { accountSettingsData } from "./data"
import { ProfileModal, Logout } from "."


type Props = {
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  setShowModal?: any
  showModal?: boolean
  handleHover: () => void
  handleLeave: () => void
}


const DevProfileAccountSettings = (props: Props) => {
  const { handleClick, setShowModal, showModal, handleHover, handleLeave } = props;
  
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');


  return (
    <>
      <div onClick={(e) => handleClick(e)} onMouseOver={() => handleHover()} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        <div>
            <img src={photo} alt="temp" style={{ clipPath: 'circle(50%)', width: '3rem', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div style={{ marginLeft: '1rem', color: '#213' }}>{`${firstName} ${lastName}`}</div>
      </div>

      <div onMouseLeave={() => handleLeave()}>
        { showModal && <h2>Happy</h2>}
        {/* {showModal && <ProfileModal accountSettingsData={accountSettingsData} showModal={showModal} profilePicture={profilePicture} firstName={firstName} lastName={lastName} role={role} />} */}
      </div>


    </>
  )
}

export default DevProfileAccountSettings