import React, { Component } from 'react';
import {AddToCartButton} from './Asset';
import {addToBasket, getProductDetails} from './model';
import Select from 'react-select';
import Modal from 'react-awesome-modal';
import { toast } from 'react-toastify';

export default class Card extends Component {

    state = {
        selectedOption: {label:1, value:1},
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

    addBasketWrapper(product, selectedOption) {

        const quantity = selectedOption===null ? -1 : selectedOption.value;
        console.log("selected="+selectedOption.value);
        if (quantity<1 || quantity===undefined) {
            toast.info("Please specify the quantity.", {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        toast.success("Item successfully added!", {
            position: toast.POSITION.TOP_CENTER
        });
        this.setState({ selectedDisplay : 1 });
        addToBasket(this.props.itemID, quantity);
        this.props.updates();

        console.log('Added ' + product + ' in quantity ' + quantity);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    onSelectKeyDown(event) {
        if (event.keyCode===13) {
            this.addBasketWrapper(this.props, this.state.selectedOption);
        }
    }

    render(){
        const { selectedOption } = this.state;

        const prods = getProductDetails();
        const item = prods[this.props.itemID];

        const expiresOn = new Date();
        expiresOn.setDate(expiresOn.getDate()+item.expiryDate);
        var dateFormat = require('dateformat');

        const maxAmount = item.maxAmount>0 ? item.maxAmount : 100;
        var i;
        var options = [];
        for (i = 1; i <= maxAmount; i++) {
            options.push({label:i, value: i})
        }

        const image = (
            <div
                className="card-image-div"
                style={{backgroundImage: `url('${item.image}')`, backgroundSize: `cover`}}
                onClick={() => this.openModal()}
            />
        );

        const modal = (
            <Modal visible={this.state.visible} width="600" height="390" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div style={{textAlign:`center`}}>
                    <div style={{marginRight:`20px`, position:`absolute`, right:`0`}}>
                        <a href={"javascript:void(0);"} onClick={() => this.closeModal()}>Close</a>
                    </div>
                    <h1>{item.name}</h1>
                    <div
                        className="card-popup-div"
                        style={{backgroundImage: `url('${item.image}')`, backgroundSize: `cover`}}
                        onClick={() => this.openModal()}
                    />
                </div>
            </Modal>
        );

        const under_card = (
            <div>
                <div className={"card-title-" + this.props.display}>
                    {item.name}
                </div>
                <div className="card-expiry">
                    Expires {dateFormat(expiresOn, "dd/mm/yy")}
                </div>
                <div className="card-price-table">
                    <table><tbody><tr>
                        <td className={"card-price-td-" + this.props.display}>
                            &pound;{item.price}
                        </td>
                        <td className={"card-form-td-" + this.props.display}>
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
                            placeholder={"1"}
                            onKeyDown = {(event) => {this.onSelectKeyDown(event)}}
                        />
                    </div>
                    <div className="add-button-div" onClick={() => {
                        this.addBasketWrapper(this.props, selectedOption);
                    }}>
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        );

        const tall_card = (
            <div>
                {image}
                {modal}
                {under_card}
            </div>
        );

        const wide_card = (
            <div style={{display:`flex`}}>
                <div>
                    {image}
                </div>
                <div>
                    {modal}
                    {under_card}
                </div>
            </div>
        );

        return (
            <div className={"card-container-" + this.props.display}>
                { this.props.display === "tall" ? tall_card : wide_card }
            </div>
        );
    }
};
