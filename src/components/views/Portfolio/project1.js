import React from 'react';
import classes from './Portfolio.module.css';

const project1 = () => {

    return (
        <div onClick={() => this.showModalHandler(1)} onMouseEnter={() => this.handleHover(1)} onMouseLeave={() => this.handleHoverLeave(1)} className={classes.project1}>
            <div className={classes.topbar}>
                <div className={classes.red}></div>
                <div className={classes.yellow}></div>
                <div className={classes.green}></div>
                <span>/File-Uploading</span>
        
                <h3 style={this.state.opacity1} className={classes.portHeader}>
                    <strong>Memorial Association</strong> <br /> File Upload Platform <br />+<br /> Administration Controls
                </h3>
        
            </div>
        </div>
    )

}

export default project1;