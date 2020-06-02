import React from 'react';

import AuthContainer from '../../components/auth-container/auth-container.component'

import './signin-signup.styles.scss'

const SignInAndSignUpPage = () => {
    return(
        <div className="signin-signup">
            <div className="app-logo">

            </div>
            <AuthContainer />
        </div>
    )
}




export default SignInAndSignUpPage;