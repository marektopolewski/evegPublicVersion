import React, { Component } from 'react';
import Card from './Card';
import { getProductList, getProductDetails } from "./model";
import Select from 'react-select';

export default class ProductPage extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
        selectedDisplay: 0,
        selectedOrdering: 0,
        display: "tall",
        prodList: getProductList()
    };
    this.orgProdList = getProductList();
    this.orgDetailList = getProductDetails();
  }

  changeDisplay = (selectedDisplay) => {
    this.setState({ selectedDisplay });
    this.state.display = selectedDisplay.value===0 ? "tall" : "wide";
  };

  changeOrdering = (selectedOrdering) => {
    this.setState({ selectedOrdering });

    var fullList = Object.values(this.orgDetailList);
    if (selectedOrdering.value === 1) {
      this.state.prodList.sort();
    }
    else if (selectedOrdering.value === 2) {
      this.state.prodList.sort().reverse();
    }
    else if (selectedOrdering.value === 3) {
      fullList.map((item,i) => {
        fullList[i]["id"] = this.orgProdList[i];
      });
      fullList.sort(function(a,b){ return b["price"]-a["price"] });
      var newList = [];
      fullList.map((item,i) => {
        newList.push(item["id"]);
      });
      this.state.prodList = newList;
    }
    else if (selectedOrdering.value === 4) {
      fullList.map((item,i) => {
        fullList[i]["id"] = this.orgProdList[i];
      });
      fullList.sort(function(a,b){ return a["price"]-b["price"] });
      var newList = [];
      fullList.map((item,i) => {
        newList.push(item["id"]);
      });
      this.state.prodList = newList;
    }
    else {
      this.state.prodList = this.orgProdList;
    }
  };

  render(){
    const { selectedDisplay } = this.state;
    const { selectedOrdering } = this.state;

    const displayOptions = [
      {label:'Horizontal', value:0},
      {label:'Vertical', value:1}
    ];

    const orderingOptions = [
      {label:'Popularity', value:0},
      {label:'Alphabetical (A-Z)', value:1},
      {label:'Alphabetical (Z-A)', value:2},
      {label:'Price (high to low)', value:3},
      {label:'Price (low to high)', value:4}
    ];

    const DisplaySelect = (props) => (
      <div className="select-display-div">
        <Select
          classNamePrefix="select-display-products"
          value={selectedDisplay}
          onChange={this.changeDisplay}
          options={displayOptions}
          placeholder={displayOptions[0].label}
        />
      </div>
    );

    const OrderingSelect = (props) => (
      <div className="select-order-div">
        <Select
          classNamePrefix="select-order-products"
          value={selectedOrdering}
          onChange={this.changeOrdering}
          options={orderingOptions}
          placeholder={orderingOptions[0].label}
        />
      </div>
    );

    return (
        <div className="products-container">
          <div className="product-page-header">
              <div className="product-page-title">
                <div><h1>Products</h1></div>
                <div className="product-page-description">Select your items below</div>
              </div>
              <div className="select-div">
                <DisplaySelect />
                <OrderingSelect />
            </div>
          </div>

          {this.state.prodList.map((item, i) =>
            <Card itemID = {item} display={this.state.display} updates={this.props.updates} />
          )}
          <div className="filling-empty-space-child" />
          <div className="filling-empty-space-child" />
          <div className="filling-empty-space-child" />
        </div>
    );
  }
}
