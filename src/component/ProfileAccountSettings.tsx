import React, { useState, MouseEvent, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { accountSettingsData } from "./data"
import { ProfileModal, Logout } from "."


type Props = {
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  setShowModal: any
  showModal: boolean
  handleHover: () => void
  handleLeave: () => void
}


const BASEURL = process.env.REACT_APP_BASEURL;

const ProfileAccountSettings = (props: Props) => {
  const { handleClick, setShowModal, showModal, handleHover, handleLeave } = props;

  const [profilePicture, setProfilePicture] = useState('')
  
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${BASEURL}/admin/profile/${localStorage.getItem('id')}`, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(result.data)
        const {imageUrl}=  result.data        // setProfilePicture(result.data.data)

      } catch (err) {
        console.error(err)
      }
    })();
  }, []);


  return (
    <>
      <div onClick={(e) => handleClick(e)} onMouseOver={() => handleHover()} className="account-settings">
        <div style={{ paddingLeft: '2rem' }}>
          <img className="profile-img" src="https://img.icons8.com/office/30/000000/test-account.png" />
        </div>
        <div style={{ paddingLeft: '2rem' }}>Cherechi</div>
      </div>

      <div onMouseLeave={() => handleLeave()}>

        {showModal && <ProfileModal accountSettingsData={accountSettingsData} showModal={showModal} />}
      </div>


    </>
  )
}

export default ProfileAccountSettings