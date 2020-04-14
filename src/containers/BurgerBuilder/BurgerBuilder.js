import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandling from '../../hoc/withErrorHandling/WithErrorHandling';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purshasable: false,
        purshasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        /*  axios.get('/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(err => {
                //this.setState({error:true});
                this.setState({ingredients: {
                    cheese:0,
                    meat:0,
                    salad: 0,
                },
                error: true
            })
            });
 */
    }
    purshaseHandler = () => {
        this.setState({ purshasing: true });
    }
    updatePurshasable(ingredients) {
        const temp = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            });
        const sum = temp.reduce((sum, val) => sum + val, 0);
        return sum > 0? true: false;

    }

    closePurshaseHandler = () => {
        this.setState({ purshasing: false });
    }

    continuePurshaseHandler = () => {

   
        this.props.history.push({
            pathname: '/checkout',

        });
    }
    render() {
        const disabledInfo = { ...this.props.ings };
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] === 0;
            }
        }
        let orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purshaseCanceled={this.closePurshaseHandler}
            purshaseContinue={this.continuePurshaseHandler}
            price={this.props.price} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purshasing} closeModal={this.closePurshaseHandler}>
                    {orderSummary}
                </Modal>
                {this.props.ings !== null ?
                    <Aux>
                        {this.state.error ? <center><p>Ingredients Were loaded Internaly</p></center> : null}
                        <Burger ingredients={this.props.ings} />
                        <BuildControls
                            ingredientAdded={this.props.onIngredientAdd}
                            ingredientRemoved={this.props.onIngredientRemove}
                            disabledInfo={disabledInfo}
                            price={this.props.price}
                            purshasable={this.updatePurshasable(this.props.ings)}
                            order={this.purshaseHandler} />
                    </Aux>
                    :
                    <Spinner />
                }
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (type) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingType: type }),
        onIngredientRemove: (type) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingType: type }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(BurgerBuilder, axios));