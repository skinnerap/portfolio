import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Auxi';
import classes from './Modal.module.css';

const modal = ( props ) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div 
                className={classes.Modal}
                style=
                { 
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                        display: props.show ? 'flex' : 'hidden'
                    } 
                }
            >
                {props.children}
            </div>
        </Aux>
        
    )

}

export default modal;