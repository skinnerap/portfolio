import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import classes from '../Navbar/Navbar.module.css';

const navbar = () => {

    const resumeHandler = () => {

        Axios({
            url: 'http://localhost:8080/api/download', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'AlexanderSkinnerResume.pdf'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }

    return (
        <div className={classes.Navbar}>
            <ul>
                <li>
                    <span className={classes.logo}>
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
                    <span onClick={resumeHandler}>Resume</span>
                    
                </li>
            </ul>
            </nav>
        </div>
    )

}

export default navbar;