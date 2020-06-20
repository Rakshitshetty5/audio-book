import React from 'react';

import './intro.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component'

import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from  'react-redux'


import { selectCurrentUser } from '../../redux/user/user.selector'

const Intro = ({history, currentUser}) => (
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
        {
        currentUser ? 
            <div className="intro-chip__buttons">
                <button className="intro-chip__button chip_highlight" onClick = {() => {
                history.push(`/home`)}}>Home</button>
                <button className="intro-chip__button" onClick = {() => {
                history.push(`/romance`)}}>Romance</button>
                <button className="intro-chip__button" onClick = {() => {
                history.push(`/literary`)}}>Literary</button>
                <button className="intro-chip__button" onClick = {() => {
                history.push(`/adventure`)}}>Adventure</button>
                <button className="intro-chip__button" onClick = {() => {
                history.push(`/history`)}}>History</button>
            </div>
         :
         <CustomButton highlight = {true} onClick = {() => {
            history.push(`/auth`)}}>Login/Signup</CustomButton>
         }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Intro))