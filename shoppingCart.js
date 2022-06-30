/* Data */
const rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

const discounts = {
  // values are in percentages.
  Apple: 10,
};

const taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

const purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  }
];

/* Functions */
var getDiscountPercent = (productName) => discounts.hasOwnProperty(productName) ? discounts[productName]/100 : 0 ; 

var getTaxPercent = (productName) => taxes.hasOwnProperty(productName) ? taxes[productName]/100 : 0 ; 

var getUnitPrice = function (itemName) {
  var discount = rates[itemName]*getDiscountPercent(itemName);
  var tax = rates[itemName]*getTaxPercent(itemName);
  var unitPrice = (rates[itemName]-discount)+tax;
  return unitPrice;
};

var getLineItemPrice = function (lineItem) {
    return lineItem.units * getUnitPrice(lineItem.item);
};

var getSum = function (purchase) {
  let dict = purchase.map(getLineItemPrice);
  return dict.reduce((x, y) => x + y, 0); //sum of the prices of all the items purchased
};

// Do not change below this line.
/* Main Function */
var main = function main() {
  console.log(getSum(purchases));
}

main();