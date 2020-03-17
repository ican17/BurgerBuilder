import React, {useEffect} from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
import classes from '../Modal/Modal.module.css';

function Modal(props) {
    
    return (
        <Aux>
            <Backdrop show={props.show} close = {props.closeModal}/>
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

function areEqual(prevProps, nextProps) {
 return prevProps.show===nextProps.show? true: false;
}
export default React.memo(Modal, areEqual);
