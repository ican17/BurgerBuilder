import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';
import classes from '../SideDrawer/SideDrawer.module.css';

function SideDrawer(props) {
    let attachedClasses = props.open? [classes.SideDrawer, classes.Open]:[classes.SideDrawer, classes.Close];
    
    return (
        <Aux>
            <Backdrop show={props.open} close= {props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    )
}

export default SideDrawer;
