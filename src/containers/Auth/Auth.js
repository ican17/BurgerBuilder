import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import InputElement from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as utilities from '../../shared/utilities';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                validation: {
                    required: true,
                    isEmail: true
                },
                value: '',
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                validation: {
                    required: true,
                    minLenght: 6,
                },
                value: '',
                valid: false,
                touched: false
            },
        },
        isSingup: true,
    }

    submitHandler = (e) => {
        e.preventDefault();
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        this.props.onAuth(email, password, this.state.isSingup);
    }

    inputChangedHandler = (e, inputId) => {
        const updatedForm = { ...this.state.controls };
        const updatedElement = { ...updatedForm[inputId] };
        updatedElement.value = e.target.value;
        updatedElement.valid = utilities.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedForm[inputId] = updatedElement;
        this.setState({ controls: updatedForm });
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return {
                isSingup: !prevState.isSingup
            }
        })
    }

    render() {
        let redirect = null;
        if(this.props.isAuth){
            redirect = <Redirect to="/"/>
        }
        const controls = [];
        for (const key in this.state.controls) {
            if (this.state.controls.hasOwnProperty(key)) {
                controls.push({
                    id: key,
                    config: this.state.controls[key]
                });
            }
        }

        let errorMsg;
        if (this.props.error) {
            errorMsg = (<p>{this.props.error.message}</p>)
        }
        let form = <div className={classes.Auth}><Spinner /></div>;
        if (!this.props.loading) {
            form = (
                <div className={classes.Auth}>
                    {redirect}
                    {errorMsg}
                    <h4>Enter you crendentials bellow</h4>
                    <form onSubmit={this.submitHandler}>
                        {controls.map(val => {
                            return <InputElement key={val.id} elementType={val.config.elementType}
                                elementConfig={val.config.elementConfig}
                                value={val.config.value}
                                invalid={!val.config.valid}
                                shouldValidate={val.config.validation}
                                touched={val.config.touched}
                                changed={(e) => { this.inputChangedHandler(e, val.id) }} />
                        })}
                        <Button btnType="Success" clicked={this.submitHandler} >Submit</Button>
                    </form>
                    <Button btnType="Danger" clicked={this.switchModeHandler} >Switch To {this.state.isSingup ? 'SIGNIN' : 'SIGNUP'}</Button>
                </div>);
        }
        return form;
    }
}

const mapPropsToState = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth : state.auth.token != null
    }
}
const mapDispatchToState = dispatch => {
    return {
        onAuth: (email, password, isSingup) => dispatch(actions.auth(email, password, isSingup))
    }
}
export default connect(mapPropsToState, mapDispatchToState)(Auth);
