import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from '../BuildControls/BuildControls.module.css';

const BUILD_CONTROLS = [
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
]
function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <div>Current price: <strong>{props.price.toFixed(2) } DZD</strong></div>
            {BUILD_CONTROLS.map(ctr => <BuildControl
                label={ctr.label}
                key={ctr.label}
                added={() => props.ingredientAdded(ctr.type)}
                removed={() => props.ingredientRemoved(ctr.type)}
                disabled = {props.disabledInfo[ctr.type]}/>)}
                <button 
                className={classes.OrderButton}
                 disabled = {!props.purshasable}
                 onClick={props.order}>Order Now</button>
        </div>
    )
}

export default BuildControls;

