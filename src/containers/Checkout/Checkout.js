import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        let checkout = <Redirect to="/"/>
        if(this.props.ings){
            const purshased = this.props.purshased? <Redirect to="/"/>  : null
            checkout = (<div>
            {purshased}
            <CheckoutSummary ingredients ={this.props.ings}
            checkoutCancelled ={this.checkoutCancelledHandler}
            checkoutContinued ={this.checkoutContinuedHandler}/>
            <Route path={this.props.match.path +'/contact-data'}
             component={ContactData}/>
         </div>);
        }
        return checkout;

    }
}
const mapStateToProps = state => {
    return {
        ings : state.burgerB.ingredients,
        purshased : state.order.purshased
    }
}
export default connect(mapStateToProps)(Checkout);
