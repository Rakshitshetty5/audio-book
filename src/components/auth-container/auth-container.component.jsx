import React from 'react';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import './auth-container.styles.scss'


class AuthContainer extends React.Component{
    constructor(){
        super();
        
        this.state = {
            a : 1
        }
    }

render(){
    return(
        <div className="auth-container">
            <div className="auth-container__buttons">
                <button onClick={() => this.setState({ a : 1})}>SignIn</button>
                <button onClick={() => this.setState({ a : 2})}>SignUp</button>
            </div>
            <div className="auth-container__form">
            {
                this.state.a === 1?
                    <SignIn />

                :
                    <SignUp />
            }
            </div>
            
        </div>
    )
}
}

export default AuthContainer