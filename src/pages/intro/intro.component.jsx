import React from 'react';

import './intro.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component'


const Intro = () => (
    <div className="intro">
        <div className="intro-slogan">
            Listen anytime, anywhere
        </div>
        <div className="intro-sub">
            Perfect for your commute, drive,
             workout or just before bed.
        </div>
        <CustomButton highlight = {true}>Browse Collection</CustomButton>
    </div>
)

export default Intro