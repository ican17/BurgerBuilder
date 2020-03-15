import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 0
    }

    updatePurshasable(ingridientsUpdated){
        const ingredients = {...ingridientsUpdated};
        const temp = Object.keys(ingredients)
        .map(key => {
            return ingredients[key];
        });
        console.log(temp);
        const sum = temp.reduce((sum, val) => sum + val,0);
        console.log(sum);
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
                disabledInfo = {disabledInfo}
                price ={this.state.totalPrice}
                purshasable ={this.state.purshasable}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;