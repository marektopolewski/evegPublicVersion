import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Card from './Card';
import {getProductDetails} from "./model";

export default class ProductPage extends Component {
  constructor(props, context){

    super(props, context);
  }
  render(){
    const prods = getProductDetails();
    return (

      <div className="product-page-container">

        <Navigation />
        <div className="products-container">
          <Card item = {prods["apples"]} />
        </div>
        <Footer />

      </div>

    );
  }
}
