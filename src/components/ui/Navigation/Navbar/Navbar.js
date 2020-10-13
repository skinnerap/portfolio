import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/images/testing.png';
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
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
            </nav>
        </div>
    )

}

export default navbar;