import React from 'react';
import classes from '../Backdrop/Backdrop.module.css';

function Backdrop(props) {
    return (
        <div className={classes.Backdrop} onClick={props.closeModal}>
            
        </div>
    )
}

export default Backdrop;
