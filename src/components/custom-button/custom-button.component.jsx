import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...props}) => {
    return(
    <button className={`custom-button ${props.googleSignIn ? "google" : ''} ${props.small ? 'small' : ''} ${props.highlight ? 'highlight' : ''} `}
    {...props} 
    >
        {children}
    </button>
)}


export default CustomButton