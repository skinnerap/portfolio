import React from 'react';
import classes from './Portfolio.module.css';

const portfolio = ( props ) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Portfolio}>
                <div className={classes.project1}>
                    <div className={classes.topbar}>
                        <div className={classes.red}></div>
                        <div className={classes.yellow}></div>
                        <div className={classes.green}></div>
                        <span>/File-Uploading</span>
                    </div>
                </div>
                <div className={classes.project2}>
                    <div className={classes.topbar}>
                        <div className={classes.red}></div>
                        <div className={classes.yellow}></div>
                        <div className={classes.green}></div>
                        <span>/Scheduling-Software</span>
                    </div>
                </div>
                <div className={classes.project3}>
                    <div className={classes.topbar}>
                        <div className={classes.red}></div>
                        <div className={classes.yellow}></div>
                        <div className={classes.green}></div>
                        <span>/Data-Visualizations</span>
                    </div>
                </div>
                <div className={classes.project4}>
                    <div className={classes.topbar}>
                        <div className={classes.red}></div>
                        <div className={classes.yellow}></div>
                        <div className={classes.green}></div>
                        <span>/Algorithms</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default portfolio;