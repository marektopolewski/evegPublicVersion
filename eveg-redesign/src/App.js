import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ProductPage from './ProductPage';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Route exact path="/" component={
          ({history}) => <ProductPage history={history} />
        } />
      </Router>
      </div>
    );
  }
}

export default App;
