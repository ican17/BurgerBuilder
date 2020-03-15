import React from 'react';
import classes from '../BuildControl/BuildControl.module.css';

function BuildControl(props) {
    return (
        <div>
            <div className={classes.BuildControl}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    )
}


export default BuildControl;
