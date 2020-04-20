import React, {useState} from 'react';
import {connect} from 'react-redux';
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
            <Toolbar isAuth = {props.isAuth} toggle={toggleSideDrawer}/>
            <SideDrawer isAuth = {props.isAuth}  open = {showSideDrawer} close ={sideDrawerCloseHandler}/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>

    );
}
const mapPropsToState = state =>{
    return {
        isAuth : state.auth.token != null
    }
}
export default connect(mapPropsToState)(Layout);