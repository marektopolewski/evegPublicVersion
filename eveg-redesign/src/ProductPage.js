import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Card from './Card';

export default class ProductPage extends Component {
  constructor(props, context){

    super(props, context);
  }
  render(){
    const appleItem = {id:1, name:'Apple (Braeburn)', expiryDate:10, form:'Pack of 6', maxAmount:-1, price:2.99};
    return (

      <div className="product-page-container">

        <Navigation />
        <div className="products-container">
          <Card item = {appleItem} />
        </div>
        <Footer />

      </div>

    );
  }
}
