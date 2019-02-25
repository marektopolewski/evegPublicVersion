import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Step, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class PaymentPage extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      numberValue: ""
    }
  }

  render(){
    return (

      <div>
        <div className="checkout-head-container">

        <h1> Payment </h1>
        <h2> Enter your billing information below </h2>

        <Step.Group ordered>
          <Step completed>
            <Step.Content>
              <Step.Title>Summary</Step.Title>
              <Step.Description>View your items</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
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

        <div className="payment-form-container">

        <h2> Personal Details </h2>

        <Form>
        <Form.Group>
          <Form.Input label="First Name" placeholder="First Name" />
          <Form.Input label="Last Name" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
          <Form.Input type="email" label="Email" placeholder="john.smith@example.com" />
          <Form.Input label="Phone Number" value={this.state.numberValue} onChange={(e) => this.setState({numberValue: e.target.value.replace(/^\d+$/g, '')})} type="tel" placeholder='+XX XXX XXX XXXX' />
        </Form.Group>
        </Form>

        <h2 style={{
          marginTop: '30px',
        }} >Billing information</h2>

        <Form>
        <Form.Group>
          <Form.Input label="Address Line 1" placeholder="University Of Warwick" />
          <Form.Input label="Card Number" placeholder="XXXX-XXXX-XXXX-XXXX" />
        </Form.Group>
        <Form.Group>
          <Form.Input label="Address Line 2" placeholder="University Of Warwick" />
          <Form.Input label="Security Code" placeholder="xxx" />
          <Form.Input label="Expiry Date" placeholder="MM / YYYY" />

        </Form.Group>

        <Form.Group>
          <Form.Input label="Country" placeholder="United Kingdom" />
          <Form.Input label="Name on card" placeholder="John Smith" />
        </Form.Group>

        <Form.Group>
          <Form.Input label="County" placeholder="Warwickshire" />
          <Form.Input label="Postcode" placeholder="CV4 7AL" />
        </Form.Group>
        </Form>

        </div>


        <div style={{
          marginBottom: '30px'
        }}  className="sub-basket-container">
          <Link style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF435A'
          }} className="general-button" to="/">Cancel</Link>
          <Link style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7ED321'
          }} className="general-button" to="/confirmation">Confirm Order</Link>
        </div>
      </div>

    );
  }


}
