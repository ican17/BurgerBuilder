import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from '../SideDrawer/SideDrawer.module.css';

function SideDrawer(props) {
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer;
