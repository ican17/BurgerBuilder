import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';

function Toolbar(props) {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>Menu</div>
                <div>Logo</div>
                <nav>....</nav>
            </header>
        </div>
    )
}

export default Toolbar;
