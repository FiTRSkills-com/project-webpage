import React from 'react';
import './style.css'
import { Link } from "react-router-dom";

export const Navbar = ({}) => {
    return <>
        <div className="navbar">
            <Link to="/" className="navlink"> Home </Link>
            <Link to="/fourup" className="navlink"> FourUp Charts </Link>
            <Link to="/time" className="navlink"> Time Tracking </Link>
            <Link to="/plan" className="navlink"> Project Plan </Link>
            <Link to="/metrics" className="navlink"> Metrics </Link>
        </div>
    </>
};