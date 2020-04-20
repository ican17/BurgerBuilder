import React from 'react';
import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

function NavigationItems(props) {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = "/" exact>Burger Builder</NavigationItem>
            {props.isAuth? <NavigationItem link = "/orders">Orders</NavigationItem>:null}
            {props.isAuth? 
            <NavigationItem link = "/logout">Logout</NavigationItem>
            :
            <NavigationItem link = "/auth">Authenticate</NavigationItem>
            }
            
        </ul>
    )
}

export default NavigationItems;
