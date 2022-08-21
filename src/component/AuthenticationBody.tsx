import * as React from 'react';
import { LoginHeading } from '../styling/css';
import AuthenticationLeft from "./AuthenticationLeft";
import AuthenticationRight from "./AuthenticationRight";
import ScorecardLogo from './ScorecardLogo';
import { Link } from "react-router-dom";
import AuthenticationButton from './AuthenticationButton';


interface IAuthenticationBodyProps {
}

const AuthenticationBody: React.FunctionComponent<IAuthenticationBodyProps> = (props) => {
    return (
        <>
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>

                <div style={{ flex: '1', margin: "3rem 5rem" }}>
                    <ScorecardLogo />
                    <LoginHeading>Login to your account</LoginHeading>

                    <AuthenticationLeft />
                    
                    <p style={{paddingLeft: "25rem" }}><Link to="/forget-password" style={{textDecoration: "none", color: "#34A853"}}>Forgot Password?</Link></p>
                    <AuthenticationButton text="Login" />
                    <p style={{textAlign: "center"}}>Don't have an account? <Link to="/sign-up" style={{textDecoration: "none", color: "#34A853"}}>Sign Up</Link></p>
                    
                    <p style={{
                        textAlign: "center",
                        fontWeight: '300',
                        color: '#03435F'
                    }}>Don't have an account? <Link to="/sign-up" style={{
                        textDecoration: "none", 
                        color: "#34A853",
                        fontWeight: '800'}}>Sign Up</Link></p>
                </div >

    <div style={{ flex: "1" }}>
        <AuthenticationRight />
    </div>
            </div >
        </>
    );
};

export default AuthenticationBody;
