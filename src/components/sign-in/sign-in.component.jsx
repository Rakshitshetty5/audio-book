import React from 'react';

import { SignInWithGoogle, auth } from "../../firebase/firebase.utils";

import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'


import './sign-in.styles.scss';



class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : '', password: ''});
        }catch(error){
            alert(error.message)

        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value})
    }

    render(){
        return(
            <div className="sign-in">
                <h1 className='sign-in__desp'>Welcome Back</h1>
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
                        <CustomButton type='submit'>SignIn</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} googleSignIn={"true"}>Sign in with Google</CustomButton>  
                    </div>
                   
                </form>

                
            </div>
        )
    }



}


export default SignIn;