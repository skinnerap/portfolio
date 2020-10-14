import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidedrawer.module.css';
import Axios from 'axios';

const sideDrawer = ( props ) => {

    const showSidedrawer = {display: 'flex'};
    const hideSidedrawer = {display: 'none'};

    const shouldShowOrHide = props.show ? showSidedrawer : hideSidedrawer;

    const animation = {
                        transform: props.show ? 'translateX(0)' : 'translateX(-200vh)',
                        opacity: props.show ? '1' : '0',
                        display: props.show ? 'flex' : 'hidden'
                      }

    const joinedClasses = {...shouldShowOrHide, ...animation};


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
        <div className={classes.Sidedrawer} style={joinedClasses}>
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
        </div>
    )

}

export default sideDrawer;