import React, { Component } from 'react';
import classes from '../Orders/Orders.module.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrors from '../../hoc/withErrorHandling/WithErrorHandling';

class Orders extends Component {
    state={
        orders: [],
        loading: true,
    }
    componentDidMount(){
        axios.get('orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (const key in res.data) {
                if (res.data.hasOwnProperty(key)) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id : key
                    })
                }
            }
            this.setState({loading:false, orders: fetchedOrders})

        })
        .catch(err => {
            this.setState({loading:false});
        });
    }
    render() {
        return (
            <div className={classes.Orders}>
                {this.state.orders.map(order => <Order key={order.id} ingredients = {order.ingredients} price ={order.totalPrice}/>)}
            </div>
        )
    }
}

export default withErrors(Orders, axios);
