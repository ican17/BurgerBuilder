import React from 'react';
import classes from '../DrawerToggle/DrawerToggle.module.css';

function DrawerToggle(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle;
