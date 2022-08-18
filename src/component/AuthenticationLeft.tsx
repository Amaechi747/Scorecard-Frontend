import axios from 'axios';
import React, { useState, FC, FormEvent } from 'react';
import swal from 'sweetalert';
import validator from 'validator';
import { AuthenticationInput, Form } from '.';

type IAuthenticationLeftProps = {
}

const AuthenticationLeft = (props: IAuthenticationLeftProps) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errMsg, setErrMSg] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        formData.email.length === 0 ? setErrMSg('Email cannot be empty') :
            formData.email.length > 0 && validator.isEmail(formData.email) ? setErrMSg('Valid Email') : setErrMSg('Please enter a valid email address')
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault();

            await axios.post('/api/login', formData)
            swal("Error","Login Successful", "success")

        }catch(err) {
         swal("Error","Login Failed", "error")
        }
    }

    return (
        <>

            <form onSubmit = {(e)=> handleSubmit(e)}>
                
                <AuthenticationInput
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onInput={(e) => handleChange(e)}
                    name="email"
                    placeholder="Enter email address"
                />
                <small>{errMsg}</small>


                <AuthenticationInput
                    label="Password"
                    type="password"
                    value={formData.password}
                    onInput={(e) => handleChange(e)}
                    name="password"
                    placeholder="Enter password"
                />
                {/* <small>}</small> */}
                {
                    formData.password.length > 8 ?
                        <small style={{ color: 'green' }}>Password is ok</small> :
                        formData.password.length === 0 ? <small style={{ color: 'red' }}>Field cannot be empty</small> :
                            <small style={{ color: 'orange' }}>Must be at least 8 characters</small>
                }
            </form>
        </>
    );
};

export default AuthenticationLeft;
