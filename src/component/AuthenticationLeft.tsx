import axios from 'axios';
import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import validator from 'validator';
// import { AuthenticationInput, AuthenticationButton } from '.';
import {AuthInput, AuthButton} from '.'


type IAuthenticationLeftProps = {
}

const AuthenticationLeft = (props: IAuthenticationLeftProps) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    // const [errMsg, setErrMSg] = useState('')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })

    //     formData.email.length === 0 ? setErrMSg('Email cannot be empty') :
    //     formData.email.length > 0 && validator.isEmail(formData.email) ? setErrMSg('Valid Email') : setErrMSg('Please enter a valid email address')
    // }
    useEffect(() => {
        if(mail || pass) {
            setFormData({ email: mail, password: pass});
        }
        return;
    }, [mail,pass])

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await axios.post("/users/login", formData);
            response.data.message === "Success"
              ? swal("Success", "Login Successful", "success")
              : void 0;
            for (let item in response.data.data) {
                localStorage.setItem(`${item}`, response.data.data[item]);
                if (item === 'admin') {
                    setTimeout(() => {
                        navigate('/admin');
                    }, 1000)
                }
            }
        }catch(err: any) {
            if(err?.response.data.error) {

                const message = err?.response.data.error 
                swal("Error",message, "error")
            }
        }
    }

    return (
        <>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <AuthInput name='email' placeholder='Email Address' label='Email Address'
                type='email' errorMsg='Please enter a valid email address' setSharedState={setMail} />
                {/* <AuthenticationInput
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onInput={(e) => handleChange(e)}
                    name="email"
                    placeholder="Enter email address"
                />
                <small>{errMsg}</small> */}

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '3rem' }}>
                    <AuthInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        errorMsg='Please input a password with letters, numbers and symbols @_:;'
                        setSharedState={setPass}
                    />
                    <Link to="/forgot-password" style={{
                        textDecoration: "none", 
                        color: "#34A853",
                        alignSelf: 'flex-end',
                        marginTop: '-1.2rem'}}>Forgot Password?</Link>
                </div>
                {/* <AuthenticationInput
                    label="Password"
                    type="password"
                    value={formData.password}
                    onInput={(e) => handleChange(e)}
                    name="password"
                    placeholder="Enter password"
                /> */}
                {/* <small>}</small> */}
                {/* {
                    formData.password.length > 8 ?
                        <small style={{ color: 'green' }}>Password is ok</small> :
                        formData.password.length === 0 ? <small style={{ color: 'red' }}>Field cannot be empty</small> :
                            <small style={{ color: 'orange' }}>Must be at least 8 characters</small>
                } */}

                <AuthButton text="Login" />
            </form>
        </>
    );
};

export default AuthenticationLeft;
