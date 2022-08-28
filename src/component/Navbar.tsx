import React from 'react'
import { ScorecardLogo, NavBarSearch, ProfileAccountSettings } from '.'


type NavBarProps = {
  handleClick: any
  handleLeave: any
  handleHover: any
  setShowModal: any
  showModal: boolean
}

const NavBar = (props: NavBarProps) => {
  const { handleClick, handleLeave, handleHover, setShowModal, showModal } = props;

  return (
    <nav style={{ display: 'flex', border: '1px solid #E5E5E5', boxShadow: '0 1px grey', background: '#FFFFFF', padding: '0.8rem', height: '4rem' }}>
      <div style={{ flex: '3', margin: '0 1rem' }}>
        <ScorecardLogo />
      </div>
      <div style={{ flex: '7' }}>
        <NavBarSearch />
      </div>
      <div style={{ flex: '3' }}>
        <ProfileAccountSettings
          handleClick={handleClick}
          handleLeave={handleLeave}
          handleHover={handleHover}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </nav>
  )
}

export default NavBar;