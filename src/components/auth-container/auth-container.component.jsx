import React from 'react';
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

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
            <div className="select-buttons">
                <button onClick={() => this.setState({ a : 1})}>SignIn</button>
                <button onClick={() => this.setState({ a : 2})}>SignUp</button>
            </div>
            {
                this.state.a === 1?
                    <button onClick={SignInWithGoogle}>Sign in with Google</button>

                :
                    <h1>SignUp</h1>
            }
        </div>
    )
}
}

export default AuthContainer