import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxilary/Auxilary';
import InputElement from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import withErrorHandling from '../../../hoc/withErrorHandling/WithErrorHandling';


class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                validation:{
                    required :  true,
                    minLenght : 3,
                    maxLenght: 20,
                },
                value: '', 
                valid : false,
                touched : false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                validation:{
                    required :  true,
                },
                value: '',
                valid : false,
                touched : false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ],
                },
                validation:{},
                value: 'fastest',
                valid: true,
            },
        },
        formIsValid : false,
    }

    checkValidity(value, rules){
        if(!rules){
            return true;
        }
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLenght){
            isValid = value.trim().length >= rules.minLenght && isValid;
        }

        if(rules.maxLenght){
            isValid = value.trim().length <= rules.maxLenght && isValid;
        }


        return isValid;
    }

    orderHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (const key in this.state.orderForm) {
            if (this.state.orderForm.hasOwnProperty(key)) {
                formData[key] =  this.state.orderForm[key].value;
                
            }
        }
        const order = {
            ingredients: this.props.ings,
            totalPrice: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }

        this.props.onPurshaseBurger(order, this.props.token);
        
    }

    inputChangedHandler = (e, inputId)=>{
        const updatedOrderForm = {...this.state.orderForm};
        const updatedElement = {...updatedOrderForm[inputId]};
        updatedElement.value = e.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched =  true;
        updatedOrderForm[inputId] = updatedElement;

        let formIsValid = true;
        for (const key in updatedOrderForm) {
            if (updatedOrderForm.hasOwnProperty(key)) {
                formIsValid = updatedOrderForm[key].valid && formIsValid                
            }
        }
        this.setState({orderForm : updatedOrderForm, formIsValid: formIsValid});
    }
    render() {
        const orderForm = [];
        for (const key in this.state.orderForm) {
            if (this.state.orderForm.hasOwnProperty(key)) {
                orderForm.push({
                    id: key,
                    config: this.state.orderForm[key]
                });
            }
        }

        let form = (
            <Aux>
                <h4>Enter your contact data bellow</h4>
                <form onSubmit={this.orderHandler}>
                    {orderForm.map(val => {
                        return <InputElement key={val.id} elementType={val.config.elementType}
                            elementConfig={val.config.elementConfig}
                            value={val.config.value}
                            invalid = {!val.config.valid}
                            shouldValidate = {val.config.validation}
                            touched = {val.config.touched}
                            changed={(e) => { this.inputChangedHandler(e, val.id) }} />
                    })}
                    <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
            </Aux>
        );
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerB.ingredients,
        price : state.burgerB.totalPrice,
        loading: state.order.loading, 
        token : state.auth.token,
        userId : state.auth.userId

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurshaseBurger : (orderData, token) => dispatch(actions.purshaseBurger(orderData, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(ContactData, axios));
