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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      await axios.post("http://localhost:5000/admin/superuser",formData)
      swal("Success", "You have successfully signed up!", "success");

    } catch(error) {
        swal("Error", "Something went wrong", "error");
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
              name="newPassword"
            />

            <FormInput
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
              name="confirmPassword"
            />
            <FormButton text="Save" />
          </Form>
        </div>
      </Card>
    </>
  );
};

export default ChangePassword;
