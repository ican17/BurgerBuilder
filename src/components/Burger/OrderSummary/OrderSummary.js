import React from 'react';
import Aux from '../../../hoc/Auxilary';

function OrderSummary(props) {
    const listIngredients = [];
    for (const key in props.ingredients) {
        if (props.ingredients.hasOwnProperty(key)) {
            listIngredients.push(<li key={key}> {key.toUpperCase()} : {props.ingredients[key]}</li>);
        }
    }
    return (
        <Aux>
            <center><h3>Your Order</h3></center>
            <p>It contains:</p>
            <ul>
                {listIngredients}
            </ul>
            <p>Would you like to continue and purshase it?</p>
        </Aux>
    )
}

export default OrderSummary;
