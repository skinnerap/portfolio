import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Navbar/Navbar.module.css';

const navbar = () => {



    return (
        <div className={classes.Navbar}>
            <ul>
                <li><span>Alexander Skinner</span></li>
            </ul>
            <nav>
            <ul>
                <li>
                    <NavLink  exact activeStyle={{ color: '#8d1b5a' }} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#8d1b5a' }} to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#8d1b5a' }} to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#8d1b5a' }} to='/resume'>Resume</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )

}

export default navbar;