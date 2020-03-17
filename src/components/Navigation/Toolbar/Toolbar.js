import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
            <DrawerToggle toggle ={props.toggle}/>
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
