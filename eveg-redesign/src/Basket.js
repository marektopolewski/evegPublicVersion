import React, { Component } from 'react';
import { CartIconNav, CloseIcon, Button } from './Asset';
import { Link } from "react-router-dom";
import {
  removeProductFromBasket,
  changeProductQuantity,
  getProductDetails,
  createEmptyBasket,
  addToBasket,
  readBasket,
  getBasketItems,
  getTotalBasketCost,
  formatPrice
} from './model.js';
import ReactTooltip from 'react-tooltip';
// import { Dropdown } from 'semantic-ui-react';
// import NumberPicker from 'semantic-ui-react-numberpicker';

/**
 * BASKET ITEM MODEL:
 * Basket : [
 *    BasketItem {
 *       name: ...,
 *       quantity: ...,
 *       id: ...,
 *       price: ...,
 *    }
 * ]
 */

class BasketItem extends Component {
  constructor(props, context){
    super(props, context);
    this.promptConfirmation = this.promptConfirmation.bind(this);
    this.state = {
      pendingConfirmation: false
    };
  }

  promptConfirmation(){
    this.setState({
      pendingConfirmation: true
    })
  }


  render(){
    return (
      <tr className="basket-item-container">
      <td style={{
        display: 'flex'
      }}>
        <div className="basket-item-image"
          style={{
            backgroundImage: `url('${this.props.image}')`
          }}
        />
        <b style={{
          marginLeft: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>{this.props.name}</b>
      </td>
          <td>{this.props.units}</td>
          <td>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <button style={{
            marginLeft: '10px',
            marginRight: '10px'
          }} className="number-picker button-fade" onClick={
            () => this.props.incQuantity(this.props.name, this.props.quantity)
          }>+</button>
          {this.props.quantity}
            <button
            {
              ...Object(
                this.props.quantity > 1 ? {} : {
                'data-tooltip': "Cannot reduce product quantity to 0. Remove instead."
                }
              )
            }
            style={{
              marginLeft: '10px',
              marginRight: '10px',
            }}
            disabled={this.props.quantity >1 ? false : true}
            className="number-picker button-fade" onClick={
              () => this.props.decQuantity(this.props.name, this.props.quantity)
            }>
            -
            </button>
          </div>
          </td>
          <td>{`£${(this.props.price * this.props.quantity).toFixed(2)}`}</td>
          <td>
          {
            !this.state.pendingConfirmation ?
            <button
            style={{
              width: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onClick={this.promptConfirmation}
            className="button-fade">
              <CloseIcon style={{
                height: '15px',
                width: '15px',
                fill: '#464646'
              }} />
            </button>
            :
            <button
            style={{
              width: '100px',
              textAlign: 'center'
            }}
            onClick={() => this.props.removeItem(this.props.name)}
            className="button-fade">
              Remove {this.props.name}?
            </button>
          }

          </td>
        </tr>);
  }

}



class Basket extends Component {
  constructor(props, context){
    super(props, context);
    this.incQuantity = this.incQuantity.bind(this);
    this.decQuantity = this.decQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {};
  }

  // TODO: Raise error if user tried to go below 0.
  decQuantity(name, quantity){
    changeProductQuantity(name.toLowerCase(), Math.max(quantity - 1, 0));
    this.setState(this.state);
    this.props.update();
  }

  incQuantity(name, quantity){
    changeProductQuantity(name.toLowerCase(), quantity +1);
    console.log(readBasket());
    this.setState(this.state);
    this.props.update();
  }

  removeItem(name){
    console.log("Removing", name);
    removeProductFromBasket(name.toLowerCase());
    this.setState(this.state);
    this.props.update();
  }

  render(){
    return (
      <div style={this.props.style} className="basket-container">
        <div className="basket-header">
          <h2>Your Basket</h2>

          <table>
          <tbody>
          <tr>
            <th>Added Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {
            getBasketItems().map((item, i) =>
            <BasketItem
              key={i}
              incQuantity={this.incQuantity}
              decQuantity={this.decQuantity}
              removeItem={this.removeItem}
              {...item}
            />
          )
          }
        </tbody>
        </table>

        {this.props.children}

        </div>
      </div>
    );
  }

}


class BasketButton extends Component {
  constructor(props, context){
    super(props, context);
    console.log(getProductDetails());
    createEmptyBasket();
    addToBasket("apples", 3);
    addToBasket("bananas", 2);

    console.log(readBasket());
    this.state = {
      totalCost: 0,
      basketVisible: true,
    }
    this.toggleBasket = this.toggleBasket.bind(this);
  }

  toggleBasket(){
    this.setState({
      ...this.state,
      basketVisible: !this.state.basketVisible
    })
  }

  render(){
    return (
      <div className="basket-nav-container">

      <button onClick={this.toggleBasket} className="button-hover">
        <CartIconNav />
      </button>
        <p style={{
          marginLeft: '15px',
          fontWeight: 'bold'
        }}>{
          formatPrice(getTotalBasketCost())
        }</p>


      {
        this.state.basketVisible ?
        <Basket update={() => this.setState(this.state)}>
          <div className="sub-basket-container">
            <div className="basket-cost-container">
              <h2 style={{margin: 0, fontWeight: 'normal'}}>Total</h2>
              <h2 style={{margin: 0, marginLeft: '10px'}}>{formatPrice(getTotalBasketCost())}</h2>
            </div>
            <Link to="/checkout" className="general-button" style={{
              backgroundColor: '#4A90E2'
            }}>Proceed to checkout</Link>
          </div>
          </Basket>

        : ""
      }

      </div>
    );
  }
}

export { BasketButton, Basket };
