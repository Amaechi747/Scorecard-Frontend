import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { FormInput, Card, FormButton, Form } from "../component";
import { Heading, Paragraph,Select, Option,Label } from "../styling/css";
import axios from "axios";
import swal from "sweetalert";

type UserManagementProps = {};

  const UserManagement: FC = (props: UserManagementProps) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
        email: "",
        stack: "",
        squad:""
    });

    const [errMsg, setErrMsg] = useState<string>("");
    const [errMsgColor, setErrMsgColor] = useState<string>("");
    const [errBorderColor, setErrBorderColor] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (
        formData.firstName === "" ||
        errMsgColor === "" ||
        errBorderColor === ""
      ) {
        setErrMsgColor("#FF0000");
        setErrBorderColor("#FF0000");
        setErrMsg("First name cannot be empty");
      }
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        await axios.post("http://localhost:5000/admin/superuser", formData);
        swal("Success", "You have successfully signed up!", "success");
      } catch (error) {
        swal("Error", "Something went wrong", "error");
      }
    };

    return (
      <>
        <Heading>User Sign up</Heading>
        <Card>
          <div>
            <Paragraph>Fill in all required details.</Paragraph>
          </div>

          <div style={{ padding: "2rem 2.5rem" }}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormInput
                label="First Name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                errBorderColor={`${errBorderColor}`}
              />
              <FormInput
                label="Last Name"
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                errBorderColor={`${errBorderColor}`}
              />
              <FormInput
                label="Email"
                type="email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                errBorderColor={`${errBorderColor}`}
              />
              <FormInput
                label="Squad"
                type="text"
                value={formData.squad}
                name="squad"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                errBorderColor={`${errBorderColor}`}
              />
              {/* <FormInput
                label="Stack"
                type="text"
                value={formData.squad}
                name="stack"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                errBorderColor={`${errBorderColor}`}
              /> */}
              <Label>Stack</Label>
              <Select>
                <Option> Java</Option>
                <Option> Nodejs</Option>
                <Option> Andriod</Option>
                <Option> C#</Option>
                <Option> Python</Option>
              </Select>
              <FormButton text="Create User" />
            </Form>
          </div>
        </Card>
      </>
    );
  };



export default UserManagement;
