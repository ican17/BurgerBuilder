import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

function Layout(props) {
    return (
        <Aux>
            <Toolbar/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>

    );
}

export default Layout;