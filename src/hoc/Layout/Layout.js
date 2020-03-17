import React, {useState} from 'react';
import Aux from '../Auxilary/Auxilary';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    const [showSideDrawer,setShowSideDrawer] =  useState(false);
    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }
    const toggleSideDrawer = ()=>{
        setShowSideDrawer(!showSideDrawer);
    }
    return (
        <Aux>
            <Toolbar toggle={toggleSideDrawer}/>
            <SideDrawer open = {showSideDrawer} close ={sideDrawerCloseHandler}/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>

    );
}

export default Layout;