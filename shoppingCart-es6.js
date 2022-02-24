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
const getDiscountPercent = (productName) => discounts[productName]/100 || 0 ; 

const getTaxPercent = (productName) => taxes[productName]/100 || 0 ; 

const getUnitPrice = (itemName) => {
  const discount = rates[itemName]*getDiscountPercent(itemName);
  const tax = rates[itemName]*getTaxPercent(itemName);
  const unitPrice = (rates[itemName]-discount)+tax;
  return unitPrice;
};

const getLineItemPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem.item);

const getSum = (purchase) =>  (purchase.map(getLineItemPrice)).reduce((x, y) => x + y, 0); //sum of the prices of all the items purchased

// Do not change below this line.
/* Main Function */
const main = function main() {
  console.log(getSum(purchases));
}

main();