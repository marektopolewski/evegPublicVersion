import React, { Component } from 'react';
import { CartIconNav, CloseIcon, Bin } from './Asset';
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
import { toast } from 'react-toastify';
import { Confirm } from 'semantic-ui-react';
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
            alignItems: 'center',
            width: '120px'
          }}>

          {
            !this.props.noedit ?     <button style={{
                  marginLeft: '10px',
                  marginRight: '10px'
                }} className="number-picker button-fade" onClick={
                  () => this.props.incQuantity(this.props.id, this.props.quantity)
                }>+</button> : ""

          }

          {this.props.quantity}

          {
            !this.props.noedit ?   <button
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
                () => this.props.decQuantity(this.props.id, this.props.quantity)
              }>
              -
              </button> : ""
          }
          </div>
          </td>
          <td style={{
            width: '60px'
          }} >{`£${(this.props.price * this.props.quantity).toFixed(2)}`}</td>
          <td>
          {
            !this.props.noedit ? (!this.state.pendingConfirmation ?
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
              onClick={() => this.props.removeItem(this.props.id) || this.setState({
                ...this.state,
                pendingConfirmation: false
              })}
              className="button-fade">
                Remove {this.props.name}?
              </button>) : ""
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
    this.getItems = this.getItems.bind(this);
    this.state = {
        confirmOpen: false,
    };
  }

  getItems(){
    return (this.props.items ? this.props.items : getBasketItems()).map((item, i) =>
                    <BasketItem
                      noedit={this.props.noedit}
                      key={i}
                      incQuantity={this.incQuantity}
                      decQuantity={this.decQuantity}
                      removeItem={this.removeItem}
                      {...item}
                    />);
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
    toast.info(`Removed ${name} from basket.`,
      {
        // hideProgressBar: true,
        // closeOnClick: true,
        // pauseOnHover: false,
        // draggable: false,
    });
    removeProductFromBasket(name.toLowerCase());
    this.setState(this.state);
    this.props.update();
  }

  clearBasket(flag) {
    this.state.confirmOpen = false;
    if (flag) {
      createEmptyBasket();
      toast.success(`Basket emptied!`);
    }
    this.props.update();
  }

  render(){
    return (
      <div style={this.props.style} className="basket-container">
        <div className="basket-header">
          <h2>{this.props.title ? this.props.title : "Your Basket"}</h2>

          {
            this.getItems().length > 0 ?
            <div className="basket-wrapper">
              <table>
              <tbody>
              <tr className="basket-headings">
                <th>Added Item</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                {this.props.notClearable === false ? "" : (<th style={{textAlign:`center`}}>
                    <div style={{
                      cursor: 'pointer',
                      opacity: '0.7'
                    }} onClick={() => {this.state.confirmOpen=true; this.props.update();}}>
                        <Bin />
                    </div>
                </th>)}
              </tr>
              {
                this.getItems().length > 0 ? this.getItems() : ""
              }
            </tbody>
            </table>
            </div>
            : <h2 style={{
              width: '100%',
              textAlign: 'center',
              margin: '50px 0px 50px 0px'
            }} >No items.</h2>
          }


        {this.props.children}

        </div>
        <Confirm
          open={this.state.confirmOpen}
          header='Careful!'
          cancelButton='Cancel'
          confirmButton="Empty"
          content='Are you sure you want to empty the basket?'
          onCancel={() => this.clearBasket(false)}
          onConfirm={() => this.clearBasket(true)}
          size='small'
        />
      </div>
    );
  }

}


class BasketButton extends Component {
  constructor(props, context){
    super(props, context);
    // console.log(getProductDetails());
    // createEmptyBasket();
    // addToBasket("apples", 3);
    // addToBasket("bananas", 2);

    // console.log(readBasket());
    this.state = {
      totalCost: 0,
      basketVisible: false,
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

      <button disabled={this.props.disabled} onClick={this.toggleBasket} className="button-hover">
        <CartIconNav style={!this.props.disabled ? {} : {
          fill: 'rgba(0,0,0,0.2)'
        }} />
      </button>
      <div style={
        !this.props.disabled ? {} : {
          color: 'rgba(0,0,0,0.2)'
        }
      } onClick={() => this.props.disabled ? "" : this.toggleBasket()} className="navigation-basket-price">
        { formatPrice(getTotalBasketCost()) }
      </div>


      {
        this.state.basketVisible ?
        <Basket update={() => this.setState(this.state)}>
          <div className="sub-basket-container">
            <div className="basket-cost-container">
              <h2 style={{margin: 0, fontWeight: 'normal'}}>Total</h2>
              <h2 style={{margin: 0, marginLeft: '10px'}}>{formatPrice(getTotalBasketCost())}</h2>
            </div>
            <Link onClick={this.toggleBasket} to="/checkout" className="general-button" style={{
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
