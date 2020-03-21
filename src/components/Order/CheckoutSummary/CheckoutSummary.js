import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from '../CheckoutSummary/CheckoutSummary.module.css';

function CheckoutSummary(props) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your Order</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={() => console.log("cancel")} btnType="Danger">CANCEL</Button>
            <Button clicked={() => console.log("checkout")} btnType="Success">CONTINUE</Button>

        </div>
    )
}

export default CheckoutSummary;
