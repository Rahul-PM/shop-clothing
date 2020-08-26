import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.components';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.components';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCUrrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCUrrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCUrrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCUrrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signIn" render={() => this.props.currentUser ?
            (<Redirect to="/" />) :
            (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
  setCUrrentUser: user => dispatch(setCUrrentUser(user))
})
export default connect
  (mapStateToProps,
  mapDispatchToProps)
  (App);
