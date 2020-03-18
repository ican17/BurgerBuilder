import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilary/Auxilary';

function withErrorHandling(WarrpedComponent, axios) {
    return class WithErrorHandling extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            
            this.reqInterceptor = axios.interceptors.request.use(null, error => {
                // we have got an error ==> do something
                this.setState({error: null});
                return Promise.reject(error);
            });
            this.resInterceptor = axios.interceptors.response.use(null, error => {
                // we have got an error ==> do something
                this.setState({error: error});
                return Promise.reject(error);
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = ()=>{
            this.setState({error:null});
        }
        render() {
            return (
                <Aux>
                    <Modal show = {this.state.error} closeModal = {this.errorConfirmedHandler}> 
                        {this.state.error? this.state.error.message:null}
                    </Modal>
                    <WarrpedComponent {...this.props} />
                </Aux>

            )
        }
    }


}

export default withErrorHandling;