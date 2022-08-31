import React, { useEffect } from 'react';
import {Navigate} from 'react-router-dom';

interface IAuthenticated{
    // userRole: string,
    children: React.ReactNode

}

const IsAuthenticatedUser = (props: IAuthenticated) => {
    const ROLE = localStorage.getItem('email')

    if(ROLE && ROLE.split('@')[1] === 'decagon.dev'){
        return <>{props.children}</>
    }

    return <Navigate to="/login" />
}

export default IsAuthenticatedUser;