import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import ConfirmationPage from './ConfirmationPage';
import PaymentPage from './PaymentPage';
import FaqPage from './FaqPage';
import ClickAndCollectPage from './ClickAndCollectPage';
import DocumentTitle from 'react-document-title';
import { ToastContainer, Slide } from "react-toastify";
import './model.js';
import './App.css';
import './Resets.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      disableBasket: false
    };
    this.updates = this.updates.bind(this);
    this.order = {
      paymentDetails: {
      },
      items: []
    };
  }

  updates(){
    this.setState(this.state);
  }

  render() {
    return (
      <Router>
          <div className="App">
              <Navigation order={this.order}/>
          <Switch>
              <Route exact path="/" component={
                ({history}) => <DocumentTitle title="eVeg | Products"><ProductPage updates={this.updates} history={history} /></DocumentTitle>
              } />
              <Route exact path="/checkout" component={
                ({history}) => <DocumentTitle title="eVeg | Checkout"><CheckoutPage updates={this.updates} history={history} /></DocumentTitle>
              } />
              <Route exact path="/payment" component={
                ({history}) => <DocumentTitle title="eVeg | Payment"><PaymentPage order={this.order} updates={this.updates} history={history} /></DocumentTitle>
              } />
              <Route exact path="/confirmation" component={
                ({history}) => <DocumentTitle title="eVeg | Order Confirmation"><ConfirmationPage order={this.order} updates={this.updates} history={history} /></DocumentTitle>
              } />
              <Route exact path="/faq" component={
                ({history}) => <DocumentTitle title="eVeg | FAQ"><FaqPage history={history} /></DocumentTitle>
              } />
              <Route exact path="/click-and-collect" component={
                ({history}) => <DocumentTitle title="eVeg | C&C Policy"><ClickAndCollectPage history={history} /></DocumentTitle>
              } />
              <Route component={                                            /// default route
                  ({history}) => <DocumentTitle title="eVeg | Products"><ProductPage updates={this.updates} history={history} /></DocumentTitle>
                } />
              } />
          </Switch>
              <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar
                transition={Slide}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange={false}
                draggable={false}
                pauseOnHover={false}
              />
              <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
