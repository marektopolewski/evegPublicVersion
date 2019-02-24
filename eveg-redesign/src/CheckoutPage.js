import React, { Component } from 'react';
import { Basket } from './Basket';
import { Link } from "react-router-dom";
import { getTotalBasketCost, formatPrice, calculateTotals } from './model';
import Navigation from './Navigation';
import { Step, Icon } from 'semantic-ui-react';
import Footer from './Footer';


export default class CheckoutPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }

  render(){

    return (
      <div>
        <Navigation />

        <div className="checkout-head-container">

        <h1> Checkout </h1>

        <Step.Group ordered horizontal>
          <Step active>
            <Step.Content>
              <Step.Title>Summary</Step.Title>
              <Step.Description>View your items</Step.Description>
            </Step.Content>
          </Step>

          <Step>
            <Step.Content>
              <Step.Title>Payment</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step>
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        </div>

        <div className="checkout-basket-container">

          <Basket update={() => this.setState(this.state)} style={{
            boxShadow: 'none',
            position: 'unset',
            maxWidth: '700px',
            zIndex: 0
          }}>

          <div style={{
            justifyContent: 'flex-end',
            margin: '20px'
          }} className="basket-cost-container">
            <table>
              <tbody>
                <th></th>
                <th><p style={{width: 'fit-content', marginLeft: 'auto'}}>Cost</p></th>
                <tr>
                  <td> Total excluding VAT </td>
                  <td>
                    <p style={{width: 'fit-content', marginLeft: 'auto'}}>
                      { formatPrice(parseInt(calculateTotals()['totalnovat'])) }
                    </p>
                  </td>
                </tr>
                <tr>
                  <td><h2 style={{margin: 0, marginLeft: 'auto', fontWeight: 'normal'}}>Total</h2></td>
                  <td><h2 style={{width: 'fit-content', margin: 0, marginLeft: 'auto'}}>{formatPrice(getTotalBasketCost())}</h2></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sub-basket-container">

            <Link to="/" className="general-button" style={{
              backgroundColor: '#9B9B9B'
            }}>Continue shopping</Link>

            <Link to="/payment" className="general-button" style={{
              backgroundColor: '#4A90E2'
            }}>Proceed to payment</Link>


          </div>
          </Basket>
        </div>

        <Footer style={{
          position: 'unset'
        }} />
      </div>
    );

  }
}