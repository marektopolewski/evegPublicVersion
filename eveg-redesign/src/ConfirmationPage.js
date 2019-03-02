import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';
import { SuccessIcon } from './Asset';
import { Basket } from './Basket';
import { Link } from "react-router-dom";
import { formatPrice, calculateTotals, getTotalBasketCost } from './model';

export default class ConfirmationPage extends Component {

  render(){
    console.log(Object.keys(this.props.order.paymentDetails))
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

            {
              this.props.order.paymentDetails.email ?
              <p><br/>An email confirmation has been sent to <b>{this.props.order.paymentDetails.email}</b></p> : ""
            }
            </p>

            <Basket title="Order summary" noedit style={{
              boxShadow: 'none',
              position: 'unset',
              width: '100%',
              // maxWidth: '700px',
              zIndex: 0
            }} items={this.props.order.items} />

            <div className="order-summary-details-container">

            <h2>Personal & Payment details</h2>

              <table>
              <tbody>
                {
                  Object.keys(this.props.order.paymentDetails).sort((a, b) => a.split('_')[1] - b.split('_')[1]).map((name, i) =>
                  <tr key={i}>
                    <td><b>{name.split('_')[0]}</b></td>
                    <td style={{
                      textAlign: 'end'
                    }}>{this.props.order.paymentDetails[name]}</td>
                  </tr>)
                }
              </tbody>
              </table>
            </div>

            <h2 style={{
              margin: '20px',
              alignSelf: 'flex-start'
            }}>Cost Summary</h2>

            <div style={{
              justifyContent: 'flex-end',
              margin: '0px 20px 0px 20px',
              width: '100%',
              padding: '0px 20px 0px 20px',
            }} className="basket-cost-container">
              <table>
                <tbody>
                  <th></th>
                  <tr>
                    <td> Total excluding VAT </td>
                    <td>
                      <p style={{width: 'fit-content', marginLeft: 'auto'}}>
                        { formatPrice(parseInt(calculateTotals(this.props.order.items)['totalnovat'])) }
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td><h2 style={{margin: 0, marginLeft: 'auto', fontWeight: 'normal'}}>Total</h2></td>
                    <td><h2 style={{width: 'fit-content', margin: 0, marginLeft: 'auto'}}>{formatPrice(parseInt(calculateTotals(this.props.order.items)['total']))}</h2></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>





          <Link className="general-button" style={{
            backgroundColor: 'gray',
            marginBottom: '30px',
          }} to="/">Continue Shopping</Link>

        </div>

      </div>
    </div>)
  }

}
