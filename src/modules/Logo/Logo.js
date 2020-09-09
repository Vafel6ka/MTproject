import React from 'react';
import logo from './logo.svg';
import './Logo.css'

export default function Logo (){
    return(
        <div className="logo">
            <img src={logo} className = "logo__img" alt="logo img" />
            <h1 className="logo__text">MoneyTracker</h1>
        </div>
        
    );
};