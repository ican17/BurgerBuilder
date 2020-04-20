import React, {useEffect} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';


function App(props) {

  useEffect(()=>{
     props.onAuthCheckState();
  });

  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout"  component={Checkout} />
          <Route path="/auth"  component={Auth} />
          <Route path="/logout"  component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}
const mapDispatchToProps =  dispatch => {
  return {
    onAuthCheckState : () => dispatch(actions.checkAuthState())
  }
}
export default connect(null, mapDispatchToProps)(App);
