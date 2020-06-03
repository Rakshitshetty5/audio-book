import React from 'react';

import { SignInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from '../form-input/form-input.compoent'

import './sign-in.styles.scss';



class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value},() => console.log(this.state))
    }

    render(){
        return(
            <div className="sign-in">
                <h1 class='sign-in__desp'>Welcome Back</h1>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = 'email'
                        type = 'email'
                        handleChange = {this.handleChange}
                        value = {this.state.email}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        name = 'password'
                        type = 'password'
                        handleChange = {this.handleChange}
                        value = {this.state.password}
                        label = 'Password'
                        required
                    />
                    <div className="sign-in__buttons">
                        <button type='submit'>Submit</button>
                        <button onClick={SignInWithGoogle}>Sign in with Google</button>  
                    </div>
                   
                </form>

                
            </div>
        )
    }



}


export default SignIn;