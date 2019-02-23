import React, { Component } from 'react';
import {AddToCartButton} from './Asset';
import Select from 'react-select';
import Modal from 'react-awesome-modal';

export default class Card extends Component {

    state = {
        selectedOption: null,
        visible: false,
    };

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render(){
        const { selectedOption } = this.state;
        const item = this.props.item;

        const expiresOn = new Date();
        expiresOn.setDate(expiresOn.getDate()+item.expiryDate);
        var dateFormat = require('dateformat');

        const maxAmount = item.maxAmount>0 ? item.maxAmount : 100;
        var i;
        var options = [];
        for (i = 1; i <= maxAmount; i++) {
            options.push({label:i, value: i})
        }

        return (
            <div className="card-container">
                <div
                    className="card-image-div"
                    style={{backgroundImage: `url('${item.image}')`, backgroundSize: `cover`}}
                    onClick={() => this.openModal()}
                />
                <Modal visible={this.state.visible} width="600" height="390" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div style={{textAlign:`center`}}>
                        <div style={{marginRight:`20px`, position:`absolute`, right:`0`}}>
                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </div>
                        <h1>{item.name}</h1>
                        <div
                            className="card-popup-div"
                            style={{backgroundImage: `url('${item.image}')`, backgroundSize: `cover`}}
                            onClick={() => this.openModal()}
                        />
                    </div>
                </Modal>
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
                            Pack of {item.units}
                        </td>
                    </tr></tbody></table>
                </div>
                <div className="card-add-to-cart">
                    <div className="dropdown-div">
                        <Select
                            classNamePrefix="select-quantity-dropdown"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder={"0"}
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
