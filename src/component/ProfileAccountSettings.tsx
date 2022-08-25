import React, { useState, MouseEvent } from 'react'
import { accountSettingsData } from "./data"
import { ProfileModal } from "."


type Props = {}

const ProfileAccountSettings = (props: Props) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setShowModal(!showModal)
  }
  return (
    <>
      <div onClick={(e) => handleClick(e)} className="account-settings">
        <div style={{ paddingLeft: '2rem' }}>
          <img src="https://img.icons8.com/office/30/000000/test-account.png" />
        </div>
        <div style={{ paddingLeft: '2rem' }}>Cherechi</div>
      </div>

      {showModal && <ProfileModal accountSettingsData={accountSettingsData} showModal={showModal} />}

    </>
  )
}

export default ProfileAccountSettings