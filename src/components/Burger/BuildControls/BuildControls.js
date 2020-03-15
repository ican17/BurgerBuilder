import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from '../BuildControls/BuildControls.module.css';

const BUILD_CONTROLS = [
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
]
function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            {BUILD_CONTROLS.map(ctr => <BuildControl
                label={ctr.label}
                key={ctr.label}
                added={() => props.ingredientAdded(ctr.type)}
                removed={() => props.ingredientRemoved(ctr.type)}
                disabled = {props.disabledInfo[ctr.type]}/>)}
        </div>
    )
}

export default BuildControls;

