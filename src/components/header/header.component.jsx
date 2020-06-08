import React from 'react';

import {Link} from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <div className="header-title">
            AudioBook
        </div>
        <Link onClick={() => auth.signOut()} className="header-logout">Logout</Link>
    </div>
)
export default Header;