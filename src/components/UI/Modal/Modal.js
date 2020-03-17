import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal/Modal.module.css';

function Modal(props) {
    return (
        <Aux>
            {props.show?<Backdrop closeModal = {props.closeModal}/>:null}
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>

        </Aux>

    )
}

export default Modal;