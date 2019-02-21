import React, { Component } from 'react';
import { CartIconNav, CloseIcon } from './Asset';
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

// const NumberPicker = ()

class BasketItem extends Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <tr>
      <td><b>{this.props.name} ({this.props.variety})</b></td>
          <td>{this.props.unitQuantity}</td>
          <td style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          </td>
          <td>{`£${(this.props.price * this.props.quantity).toFixed(2)}`}</td>
          <td>
            <button className="button-fade">
              <CloseIcon style={{
                height: '15px',
                width: '15px',
                fill: '#464646'
              }} />
            </button>
          </td>
        </tr>);
  }

}



class Basket extends Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div className="basket-container">
        <div className="basket-header">
          <h2>Your Basket</h2>

          <table>
          <tr>
            <th>Added Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {
            this.props.items.map(item => <BasketItem {...item} />)
          }
        </table>

        </div>
      </div>
    );
  }

}


class BasketButton extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      totalCost: 0,
      basketVisible: true,
    }
    this.toggleBasket = this.toggleBasket.bind(this);
  }

  // Formats cost to string.
  formatPrice(cost){
    return `£${cost.toFixed(2)}`
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
        }}>{this.formatPrice(this.state.totalCost)}</p>


      {
        this.state.basketVisible ?
        <Basket items={[
          {
            name: "Apple",
            image: 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/guide/guide-image/2017/07/apples-700x350.png?itok=IZSWDgr1',
            variety: "Braeburn",
            price: 1.99,
            unitQuantity: 6,
            quantity: 1,
            id: '1'
          }
        ]} />
        : ""
      }

      </div>
    );
  }
}

export { BasketButton };
