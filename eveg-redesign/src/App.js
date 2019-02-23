import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import PaymentPage from './PaymentPage';
import logo from './logo.svg';
import './model.js';
import './App.css';
import './Resets.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={
          ({history}) => <ProductPage history={history} />
        } />
      <Route exact path="/checkout" component={
          ({history}) => <CheckoutPage history={history} />
        } />
      <Route exact path="/payment" component={
          ({history}) => <PaymentPage history={history} />
        } />
      </div>
      </Router>
    );
  }
}

export default App;
