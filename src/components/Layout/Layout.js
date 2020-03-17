import React, {useState} from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    const [showSideDrawer,setShowSideDrawer] =  useState(true);
    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }
    return (
        <Aux>
            <Toolbar/>
            <SideDrawer open = {showSideDrawer} close ={sideDrawerCloseHandler}/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>

    );
}

export default Layout;