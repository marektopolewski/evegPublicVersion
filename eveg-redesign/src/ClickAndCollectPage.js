import React, { Component } from 'react';

export default class ClickAndCollectPage extends Component {

  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
        <div style={{minHeight:`80%`, width:`80%`, maxWidth:`1000px`, marginLeft:`auto`, marginRight:`auto`, marginBottom:`30px`}}>
            <h1>Click & Collect</h1>
            <br />
            <h3>Why click & collect with eVeg?</h3>
            <p>Shop online with your favourite brands and have items delivered to a convenient eVeg store near you. No more missed deliveries or wasted days waiting in simply collect at a time that suits you. Most of our stores are open early ‘til late, 7 days a week. We have over 7,000 locations across the UK, meaning you’re never far from a eVeg store</p>
            <h3>Collection process:</h3>
            <ol>
                <li><b>Select an Item</b><br />
                To see if an item is eligible for In-Store Pickup, look for the Click & Collect option on the product detail page. Once you've selected your item and store, click Collect from Store and checkout like usual.<br /><br /></li>
                <li><b>Wait to Hear From Us</b><br />
                We'll let you know when your item should be available for pick up on the product detail page, in checkout and order summary. We'll send you a 'Ready For Pickup' email when your item is ready and waiting for you at the store.
                <br /><br /></li>
                <li><b>Pick Up Your Order</b><br />
                Once you recieve your 'Ready For Pickup' email, head to the store to pick up your items. Bring a copy of your 'Ready For Pickup' email or a valid photo ID. Look for signs in the store directing you to the Click & Collect area.</li>
            </ol>
            <br />
            <h3>Over 7,000 eVeg stores nationwide</h3>
            <p>Collect your item at a local eVeg store at a time that's easy for you, whether that's on your way to or from work, or on a Saturday or Sunday.</p>
            <br /><br />
            <h6>Credit: <a href="https://www.collectplus.co.uk/click-and-collect">CollectPlus.co.uk</a></h6>
        </div>
    );
  }
}
