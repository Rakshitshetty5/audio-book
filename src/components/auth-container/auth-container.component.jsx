import React from 'react';

import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import CustomButton from '../custom-button/custom-button.component'

import './auth-container.styles.scss'


class AuthContainer extends React.Component{
    constructor(){
        super();
        
        this.state = {
            button_status : 1
        }
    }

render(){
    return(
        <div className="auth-container">
                {
                    this.state.button_status === 1 ? 
                    <div className="auth-container__buttons">
                        <CustomButton onClick={() => this.setState({ button_status : 1})} small={"true"} highlight={"true"}>Signin</CustomButton>
                        <CustomButton onClick={() => this.setState({ button_status : 0})} small={"true"} >Signup</CustomButton>
                    </div>
                    :
                    <div className="auth-container__buttons">
                        <CustomButton onClick={() => this.setState({ button_status : 1})} small={"true"}>Signin</CustomButton>
                        <CustomButton onClick={() => this.setState({ button_status : 0})} small={"true"} highlight={"true"}>Signup</CustomButton>
                    </div>

                }
            <div className="auth-container__form">
            {
                this.state.button_status === 1?
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