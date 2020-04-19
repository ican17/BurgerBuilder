import React, { Component } from 'react';
import classes from '../Orders/Orders.module.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrors from '../../hoc/withErrorHandling/WithErrorHandling';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    
    componentDidMount(){
        this.props.onFetchOrders(this.props.token);
    }
    render() {
        let orders = <Spinner/>;
        if(!this.props.loading){
            orders = this.props.orders.map(order => <Order key={order.id} ingredients = {order.ingredients} price ={order.totalPrice}/>)
        }
        return (
            <div className={classes.Orders}>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders : state.order.orders,
        loading : state.order.loading,
        token : state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : (token) => dispatch(actions.fetchOrders(token))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrors(Orders, axios));
