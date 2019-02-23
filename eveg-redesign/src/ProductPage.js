import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Card from './Card';
import {ToastContainer} from "react-toastify";
import {getBasketItems, getProductList} from "./model";

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
          {getProductList().map((item, i) =>
              <Card itemID = {item} updates={() => this.setState(this.state)} />
          )}
        </div>

        <Footer style={{
            position: 'unset'
        }} />
        <ToastContainer />
      </div>
    );
  }
}
