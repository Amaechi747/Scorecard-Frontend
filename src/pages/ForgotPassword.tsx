import React, { FC } from 'react'
import AuthInput from '../component/AuthInput'
import AuthButton from '../component/AuthButton'
// import { FormButton, FormInput } from '../component'
import WrapperPage from './WrapperPage'

type ForgotPasswordProps = {}

const ForgotPassword: FC = (props: ForgotPasswordProps) => {
  return (
    <WrapperPage backToLogin={true}>
      <div style={{ color: '#21334F', margin: '5rem 0 1rem 0'}}>
        <h1>Forgot Password ?</h1>
        <span style={{ fontWeight: '400', color: '#21334FC9' }}>Send a link to your email address to reset your password</span>
      </div>
      <div  style={{ width: '100%', padding: '3rem 0'}}>
        <form action="" method='post'>
          <AuthInput type='email' 
            name='email' 
            label='Email address' 
            placeholder='Email address' 
            errorMsg='Please enter a valid email address'
          />
          <AuthButton text='Send Reset Link' />
        </form>
      </div>
    </WrapperPage>
  )
}

export default ForgotPassword;