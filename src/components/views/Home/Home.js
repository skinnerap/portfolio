import React from 'react';
import Header from './Header';
import Marquee from '../../ui/Marquee/Marquee';
import classes from '../Home/Home.module.css';

const home = ( props ) => {

    return (
        
        <div className={classes.Home}>
            <Header />
            <Marquee />    
        </div>
    )

}

export default home;