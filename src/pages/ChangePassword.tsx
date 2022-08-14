import { FC, useState, ChangeEvent } from 'react'
import { FormInput, Card, Button, Form } from "../component";
import styled from "styled-components"
import axios from "axios"

type ChangePasswordProps = {
  
}

const Heading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
`

const Paragraph = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #BDBDBD;
padding: 2rem 2.5rem 0.1rem 2.5rem;
`

const HorizontalLine = styled.div`
border: 1px solid #D9D9D9
`

const ChangePassword: (props: ChangePasswordProps) => JSX.Element = (props: ChangePasswordProps) => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Heading>Change Password</Heading>
      <Card>
        <div>
          <Paragraph>
            YOUR NEW PASSWORD MUST BE DIFFERENT FROM YOUR USED PREVIOUS PASSWORDS.
          </Paragraph>
          <HorizontalLine />

        </div>

        <div style={{ padding: '2rem 2.5rem' }}>
          <Form>
            <FormInput label="New Password" type="password" value={formData.newPassword} onChange={(e) => handleChange(e)} name='newPassword' />

            <FormInput label="Confirm Password" type="password" value={formData.confirmPassword} onChange={(e) => handleChange(e)} name='confirmPassword' />
            <Button text="Save" />
          </Form>

        </div>
      </Card>

    </>
  )
}

export default ChangePassword