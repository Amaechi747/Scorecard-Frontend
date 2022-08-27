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
          <div style={{ width: '5rem', clip: 'circle(50%)', marginRight: '0.8rem' }}>
            <img src="https://img.icons8.com/office/30/000000/test-account.png" />
          </div>

          <div className="profile-modal-bottom">
            <span style={{ color: '#03435F', fontWeight: '700', lineHeight: '19px' }}>Cherechi Orika</span>
            <span style={{ color: '#03435F', fontWeight: '400', lineHeight: '19px' }}>Stack Associate</span>
          </div>

        </div>

        <div style={{ padding: '1rem 0 2.5rem 2rem' }}>
          {
            accountSettingsData.map((el: any) => {
              return (
                <div>
                  <Link to={el.link} className='profile-modal-links'>
                    <span style={{ marginRight: '1rem', fontSize: '1.5rem', display: 'inline-block' }}>{el.icon}</span>
                    <span style={{ display: 'inline-block',  }}>{el.name}</span>
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