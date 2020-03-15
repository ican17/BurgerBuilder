import React from 'react';
import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = "/" active={true}>Burger Builder</NavigationItem>
            <NavigationItem link = "/">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
