import React from 'react';

import './intro.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component'

import { withRouter } from 'react-router-dom'

const Intro = ({history, match}) => (
    <div className="intro">
        <div className="intro-head">
            <div className='intro-head__left'>Listen,</div>
            <div className="intro-head__right">
                <ul className="flip">
                    <li>Anytime</li>
                    <li>Anywhere</li>
                </ul>
            </div>
        </div>
        <div className="intro-subhead">
            Perfect for your commute, drive,
             workout or just before bed.
        </div>
        <CustomButton highlight = {true} onClick = {() => {
            history.push(`/auth`)}}>Login/Signup</CustomButton>
    </div>
)

export default withRouter(Intro)