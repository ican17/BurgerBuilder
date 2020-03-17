import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav className={classes.MobileOnly} >
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;
