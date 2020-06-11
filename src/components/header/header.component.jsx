import React from 'react';

import {Link} from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({currentUser}) => (
    <div className="header">
        <div className="header-title">
            AudioBook
        </div>
        {
        currentUser ? 
                <Link onClick={() => auth.signOut()} to='/' className="header-logout">
                    Logout
                </Link>
                 : ''
                
        }
       
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(Header);