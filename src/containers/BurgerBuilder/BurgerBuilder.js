import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENTS_PRICES = {
    salad: 10,
    meat: 45,
    cheese: 20
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            meat: 0,
            cheese: 0, 
        },
        purshasable : false,
        purshasing : false,
        totalPrice: 0,
        loading: false
    }

    purshaseHandler = ()=>{
        this.setState({purshasing: true});
    }
    updatePurshasable(ingridientsUpdated){
        const ingredients = {...ingridientsUpdated};
        const temp = Object.keys(ingredients)
        .map(key => {
            return ingredients[key];
        });
        const sum = temp.reduce((sum, val) => sum + val,0);
        this.setState({purshasable: sum > 0});

    }
    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] ++;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurshasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] === 0){
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] --;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurshasable(updatedIngredients);
    }

    closePurshaseHandler = ()=>{
        this.setState({purshasing: false});
    }

    continuePurshaseHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer:{
                name: 'Kada',
                country: 'Algeria'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(res => {
           this.setState({loading: false, purshasing:false})
        })
        .catch(err => this.setState({loading: false, purshasing:false}));
    }
    render(){
        const disabledInfo = {...this.state.ingredients};
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] === 0; 
            }
        }
        let orderSummary = <OrderSummary 
        ingredients ={this.state.ingredients}
        purshaseCanceled={this.closePurshaseHandler}
        purshaseContinue={this.continuePurshaseHandler}
        price = {this.state.totalPrice}/>;
        if(this.state.loading){
            orderSummary = <Spinner/>;
        }
        return (
            <Aux>
                <Modal show={this.state.purshasing} closeModal = {this.closePurshaseHandler}>
                    {orderSummary}   
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabledInfo = {disabledInfo}
                price ={this.state.totalPrice}
                purshasable ={this.state.purshasable}
                order = {this.purshaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;