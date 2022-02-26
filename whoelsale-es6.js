// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem.

// Sum the final price of all the lineItems.

const UnitPrices = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};
const Discounts = {
  // values are percentages
  Apple: 10,
};

const Taxes = {
  // values are percentages
  Carrot: 5,
  Guava: 10,
};

const Bills = [
  [
    {
      item: 'Carrot',
      units: 200,
    },
    {
      item: 'Apple',
      units: 150,
    },
    {
      item: 'Guava',
      units: 40,
    },
  ],
  [
    {
      item: 'Carrot',
      units: 20,
    },
  ],
  [
    {
      item: 'Apple',
      units: 30,
    },
    {
      item: 'Guava',
      units: 80,
    },
  ]
];

const PaymentsMade = [
  10000,
  3000,
  7500,
]

const getDiscountPercent = (productName) => Discounts[productName]/100 || 0 ; 

const getTaxPercent = (productName) => Taxes[productName]/100 || 0 ; 

const getUnitPrice = (itemName) => {
  const discount = UnitPrices[itemName]*getDiscountPercent(itemName);
  const tax = UnitPrices[itemName]*getTaxPercent(itemName);
  const finalPrice = (UnitPrices[itemName]-discount)+tax;
  return finalPrice;
};

const getLineItemPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem.item);

const getSum = (bill) =>  (bill.map(getLineItemPrice)).reduce((x, y) => x + y, 0); //sum of the prices of all the items purchased
/* Programme */
const PendingPayments = () => {
  let sum = 0;
  for(let x of Bills){
      sum += getSum(x);
  }
  let pending_Payment = (sum)-(PaymentsMade.reduce((m, n) => m + n, 0));
  console.log(pending_Payment); 
}
PendingPayments();
