import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';


const header = ( ) => {

    return (
        <Spring from={{ opacity: 0}} to={{ opacity: 1}} config={{ delay: 200, duration: 1500}}>
            {props => (
                <div style={props}>
                    <div>
                        <div>
                            <h1>Front-end Developer</h1>
                        </div>
                        <div>
                            <h2>I code software for the web</h2>
                        </div>
                        <div>
                            <NavLink to='/portfolio'><button className={classes.Action}>Check out my work</button></NavLink>
                        </div>
                    </div>
                </div>
            )}      
        </Spring>
    )

}

export default header;