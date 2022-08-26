import React from 'react'
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Logout from './Logout';

type ProfileModalProps = {
  accountSettingsData: any
  showModal: boolean
}

const ProfileModal: (props: ProfileModalProps) => React.ReactPortal | null = (props: ProfileModalProps) => {
  const { accountSettingsData, showModal } = props

  if (showModal) {

    return ReactDOM.createPortal(
      <div className="profile-modal">
        <div className="profile-modal-up">
          <div>
            <img src="https://img.icons8.com/office/30/000000/test-account.png" />
          </div>

          <div className="profile-modal-bottom">
            <span style={{ color: '#03435F', fontWeight: '700', lineHeight: '19px' }}>Cherechi Orika</span>
            <span style={{ color: '#03435F', fontWeight: '400', lineHeight: '19px' }}>Stack Associate</span>
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {
            accountSettingsData.map((el: any) => {
              return (
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.0rem', fontSize: '16px', color: '#FFFFFF', lineHeight: '19px', fontWeight: '400' }}>
                  <Link to={el.link}>
                    <span style={{ flex: '0.5', paddingRight: '2rem' }}>{el.icon}</span>
                    <span style={{ flex: '0.5', paddingRight: '2rem' }}>{el.name}</span>
                  </Link>
                </div>
              )
            })
          }
          <Logout />

        </div>

      </div>, document.getElementById('modal-root')!)
  }
  return null;
}

export default ProfileModal