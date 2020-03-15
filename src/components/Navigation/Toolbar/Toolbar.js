import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../../Logo/Logo';

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <Logo/>
                <nav>....</nav>
            </header>
        </div>
    )
}

export default Toolbar;
