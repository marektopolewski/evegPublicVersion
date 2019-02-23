import React, { Component } from 'react';
import {AddToCartButton, ApplesCard} from './Asset';
import Select from 'react-select';

export default class Card extends Component {

    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render(){
        const item = this.props.item;
        var inside;

        const expiresOn = new Date();
        expiresOn.setDate(expiresOn.getDate()+item.expiryDate);
        var dateFormat = require('dateformat');
        
        switch (item.id) {
            case 1:
                inside = <ApplesCard />
                break;
            default:
                inside = "Item not found"
        }

        const maxAmount = item.maxAmount>0 ? item.maxAmount : 100;
        var i;
        var options = [];
        for (i = 1; i <= maxAmount; i++) {
            options.push({label:i, value: i})
        }

        return (
            <div className="card-container">
                <div className="card-image">
                    {inside}
                </div>
                <div className="card-title">
                    {item.name}
                </div>
                <div className="card-expiry">
                    Expires {dateFormat(expiresOn, "dd/mm/yy")}
                </div>
                <div className="card-price-table">
                    <table><tbody><tr>
                        <td className="card-price-td">
                            &pound;{item.price}
                        </td>
                        <td className="card-form-td">
                            {item.form}
                        </td>
                    </tr></tbody></table>
                </div>
                <div className="card-add-to-cart">
                    <div className="dropdown-div">
                        <Select
                            classNamePrefix="select-quantity-dropdown"
                            value={this.state}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className="add-button-div">
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        );
    }
};
