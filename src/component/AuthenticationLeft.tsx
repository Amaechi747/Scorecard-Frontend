import React, { useState, FC } from 'react';
import validator from 'validator';
import { AuthenticationInput, Form } from '.';

type IAuthenticationLeftProps = {
}

const AuthenticationLeft: FC = (props: IAuthenticationLeftProps) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    return (
        <>

            <form>
                <AuthenticationInput
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    name="email"
                    placeholder="Enter email address"
                />
                    {formData.email.length === 0 ? <p style={{ color: 'red' }}></p> :
                    formData.email.length > 0 && validator.isEmail(formData.email) ? <p style={{ color: 'green' }}>Valid Email</p> : <p style={{ color: 'red' }}>Please enter a valid email address</p>
                    }
                <AuthenticationInput
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    name="password"
                    placeholder="Enter password"
                />
                    {
                    formData.password.length > 8 ?
                        <p style={{ color: 'green' }}>Password is ok</p> :
                        formData.password.length === 0 ? <p style={{ color: 'red' }}></p> :
                        <p style={{ color: 'orange' }}>Must be at least 8 characters</p>
                    }
            </form>
        </>
    );
};

export default AuthenticationLeft;
