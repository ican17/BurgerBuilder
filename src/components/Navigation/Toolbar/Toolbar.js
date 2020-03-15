import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <Logo/>
                <nav>
                    <NavigationItems/>
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;
