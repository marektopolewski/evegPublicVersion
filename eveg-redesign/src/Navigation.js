import React, { Component } from 'react';
import { LogoNav, CartIconNav } from './Asset';
import Basket from './Basket';

export default class Navigation extends Component {
  constructor(props, context){
    super(props,context);
  }
  render(){
    return (

      <nav className="navigation">
        <LogoNav />

        <CartIconNav style={{
          marginLeft:'auto'
        }} />
      </nav>

    );
  }
};
