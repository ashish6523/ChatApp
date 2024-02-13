
import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { Alert } from '../../Components/Alert/Alert';
import * as Declarations from '../../Infrastructure.json';

export default function NotFound(){
    const Routes = Declarations.Routes;
   
    useEffect(() => {
        Alert({
            Message: Declarations.UserExperience.Pages.OnNotFound,
            Type: 'Information' });
    }, []);

    return <Navigate to={Routes.Auth} />
};