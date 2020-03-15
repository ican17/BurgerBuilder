import React from 'react';
import classes from '../Logo/Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="BurgerBuilder"/>
        </div>
    )
}

export default Logo;
