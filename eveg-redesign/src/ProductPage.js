import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Card from './Card';
import {ToastContainer} from "react-toastify";

export default class ProductPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }
  render(){
    return (

      <div className="product-page-container">

        <Navigation />
        <div className="products-container">
          <Card itemID = "apples" updates={() => this.setState(this.state)} />
          <Card itemID = "cherries" updates={() => this.setState(this.state)} />
          <Card itemID = "bananas" updates={() => this.setState(this.state)} />
        </div>
        <Footer />
        <ToastContainer />

      </div>

    );
  }
}
