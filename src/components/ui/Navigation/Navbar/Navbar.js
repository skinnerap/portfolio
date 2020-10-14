import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Navbar/Navbar.module.css';

const navbar = () => {



    return (
        <div className={classes.Navbar}>
            <ul>
                <li>
                    <span>
                        Alexander Skinner
                    </span>
                </li>
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
                    <a href='https://firebasestorage.googleapis.com/v0/b/portfolio-478b9.appspot.com/o/AlexanderSkinnerResume.pdf?alt=media&token=002829ba-b4ca-4d03-bcde-01f668a5838a' download>Resume</a>
                </li>
            </ul>
            </nav>
        </div>
    )

}

export default navbar;