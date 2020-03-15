import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.4,
    meat: 1.3,
    cheese: 0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            meat: 0,
            cheese: 0, 
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] ++;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] === 0){
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] --;
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }
    render(){
        const disabledInfo = {...this.state.ingredients};
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] === 0; 
            }
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabledInfo = {disabledInfo}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;