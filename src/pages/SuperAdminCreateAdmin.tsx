import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormSelect, FormButton, Form, FormInput2 } from "../component";
import { Heading2, Paragraph, Card2, Select } from "../styling/css";
import axios from "axios";
import swal from "sweetalert"


type PageProps = {}


const SuperAdminCreateAdmin = (props: PageProps): JSX.Element => {


    return (
        <>
          <Heading2>Create Admin 
            <div>
                <Link to='/view-all-admins' style={{
                    fontSize: 'calc(2rem - 18px)',
                    fontWeight: '300',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '1px solid #249800',
                    textDecoration: 'none',
                    color: '#249800',
                    padding: '0.5rem 0.5rem'
                }}>View all Admins</Link>
            </div>
          </Heading2>
            
          <Card2>
            <Paragraph>
            Fill in all required details.
            </Paragraph>
    
            <div style={{ padding: "2rem 2.5rem" }}>
              <Form onSubmit={() => {}} >

                <FormInput2 
                    name="firstName"
                    placeholder="Enter First Name"
                    label="First Name"
                    type="text"
                    errorMsg="First name cannot be blank"
                />
                <FormInput2 
                    name="lastName"
                    placeholder="Enter Last Name"
                    label="Last Name"
                    type="text"
                    errorMsg="Last name cannot be blank"
                />
                <FormInput2 
                name="email" 
                placeholder="Enter Email" 
                label="Email" 
                type="email" 
                errorMsg="Please enter a valid email address" 
                // firstValue="Name cannot be blank"
                />
                {/* <FormSelect 
                  name="stack"
                  label="Stack"
                  errorMsg="Please select a comma separated list of Stacks for this Admin"
                  type="text"
                />
                <FormSelect 
                  name="role"
                  label="Assign Role"
                  errorMsg="Please select a role for this user"
                  type="text"
                /> */}
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={{ 
                    fontWeight: '400',
                    marginBottom: '0.7rem',
                    color: '#21334F',
                    display: 'block' }}>Stack</label>
                  <Select name="stack" id="stack">
                      <option value=""></option>
                      <option value="test">Test</option>
                      <option value="test2">Test 2</option>
                  </Select>
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={{ 
                    fontWeight: '400',
                    marginBottom: '0.7rem',
                    color: '#21334F',
                    display: 'block' }} htmlFor='role'>Assign Roles</label>
                  <Select name="role" id="role">
                      <option value=""></option>
                      <option value="test">Test</option>
                      <option value="test2">Test 2</option>
                  </Select>
                </div>
                <FormInput2 
                name="squad" 
                placeholder="SQ0011" 
                label="Squad" 
                type="text" 
                errorMsg="Please enter a valid Squad e.g. - SQ0012" 
                // firstValue="Name cannot be blank"
                />

                <FormButton text="Create Admin" />
              </Form>
            </div>
          </Card2>
        </>)
}

export default SuperAdminCreateAdmin;