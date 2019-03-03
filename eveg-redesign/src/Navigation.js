import React, { Component } from 'react';
import { LogoNav } from './Asset';
import { BasketButton } from './Basket';



export default class Navigation extends Component {
  constructor(props, context){
    super(props,context);
  }
  render(){
    return (

      <nav className="navigation">
        <LogoNav />

        <BasketButton disabled={this.props.disableBasket} />

      </nav>

    );
  }
};
