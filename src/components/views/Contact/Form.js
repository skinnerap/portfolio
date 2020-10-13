import React from 'react';
import { Spring } from 'react-spring/renderprops';
import classes from './Contact.module.css';

const form = () => {
    return (
        <Spring from={{ opacity: 0}} to={{ opacity: 1}} config={{ delay: 1200, duration: 1200}}>
            {props => (
                <div style={props}>
                    <form>
                        <input type='text' placeholder='Name'></input>
                        <input type='email' placeholder='Email'></input>
                        <textarea placeholder='Message'></textarea>
                        <div className={classes.Radio}>
                            <label for='choice-business'>
                                Business
                            </label>
                            <input className={classes.RadioBtn} type='radio' name='choice-business' />
                            <span className={classes.Span}> - or - </span>
                            <label for='choice-personal'>
                                Personal
                            </label>
                            <input className={classes.RadioBtn} type='radio' name='choice-personal' />
                            
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            )}      
        </Spring>
    )
}

export default form;