import React from 'react';

import './error-boundary.scss'
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }


    static getDerivedStateFromError(error){
        //when error update state and show fallback ui
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            //you can render any custom fallback ui
            return (
                <div className = "errorImageOverlay">
                        <div className="errorImageContainer"/>
                        <h2 className="errorImageText">
                            A Dog Ate this Page
                        </h2>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;