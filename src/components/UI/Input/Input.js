import React from 'react';
import classes from '../Input/Input.module.css';

function Input(props) {
   
    let inputElement = null;
    const inputClasses =[classes.InputElement];
 //   console.log(props.invalid , props.shouldValidate , props.touched)
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input  className={inputClasses.join(' ')}  {...props.elementConfig} value={props.elementValue} onChange={props.changed}/>;
            break;
        case 'textarea':
            inputElement = <textarea className={inputClasses.join(' ')}  {...props.elementConfig} value={props.elementValue} onChange={props.changed}/>;
            break;
        case 'select':
            inputElement = <select className={inputClasses.join(' ')} value = {props.elementValue} onChange={props.changed}>
                {props.elementConfig.options.map(val => <option key={val.value} value ={val.value}>{val.displayValue}</option>)}
            </select>
            break;
        default:
            inputElement = <input className={classes.InputElement}  {...props.elementConfig} value={props.elementValue} onChange={props.changed}/>
            break;
    }
    return (
        <div className={classes.Input}>
           <label className={classes.Label}></label> 
           {inputElement}
        </div>
    )
}

export default Input;
