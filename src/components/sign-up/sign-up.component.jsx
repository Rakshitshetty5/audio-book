import React from 'react';

import FormInput from '../form-input/form-input.compoent'
import CustomButton from '../custom-button/custom-button.component'

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
    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value},() => console.log(this.state))
    }
    render(){
        return(
            <div className="sign-up">
                <h1 className='sign-up__desp'>Let's get started</h1>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = 'name'
                        type = 'text'
                        handleChange = {this.handleChange}
                        value = {this.state.name}
                        label = 'Name'
                        required
                    />
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
                     <FormInput 
                        name = 'confirmPassword'
                        type = 'password'
                        handleChange = {this.handleChange}
                        value = {this.state.confirmPassword}
                        label = 'Confirm Password'
                        required
                    />
                    <div className="sign-up__buttons">
                        <CustomButton type='submit'>SignUp</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }



}

export default SignUp;

