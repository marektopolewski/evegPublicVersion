import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';
import { SuccessIcon } from './Asset';
import { Basket } from './Basket';
import { Link } from "react-router-dom";
import { formatPrice, calculateTotals, getTotalBasketCost } from './model';

export default class ConfirmationPage extends Component {

  render(){
    return (<div className="confirmation-page-container">

      <div className="checkout-head-container">

      <h1> Order Confirmation </h1>

        <Step.Group ordered>
          <Step completed>
            <Step.Content>
              <Step.Title>Summary</Step.Title>
              <Step.Description>View your items</Step.Description>
            </Step.Content>
          </Step>

          <Step completed>
            <Step.Content>
              <Step.Title>Payment</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Step.Content>
              <Step.Title>Order Confirmation</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

        <div className="confirmation-page-content-container">

          <div className="confirmation-page-header-container">
            <SuccessIcon />
            <h2 style={{
              color: 'rgb(126, 211, 33)'
            }}>Success</h2>

            <p>
              Your order has been placed. (Reference <b>#CV214</b>)
            </p>

            <p>
            It will be ready for collection in 3 days. Please make a note of the reference number or print off this page for reference.

          An email confirmation has been sent to <b>{this.props.order.paymentDetails.email}</b> (not you?)
            </p>

            <Basket title="Order summary" noedit style={{
              boxShadow: 'none',
              position: 'unset',
              width: '100%',
              // maxWidth: '700px',
              zIndex: 0
            }} items={this.props.order.items} />

            <div style={{
              justifyContent: 'flex-end',
              margin: '20px',
              width: '100%',
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

          </div>





          <Link className="general-button" style={{
            backgroundColor: 'gray'
          }} to="/">Continue Shopping</Link>

        </div>

      </div>
    </div>)
  }

}
