import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout/Layout.module.css';


function Layout(props) {
    return (
        <Aux>
            <div>Toolbar, sidedrawer, backdrop</div>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>

    );
}

export default Layout;