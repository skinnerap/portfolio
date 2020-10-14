import React from 'react';
import { Spring } from 'react-spring/renderprops';

const project = ( props ) => {

    return (
        <Spring from={{ opacity: 0}} to={{ opacity: 1}} config={{duration: 600}}>
            {props => (
                <div style={props}>
                    
                </div>
            )}      
        </Spring>
    )

}

export default project;
