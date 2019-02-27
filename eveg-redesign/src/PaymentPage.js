import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Step, Form } from 'semantic-ui-react';
import { createEmptyBasket, getBasketItems } from './model';
import 'semantic-ui-css/semantic.min.css';

export default class PaymentPage extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      numberValue: "",
      form: {}
    }
    this.updateInfo = this.updateInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInfo(e, {name, value}){

    // var updatedField = {};
    // updatedField[updated.name] = updated.value;

    // this.setState({
    //   ...this.state,
    //   form: {
    //     ...this.state.form,
    //     ...updatedField
    //   }
    // });
    // console.log(this.state);
    this.props.order.paymentDetails[name] = value;
    console.log(this.props.order.paymentDetails);
  }

  handleSubmit(e){

    e.preventDefault();
    e.stopPropagation();

    // Perform form validation.

    // Clear the basket & save items in the order object.
    this.props.order.items = getBasketItems();
    createEmptyBasket();
    this.props.history.push('/confirmation');
  }

  render(){
    return (

      <div>
        <div className="checkout-head-container">

        <h1> Payment </h1>
        <h2> Enter your billing information below </h2>

        <Step.Group ordered link onClick={() => this.props.order.items.length === 0 ? this.props.history.push('/checkout') : ""}>
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
              <Step.Title>Order Confirmation</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        </div>

        <div className="payment-form-container">

        <h2> Personal Details </h2>

        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input required onChange={this.updateInfo} name="firstName" label="First Name" placeholder="First Name" />
          <Form.Input required onChange={this.updateInfo} name="lastName" label="Last Name" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="email" type="email" label="Email" placeholder="john.smith@example.com" />
          <Form.Input required onChange={this.updateInfo} name="phoneNumber" label="Phone Number" value={this.state.numberValue} onChange={(e) => this.setState({numberValue: e.target.value.replace(/^\d+$/g, '')})} type="tel" placeholder='+XX XXX XXX XXXX' />
        </Form.Group>
        <h2 style={{
          marginTop: '30px',
        }} >Billing information</h2>
        <Form.Group>
          <Form.Input required onChange={this.updateInfo} name="address1" label="Address Line 1" placeholder="University Of Warwick" />
          <Form.Input required onChange={this.updateInfo} name="cardNumber" label="Card Number" placeholder="XXXX-XXXX-XXXX-XXXX" />
        </Form.Group>
        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="address2" label="Address Line 2" placeholder="University Of Warwick" />
          <Form.Input required onChange={this.updateInfo} name="securityCode" label="Security Code" placeholder="xxx" />
          <Form.Input required onChange={this.updateInfo} name="expiryDate" label="Expiry Date" placeholder="MM / YYYY" />

        </Form.Group>

        <Form.Group>
          <Form.Input required onChange={this.updateInfo} name="country" label="Country" placeholder="United Kingdom" />
          <Form.Input required onChange={this.updateInfo} name="cardName" label="Name on card" placeholder="John Smith" />
        </Form.Group>

        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="county" label="County" placeholder="Warwickshire" />
          <Form.Input onChange={this.updateInfo} name="postcode" label="Postcode" placeholder="CV4 7AL" />
        </Form.Group>

        <Form.Button content="submit" />

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
