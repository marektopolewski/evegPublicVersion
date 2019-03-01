import React, { Component } from 'react';
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Step, Form, Dropdown } from 'semantic-ui-react';
import { createEmptyBasket, getBasketItems } from './model';
import 'semantic-ui-css/semantic.min.css';
import {Countries} from './countriesData';

export default class PaymentPage extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      numberValue: "",
      form: {}
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  updateInfo(e, field){
    var name = field ? field.name : e.target.name;
    var value = field ? field.value : e.target.value;


    if (name == "Card Number") value = `****-****-****-${value.substring(15, value.length)}`;
    if (name == 'securityCode') return;

    this.props.order.paymentDetails[name] = value;
    console.log(this.props.order.paymentDetails);
  }

  handleSubmit(e){

    e.preventDefault();
    e.stopPropagation();

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

        <Step.Group ordered onClick={() => this.props.history.push('/checkout')}>
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

          <Step ordered>
            <Step.Content>
              <Step.Title>Order Confirmation</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        </div>

        <div className="payment-form-container">

        <Form onSubmit={this.handleSubmit}>
        <h2> Personal Details </h2>
        <p> Your personal details are used to manage your order. </p>

        <Form.Group>
          <Form.Input required onChange={this.updateInfo} name="First Name" label="First Name" placeholder="First Name" />
          <Form.Input required onChange={this.updateInfo} name="Last Name" label="Last Name" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="Email" type="email" label="Email" placeholder="john.smith@example.com" />

          <InputMask mask="9999 999 9999" onChange={this.updateInfo}>
            {({inputProps}) =>
              <Form.Input {...inputProps} required name="Phone Number" label="Phone Number" type="tel" placeholder='XXXX XXX XXXX' />
            }
          </InputMask>
        </Form.Group>
        <h2 style={{
          marginTop: '30px',
        }} >Billing information</h2>

        <p> Enter your payment details below. Payment will occur before collection. </p>
        <Form.Group>
          <Form.Input required onChange={this.updateInfo} name="Address Line 1" label="Address Line 1" placeholder="University Of Warwick" />
          <InputMask mask="9999-9999-9999-9999" onChange={this.updateInfo}>
          {({inputProps}) =>
            <Form.Input required name="Card Number" label="Card Number" placeholder="XXXX-XXXX-XXXX-XXXX" />
          }
        </InputMask>
        </Form.Group>
        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="Address Line 2" label="Address Line 2" placeholder="University Of Warwick" />

          <InputMask mask="999" onChange={this.updateInfo}>
          {({inputProps}) =>
            <Form.Input tooltip="This is the security code at the back of your debit or credit card" width={3} required name="securityCode" label="CCV" placeholder="xxx" />
          }
        </InputMask>

        <InputMask mask="99/9999" onChange={this.updateInfo}>
        {({inputProps}) =>
          <Form.Input width={5} required name="Expiry Date" label="Expiry Date"  placeholder="MM/YYYY" />
        }
      </InputMask>

        </Form.Group>

        <Form.Group>
{
            // <Form.Input required onChange={this.updateInfo} name="country" label="Country" placeholder="United Kingdom" />
}
          <Form.Field>
          <label htmlFor="country">Country</label>
          <Dropdown
            name="Country Code"
            onChange={this.updateInfo}
            options={Countries.map(c => Object({...c, flag: c.flag.toLowerCase()}))}
            search
            selection
            selectOnBlur={false}
          />
        </Form.Field>

          <Form.Input required onChange={this.updateInfo} name="Card Holder Name" label="Name on card" placeholder="John Smith" />
        </Form.Group>

        <Form.Group>
          <Form.Input onChange={this.updateInfo} name="County" label="County" placeholder="Warwickshire" />

          <InputMask mask="*** ***" onChange={this.updateInfo}>
          {({inputProps}) =>
            <Form.Input onChange={this.updateInfo} name="Postcode" label="Postcode" placeholder="CV4 7AL" />
          }
        </InputMask>
        </Form.Group>

        <div style={{
          marginBottom: '30px'
        }}  className="sub-basket-container">
          <Link style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
            margin: '10px',
            height: '36px',
          }} className="general-button" to="/checkout">Back</Link>

          <Form.Button className="general-button" style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7ED321',
            color: 'white'
          }}>Confirm Order</Form.Button>

        </div>

        </Form>

        </div>

      </div>

    );
  }


}
