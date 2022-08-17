import React, { FC, useState } from 'react'
import AuthInput from '../component/AuthInput'
import AuthButton from '../component/AuthButton'
import WrapperPage from './WrapperPage'

type ResetPasswordProps = {}

const ResetPassword: FC = (props: ResetPasswordProps) => {
  const [sharedPass, setSharedPass] = useState("");

  return (
    <WrapperPage backToLogin={true}>
      <div style={{ color: '#21334F', margin: '5rem 0 1rem 0'}}>
        <h1>Reset Password</h1>
        <span style={{ fontWeight: '400', color: '#21334FC9' }}>Please choose your new password</span>
      </div>
      <div  style={{ width: '100%', padding: '3rem 0'}}>
        <form action="" method='post'>
          <AuthInput type='password' 
            name='newPassword' 
            label='New password' 
            placeholder='New Password' 
            errorMsg='Password must be at least 5 characters'
            setSharedState={setSharedPass}
          />
          <AuthInput type='password' 
            name='confirmPassword' 
            label='Confirm password' 
            placeholder='password again' 
            errorMsg='Does not match password'
            match={sharedPass}
          />
          <AuthButton text='Change Password' />
        </form>
      </div>
    </WrapperPage>
  )
}

export default ResetPassword;