import React from 'react';
import classes from '../DrawerToggle/DrawerToggle.module.css';

function DrawerToggle(props) {
    return (
        <div onClick={props.toggle}>
            Menu
        </div>
    )
}

export default DrawerToggle;
