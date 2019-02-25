import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import PaymentPage from './PaymentPage';
import { ToastContainer } from "react-toastify";
import './model.js';
import './App.css';
import './Resets.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {};
    this.updates = this.updates.bind(this);
  }

  updates(){
    this.setState(this.state);
  }

  render() {
    return (
      <Router>
      <div className="App">
      <Navigation />
      <Route exact path="/" component={
          ({history}) => <ProductPage updates={this.updates} history={history} />
        } />
      <Route exact path="/checkout" component={
          ({history}) => <CheckoutPage updates={this.updates} history={history} />
        } />
      <Route exact path="/payment" component={
          ({history}) => <PaymentPage updates={this.updates} history={history} />
        } />
        <ToastContainer />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
