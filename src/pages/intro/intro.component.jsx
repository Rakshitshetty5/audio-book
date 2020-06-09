import React from 'react';

import './intro.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component'

import { withRouter } from 'react-router-dom'

const Intro = ({history, match}) => (
    <div className="intro">
        <div className="intro-slogan">
            Listen anytime, anywhere
        </div>
        <div className="intro-sub">
            Perfect for your commute, drive,
             workout or just before bed.
        </div>
        <CustomButton highlight = {true} onClick = {() => {
            history.push(`/auth`)}}>Login/Signup</CustomButton>
    </div>
)

export default withRouter(Intro)