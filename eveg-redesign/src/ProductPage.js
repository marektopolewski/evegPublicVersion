import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default class ProductPage extends Component {
  constructor(props, context){
    super(props, context);
  }
  render(){
    return (

      <div className="product-page-container">

        <Navigation />
        <Footer />

      </div>

    );
  }
}
