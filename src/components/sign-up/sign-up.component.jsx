import React from 'react';


import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }
    render(){
        return(
            <div className="sign-up">
                <h1>SignUp</h1>
            </div>
        )
    }



}

export default SignUp;

