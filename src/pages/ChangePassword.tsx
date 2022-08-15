import { FC, useState, ChangeEvent, FormEvent } from "react";
import { FormInput, Card, FormButton, Form } from "../component";
import { Heading, Paragraph, HorizontalLine } from "../styling/css";
import axios from "axios";
import swal from "sweetalert"

type ChangePasswordProps = {};

const ChangePassword: (props: ChangePasswordProps) => JSX.Element = (
  props: ChangePasswordProps
) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await axios.post('/api/change-password', formData)
      swal("Success", "You have successfully signed in", "success")

    } catch {
      swal("Error", "Something went wrong", "error")
    }
  }


  return (
    <>
      <Heading>Change Password</Heading>
      <Card>
        <div>
          <Paragraph>
            YOUR NEW PASSWORD MUST BE DIFFERENT FROM YOUR USED PREVIOUS
            PASSWORDS.
          </Paragraph>
          <HorizontalLine />
        </div>

        <div style={{ padding: "2rem 2.5rem" }}>
          <Form
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInput
              label="New Password"
              type="password"
              value={formData.newPassword}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              name="newPassword"
            />
            {
              formData.newPassword.length > 8 ?
                <p style={{ color: 'green' }}>Password is ok</p> :
                formData.newPassword.length === 0 ? <p style={{ color: 'red' }}>New Password cannot be empty</p> :
                  <p style={{ color: 'orange' }}>Must be at least 8 characters</p>
            }

            <FormInput
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              name="confirmPassword"
            />
            {
              formData.newPassword !== formData.confirmPassword ?
                <p style={{ color: 'red' }}>Confirm Password and Password must match</p> :
                formData.confirmPassword.length === 0 ? <p style={{ color: 'red' }}>Confirm Password cannot be empty</p> :
                  <p style={{ color: 'green' }}>Match</p>
            }
            <FormButton text="Save" />
          </Form>
        </div>
      </Card>
    </>
  );
};

export default ChangePassword;
