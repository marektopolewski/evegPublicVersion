function getProductDetails() {
  var productDetails = {};
  productDetails["carrots"] = {};
  productDetails["carrots"]["image"] = "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/carrots.jpg";
  productDetails["carrots"]["name"] = "Carrots (Nantes)";
  productDetails["carrots"]["description"] = "not just for rabbits";
  productDetails["carrots"]["units"] = "1kg";
  productDetails["carrots"]["price"] = 0.99;
  productDetails["carrots"]["expiryDate"] = 10;

  productDetails["bananas"] = {};
  productDetails["bananas"]["image"] = "https://cosmos-images2.imgix.net/file/spina/photo/13954/100118_Debunked_01.jpg";
  productDetails["bananas"]["name"] = "Bananas (Cavendish)";
  productDetails["bananas"]["description"] = "Yellow and banana-shaped";
  productDetails["bananas"]["units"] = "500g";
  productDetails["bananas"]["price"] = 1.29;
  productDetails["bananas"]["expiryDate"] = 10;

  productDetails["coconut"] = {};
  productDetails["coconut"]["image"] = "https://jooinn.com/images/coconuts-12.jpg";
  productDetails["coconut"]["name"] = "Coconut (West Coast Tall)";
  productDetails["coconut"]["description"] = "That exotic stuff";
  productDetails["coconut"]["units"] = "1";
  productDetails["coconut"]["price"] = 2.99;
  productDetails["coconut"]["expiryDate"] = 10;

  productDetails["apples"] = {};
  productDetails["apples"]["image"] = "https://www.lankaprincess.com/wp-content/uploads/2016/08/apples-768x480.jpg";
  productDetails["apples"]["name"] = "Apple (Braeburn)";
  productDetails["apples"]["description"] = "Red, sweet and juicy";
  productDetails["apples"]["units"] = "1kg";
  productDetails["apples"]["price"] = 1.49;
  productDetails["apples"]["expiryDate"] = 10;

  productDetails["cherries"] = {};
  productDetails["cherries"]["image"] = "https://iegvu.agribusinessintelligence.informa.com/-/media/agri-article-media/stock-images/raw-commodities/fruit-vegetable-crops/cherries/cherries_ripe_background_446356699_1200px.jpg";
  productDetails["cherries"]["name"] = "Cherries (Bing)";
  productDetails["cherries"]["description"] = "Cherry pancake anyone?";
  productDetails["cherries"]["units"] = "500g";
  productDetails["cherries"]["price"] = 1.99;
  productDetails["cherries"]["expiryDate"] = 10;

  productDetails["tomatoes"] = {};
  productDetails["tomatoes"]["image"] = "https://www.healthline.com/hlcmsresource/images/AN_images/AN313-Tomatoes-732x549-Thumb.jpg";
  productDetails["tomatoes"]["name"] = "Tomatoes (Alicante)";
  productDetails["tomatoes"]["description"] = "Red and ripe";
  productDetails["tomatoes"]["units"] = "500g";
  productDetails["tomatoes"]["price"] = 1.99;
  productDetails["tomatoes"]["expiryDate"] = 10;

  productDetails["potatoes"] = {};
  productDetails["potatoes"]["image"] = "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280-1200x800.jpg";
  productDetails["potatoes"]["name"] = "Potatoes (Russet)";
  productDetails["potatoes"]["description"] = "Boil them, bake them, mash them...";
  productDetails["potatoes"]["units"] = "1kg";
  productDetails["potatoes"]["price"] = 0.99;
  productDetails["potatoes"]["expiryDate"] = 10;

  productDetails["beans"] = {};
  productDetails["beans"]["image"] = "https://cdn.shopify.com/s/files/1/1698/1675/products/Bean_Blue_Lake_Pole.jpg";
  productDetails["beans"]["name"] = "Beans (Blue Lake)";
  productDetails["beans"]["description"] = "Green and healthy";
  productDetails["beans"]["units"] = "1kg";
  productDetails["beans"]["price"] = 1.29;
  productDetails["beans"]["expiryDate"] = 10;

  return productDetails;
}

function getProductList() {
  var products = [];
  var productDetails = getProductDetails();

  for (var key in productDetails) {
    products.push(key);
  }

  return products;
}

function getProductQuantity(product) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + product + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function readBasket() {
  var basket = {};
  var products = getProductList();
  var productcount = products.length;
  for (var i = 0; i < productcount; i++) {
    basket[products[i]] = getProductQuantity(products[i]);
  }

  return basket;
}

function calculateTotals() {
  var basket = readBasket();
  var productDetails = getProductDetails();

  var total = 0;
  for (var product in basket) {
    total += parseInt(basket[product]) * parseFloat(productDetails[product]["price"]);
  }

  var totals = {};
  totals["total"] = total.toString();
  totals["vat"] = (total - total / 1.175).toString();
  totals["totalnovat"] = (total / 1.175).toString();

  return totals;
}

function addToBasket(product, quantity) {
  if (document.cookie.indexOf(product) == -1) {
    createEmptyBasket();
  }

  var oldquantity = parseInt(getProductQuantity(product));
  var newquantity = oldquantity + parseInt(quantity);

  document.cookie = product + "=" + newquantity.toString() + ";path=/";
}

function removeProductFromBasket(product) {
  document.cookie = product + "=0;path=/";
}

function changeProductQuantity(product, newquantity) {
  document.cookie = product + "=" + newquantity.toString() + ";path=/";
}

function createEmptyBasket() {
  var products = getProductList();
  var productcount = products.length;
  for (var i = 0; i < productcount; i++) {
    document.cookie=products[i] + "=0;path=/";
  }
}

function createEmptyOrder() {
  document.cookie="title=;path=/";
  document.cookie="firstname=;path=/";
  document.cookie="surname=;path=/";
  document.cookie="number=;path=/";
  document.cookie="street=;path=/";
  document.cookie="postcode=;path=/";
  document.cookie="city=;path=/";
  document.cookie="country=;path=/";
  document.cookie="cardtype=;path=/";
  document.cookie="cardnumber=;path=/";
  document.cookie="month=;path=/";
  document.cookie="year=;path=/";
}

function setName() {
  document.cookie="title=" + document.getElementById('title').value + ";path=/";
  document.cookie="firstname=" + document.getElementById('firstname').value + ";path=/";
  document.cookie="surname=" + document.getElementById('surname').value + ";path=/";
}

function getName() {
  var name = {};
  name["title"] = getCookieVariableValue('title');
  name["firstname"] = getCookieVariableValue('firstname');
  name["surname"] = getCookieVariableValue('surname');

  return name;
}

function setAddress() {
  document.cookie="number=" + document.getElementById('number').value + ";path=/";
  document.cookie="street=" + document.getElementById('street').value + ";path=/";
  document.cookie="postcode=" + document.getElementById('postcode').value + ";path=/";
  document.cookie="city=" + document.getElementById('city').value + ";path=/";
  document.cookie="country=" + document.getElementById('country').value + ";path=/";
}

function getAddress() {
  var address = {};
  address["number"] = getCookieVariableValue('number');
  address["street"] = getCookieVariableValue('street');
  address["postcode"] = getCookieVariableValue('postcode');
  address["city"] = getCookieVariableValue('city');
  address["country"] = getCookieVariableValue('country');

  return address;
}

function setCardDetails() {
  if (document.getElementById('solo').checked) {
    document.cookie="cardtype=Solo;path=/";
  }
  else if (document.getElementById('switch').checked) {
    document.cookie="cardtype=Switch;path=/";
  }
  else if (document.getElementById('mastercard').checked) {
    document.cookie="cardtype=Mastercard;path=/";
  }
  else if (document.getElementById('visa').checked) {
    document.cookie="cardtype=Visa;path=/";
  }
  document.cookie="cardnumber=" + document.getElementById('cardnumber').value + ";path=/";
  document.cookie="month=" + document.getElementById('month').value + ";path=/";
  document.cookie="year=" + document.getElementById('year').value + ";path=/";
}

function getCardDetails() {
  var cardDetails = {};
  cardDetails["cardtype"] = getCookieVariableValue('cardtype');
  cardDetails["cardnumber"] = getCookieVariableValue('cardnumber');
  cardDetails["month"] = getCookieVariableValue('month');
  cardDetails["year"] = getCookieVariableValue('year');

  return cardDetails;
}

function getCookieVariableValue(variable) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + variable + "=");
  if (parts.length == 2) return parts.pop().split(";").shift()
}

// Added utility functions.

// Converts model.js format into model for basket:
// [
//   {
//     name,
//     quantity,
//     unit,
//     ...
//   }
// ]
function getBasketItems(){
  var counts = readBasket();
  var productDetails = getProductDetails();
  var items = [];
  for (var product in counts){
    if (counts[product] !== "0") items.push(
      {
        ...productDetails[product],
        id: product,
        quantity: parseInt(counts[product])
      }
    )
  }
  return items;
}

function getTotalBasketCost(){
  console.log(getBasketItems());
  return getBasketItems().map(item => item.quantity*item.price).reduce((acc, curr) => curr + acc, 0);
}

function formatPrice(cost){
  return `£${cost.toFixed(2)}`
}

export {
  getName, getAddress, getCardDetails, getProductList, getProductDetails,
  getCookieVariableValue, setCardDetails, setAddress, setName, createEmptyOrder,
  createEmptyBasket, getProductQuantity, readBasket, calculateTotals, addToBasket,
  removeProductFromBasket, changeProductQuantity,
  getBasketItems, getTotalBasketCost, formatPrice
}
