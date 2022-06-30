const accounts = [
  {
    name: 'Babu',
    accountNo: 2,
  },
  {
    name: 'Chandra',
    accountNo: 3,
  },
  {
    name: 'Arun',
    accountNo: 1,
  },
];
const balances = {
  //accountNo: balance
  '1': 5000,
  '2': 2000,
  '3': 0,
};
const transactions = [
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 1,
    type: 'deposit',
    amount: 500,
  },
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 300,
  },
  {
    accountNo: 2,
    type: 'withdrawal',
    amount: 200,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 200,
  },
];

var updateBalancesWithTransactions = function () {
  // Implement transaction code here.
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].type === 'withdrawal') {
      balances[transactions[i].accountNo] -= transactions[i].amount;
    } else if (transactions[i].type === 'deposit') {
      balances[transactions[i].accountNo] += transactions[i].amount;
    }
  }
};
var getBalance = function (item) {
  return {
    name: item.name,
    accountNo: item.accountNo,
    balances: balances[item.accountNo],
  };
};
var displayBalances = function () {
  // Implement display code here.
  let dict = accounts.map(getBalance);
  console.table(dict);
};
var main = function () {
  console.log('Balances before transactions');
  displayBalances();
  updateBalancesWithTransactions();
  console.log('Balances after transactions');
  displayBalances();
};
main();
// Do not change below this line.