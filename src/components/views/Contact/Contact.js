import React from 'react';
import Form from './Form';
import Card from './Card';
import Aux from '../../hoc/Auxi';

import classes from './Contact.module.css';

const contact = ( props ) => {

    return (
        <Aux>
        <h1 className={classes.H}>Contact Information</h1>
        <div className={classes.Contact}>
            <Card />
            <Form />
        </div>
        </Aux>
    )

}

export default contact;