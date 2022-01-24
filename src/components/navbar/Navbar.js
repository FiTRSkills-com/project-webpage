import React from 'react';
import './style.css'

export const Navbar = ({}) => {
    return <>
        <div className="navbar">
            <div className="navlink"> Home </div>
            <div className="navlink"> FourUp Charts </div>
            <div className="navlink"> Time Tracking </div>
            <div className="navlink"> Project Plan </div>
            <div className="navlink"> Metrics </div>
        </div>
    </>
};