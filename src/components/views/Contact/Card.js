import React from 'react';
import { Spring } from 'react-spring/renderprops'
import classes from './Contact.module.css';

const card = () => {

    return (
        <Spring from={{ opacity: 0, marginTop: '-500px'}} to={{ opacity: 1, marginTop: '0'}} config={{ duration: 800}}>
            {props => (
                <div style={props}>
                    <div className={classes.Card}>
                <div className={classes.CardHeader}>
                    <h4>
                        Details:
                    </h4>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="#2E3A59"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9261 20.0557C20.397 18.235 22 15.3047 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.3047 3.60301 18.235 6.07388 20.0557C6.11934 20.0892 6.16509 20.1223 6.21112 20.1551C6.65997 20.4742 7.1363 20.7573 7.63587 21C8.95464 21.6407 10.4354 22 12 22C13.5646 22 15.0454 21.6407 16.3641 21C16.3909 20.987 16.4177 20.9738 16.4443 20.9606C16.9657 20.7015 17.4613 20.3982 17.9261 20.0557ZM17.2287 18.055C18.926 16.588 20 14.4194 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.4194 5.07401 16.588 6.77128 18.055C7.80066 16.2313 9.75654 15 12 15C14.2435 15 16.1993 16.2313 17.2287 18.055ZM15.5567 19.1679C14.8921 17.8803 13.5488 17 12 17C10.4512 17 9.10792 17.8803 8.44332 19.1679C9.51467 19.7005 10.7224 20 12 20C13.2776 20 14.4853 19.7005 15.5567 19.1679Z" fill="#2E3A59"/>
                    </svg>
                    <a href='/' alt='Alexander Skinner'>: Alexander Paul Skinner</a>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="#2E3A59"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 15.25 12 21 12 21C12 21 19 15.25 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10ZM7 10C7 7.23457 9.23457 5 12 5C14.7654 5 17 7.23457 17 10C17 11.8607 15.6843 14.1296 13.9654 16.1861C13.2714 17.0165 12.5732 17.7402 12 18.2974C11.4268 17.7402 10.7286 17.0165 10.0346 16.1861C8.31569 14.1296 7 11.8607 7 10Z" fill="#2E3A59"/>
                    </svg>
                    <a href='/' alt='Richmond, VA'>: Richmond, VA</a>
                </div>
                <div>
                    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23857 2.23857 0 5 0H45C47.7615 0 50 2.23857 50 5V35C50 37.7615 47.7615 40 45 40H5C2.23857 40 0 37.7615 0 35V5ZM45 9.67125V35H5V9.67127L25 23.0045L45 9.67125ZM42.993 5H7.00698L25 16.9953L42.993 5Z" fill="#032019"/>
                    </svg>
                    <a href='mailto:alex.paul.skinner@gmail.com' alt='alex.paul.skinner@gmail.com'>: alex.paul.skinner@gmail.com</a>
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.707 12.293C17.316 11.902 16.684 11.902 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30101L11.707 7.70701C12.098 7.31601 12.098 6.68401 11.707 6.29301L7.70697 2.29301C7.31597 1.90201 6.68397 1.90201 6.29297 2.29301L3.58097 5.00501C3.20097 5.38501 2.98697 5.90701 2.99497 6.44001C3.01797 7.86401 3.39497 12.81 7.29297 16.708C11.191 20.606 16.137 20.982 17.562 21.006C17.567 21.006 17.585 21.006 17.59 21.006C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C22.098 17.317 22.098 16.685 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.70697 15.293C5.34097 11.927 5.01497 7.64201 4.99497 6.41901L6.99997 4.41401L9.58597 7.00001L8.29297 8.29301C8.05397 8.53101 7.95197 8.87501 8.02097 9.20501C8.04497 9.32001 8.63197 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C15.127 16.049 15.468 15.946 15.706 15.707L17 14.414L19.586 17L17.58 19.005Z" fill="#2E3A59"/>
                    </svg>
                    <a href='tel:5403189312' alt='Phone Number: 5403189312'>: (540) 318 - 9312</a>
                </div>
            </div>
                </div>
            )}      
        </Spring>
    )

}

export default card;